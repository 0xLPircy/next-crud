"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTopicForm = ({ id, curTitle, curDesc }) => {
  const [title, setTitle] = useState(curTitle);
  const [description, setDescription] = useState(curDesc);
  console.log(
    "in ed form\n",
    "cur",
    curTitle,
    curDesc,
    "\nstste:",
    title,
    description
  );
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title and desc pls");
    }
    try {
      console.log("trying  submit", title, description);
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json", //WHATTTT (?)
        },
        body: JSON.stringify({ newTitle: title, newDescription: description }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to update");
      }
      router.push("/");
    } catch (error) {}
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className="border-[1px] border-[#21212150] rounded-sm 
    px-[15px] py-[6px] w-full
    text-[18px]"
        type="text"
        placeholder="Enter Title"
      />
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
        className="border-[1px] border-[#21212150] rounded-sm 
    px-[15px] py-[6px] w-full
    text-[18px]"
        type="text"
        placeholder="Enter Description"
      />
      <button
        type="submit"
        className="bg-[#53e483] px-[15px] py-[6px] rounded-sm font-medium
  hover:bg-[#328f51] hover:cursor-pointer"
      >
        Edit Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
