"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title and desc pls");
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json", //WHATTTT (?)
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
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
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
