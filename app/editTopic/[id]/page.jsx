import React from "react";

const EditTopic = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border-[1px] border-[#21212150] rounded-sm 
    px-[15px] py-[6px] w-full
    text-[18px]"
        type="text"
        placeholder="Enter Title"
      />
      <input
        className="border-[1px] border-[#21212150] rounded-sm 
    px-[15px] py-[6px] w-full
    text-[18px]"
        type="text"
        placeholder="Enter Description"
      />
      <button
        className="bg-[#53e483] px-[15px] py-[6px] rounded-sm font-medium
  hover:bg-[#328f51] hover:cursor-pointer"
      >
        Edit Topic
      </button>
    </form>
  );
};

export default EditTopic;
