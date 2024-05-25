import React from "react";
import { RmvBtn } from ".";
import Link from "next/link";

// import { HiPencilAlt } from "react-icons";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    // if chache stored so updation of data wont reflect
    if (!res.ok) {
      throw new Error("Failed to fetch topics!");
    }
    return res.json();
  } catch (error) {}
};

const TopicList = async () => {
  const { topics } = await getTopics();
  console.log("Topics", topics);
  return (
    <section className="flex flex-col gap-3">
      {topics.map((topic) => {
        return (
          <div
            className="px-[21px] py-[15px] 
        flex flex-row justify-between w-full
        border-[1px] border-[#21212150] rounded-sm"
          >
            <div className="flex text-start flex-col">
              <h2 className="text-[21px] font-medium">{topic.title}</h2>
              <p className="text-[12px]">{topic.description}</p>
            </div>
            <div className="flex flex-row gap-[6px]">
              <RmvBtn id={topic._id} />
              <Link
                href={`/editTopic/${topic._id}`}
                className="text-[6px] bg-[#212121] text-[#f1f1f1] px-[6px] py-[3px] rounded-full h-fit"
              >
                Edit
              </Link>
            </div>{" "}
          </div>
        );
      })}
    </section>
  );
};

export default TopicList;
