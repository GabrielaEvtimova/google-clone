import HomeHeader from "@/components/Home/HomeHeader/HomeHeader";
import HomeSearch from "@/components/Home/HomeSearch/HomeSearch";
import Logo from "@/components/Reusable/Logo/Logo";
import React from "react";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-60">
        <Logo width={400} height={200} />
        <HomeSearch />
      </div>
    </>
  );
}
