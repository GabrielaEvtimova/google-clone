import ButtonSignIn from "@/components/Reusable/Logo/ButtonSignIn/ButtonSignIn";
import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5">
      <div className="flex space-x-4 items-center text-sm">
        <Link href={"https://mail.google.com"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"https://image.google.com"} className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-neutral-200 hover:rounded-full hover:cursor-pointer text-4xl p-2" />
        <ButtonSignIn />
      </div>
    </header>
  );
}
