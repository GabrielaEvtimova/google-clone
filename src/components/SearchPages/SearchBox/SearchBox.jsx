"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const term = searchParams.get("searchTerm");

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(term || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/search/web/?searchTerm=${searchTerm}`);
  };

  return (
    <form
      className="flex border border-neutral-300 rounded-full shadow-lg px-6 py-3 mt-4 sm:mt-0 sm:ml-10 sm:mr-5 sm:flex-grow max-w-4xl items-center sm:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      <RxCross2
        className="text-2xl text-neutral-500 cursor-pointer sm:mr-2"
        onClick={() => setSearchTerm("")}
      />
      <BsFillMicFill className="pl-4 hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-neutral-300 mr-3" />
      <AiOutlineSearch
        className="hidden sm:inline-flex text-2xl text-blue-500 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
}
