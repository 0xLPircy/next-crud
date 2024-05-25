import React from "react";
import { RmvBtn } from ".";
import Link from "next/link";
// import { HiPencilAlt } from "react-icons";

const TopicList = () => {
  return (
    <div
      className="px-[21px] py-[15px] 
    flex flex-row justify-between w-full
    border-[1px] border-[#21212150] rounded-sm"
    >
      <div className="flex text-start flex-col">
        <h2 className="text-[21px] font-medium">Title</h2>
        <p className="text-[12px]">Desc</p>
      </div>
      <div className="flex flex-row gap-[6px]">
        <RmvBtn />
        <Link
          href={`/editTopic/id`}
          className="text-[6px] bg-[#212121] text-[#f1f1f1] px-[6px] py-[3px] rounded-full h-fit"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default TopicList;
