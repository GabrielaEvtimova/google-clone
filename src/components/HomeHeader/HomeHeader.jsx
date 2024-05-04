import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"https://image.google.com"} className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-neutral-200 hover:rounded-full hover:cursor-pointer text-4xl p-2" />
        <button className=" bg-blue-500 text-neutral-50 px-6 py-2 font-medium rounded-md hover:brightness-95 hover:text-white hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}
