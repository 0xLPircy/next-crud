"use client";
import { useRouter } from "next/navigation";
import React from "react";

const RmvBtn = ({ id }) => {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("you sure bruh?");
    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error("Couldnt delete");
        }
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <button
      onClick={removeTopic}
      className="text-[6px] bg-[#870000] text-[#f1f1f1] px-[6px] py-[3px] rounded-full h-fit"
    >
      Delete
    </button>
  );
};

export default RmvBtn;
