import Logo from "@/components/Reusable/Logo/Logo";
import Link from "next/link";
import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import ButtonSignIn from "@/components/Reusable/Logo/ButtonSignIn/ButtonSignIn";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "../SearchHeaderOptions/SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6 justify-between">
        <Link href="/" className="mr-[-20px] sm:mr-0  ">
          <Logo width={90} height={30} />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex">
          <RiSettings3Line className="bg-transparent hover:bg-neutral-200 p-2 text-4xl rounded-full cursor-pointer" />
          <TbGridDots className="bg-transparent hover:bg-neutral-200 p-2 text-4xl rounded-full cursor-pointer" />
        </div>
        <div className="hidden sm:inline-flex sm:ml-2">
          <ButtonSignIn />
        </div>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
