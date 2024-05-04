"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomWordLoading, setRandomWordLoading] = useState(false);
  const router = useRouter();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
    setInput("");
  };

  const handleRandomSearch = async () => {
    setRandomWordLoading(true);

    const randomWord = await fetch("https://random-word-api.herokuapp.com/word")
      .then((data) => data.json())
      .then((result) => result[0]);

    if (!randomWord) return;

    router.push(`/search/web?searchTerm=${randomWord}`);

    setRandomWordLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] 
      border border-neutral-300 items-center px-5 py-3 rounded-full 
      hover:shadow-md focus-within:shadow-md transition-shadow
      sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-neutral-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none border-neutral-700"
          onChange={handleInput}
          value={input}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row sm:space-x-4 mt-8">
        <button
          onClick={handleSubmit}
          className="bg-[#f8f9fa] rounded-md text-neutral-800 hover:ring-neutral-200 focus:outline-none active:ring-neutral-300 hover:shadow-md w-36 h-10 transition-shadow"
        >
          Google Search
        </button>
        <button
          disabled={randomWordLoading}
          onClick={handleRandomSearch}
          className="bg-[#f8f9fa] rounded-md text-neutral-800 hover:ring-neutral-200 focus:outline-none active:ring-neutral-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
        >
          {randomWordLoading ? "Loading..." : " I'm Feeling Lucky"}
        </button>
      </div>
    </>
  );
}
