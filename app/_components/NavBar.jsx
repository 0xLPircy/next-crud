import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav
      className="flex flex-row w-full items-center justify-between 
    px-9 py-[12px] text-[12px]
    bg-[#eeeeee]"
    >
      <Link href="" className="font-bold text-[30px] text-[#212121]">
        Lorem
      </Link>
      <Link
        href="/addTopic"
        className="bg-[#212121] px-[12px] py-[6px] rounded-md text-[#f1f1f1]"
      >
        Add Topic
      </Link>
    </nav>
  );
};

export default NavBar;
