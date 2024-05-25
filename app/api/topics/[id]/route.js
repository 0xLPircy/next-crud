import connectMongoDB from "@/app/_libs/mongodb";
import Topic from "@/app/_models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  //   console.log(params);
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

// get single topic by id
export async function GET(request, { params }) {
  const { id } = params;
  console.log("PARAMS:", params);

  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
