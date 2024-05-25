import EditTopicForm from "@/app/_components/EditTopicForm";
import React from "react";

const getTopicById = async (id) => {
  try {
    console.log("in age ID", id);
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics!");
    }
    // console.log("rees for get by id:", res);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const EditTopic = async ({ params }) => {
  const { id } = params;
  // console.log("PARAm", params);
  const topic = await getTopicById(id);
  const { title, description } = topic.topic;
  // console.log("SEE", topic.topic.title, title, description);
  // console.log("id:", id);

  return (
    <>
      <EditTopicForm id={id} curTitle={title} curDesc={description} />
    </>
  );
};

export default EditTopic;
