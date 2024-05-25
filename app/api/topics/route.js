import connectMongoDB from "@/app/_libs/mongodb";
import Topic from "@/app/_models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  //   connect to mogodb witht he url
  await connectMongoDB();
  //   schema create hora
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  //   connect to mogodb witht he url
  await connectMongoDB();
  //   finding get
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
