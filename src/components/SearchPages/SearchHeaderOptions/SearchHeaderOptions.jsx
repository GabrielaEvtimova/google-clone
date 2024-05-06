"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const path = usePathname();

  const router = useRouter();

  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const selectOption = (option) => {
    router.push(
      `/search/${
        option === "Images" ? "image" : "web"
      }?searchTerm=${searchTerm}`
    );
  };

  return (
    <div
      className="flex space-x-2 items-center select-none border-b w-full justify-center 
    lg:justify-start lg:pl-52 text-neutral-700"
    >
      <div
        className={`flex items-center space-x-1 border-b-4 border-transparent
      active:text-blue-500 active:border-blue-500 cursor-pointer pb-3 px-2
      ${path === "/search/web" && '!text-blue-600 !border-blue-600'}`}
        onClick={() => selectOption("All")}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div 
      className={`flex items-center space-x-1 border-b-4 border-transparent
      active:text-blue-500 active:border-blue-500 cursor-pointer pb-3 px-2
      ${path === "/search/image" && '!text-blue-600 !border-blue-600'}`}
        onClick={() => selectOption("Images")}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
