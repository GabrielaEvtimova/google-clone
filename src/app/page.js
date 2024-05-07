import HomeHeader from "@/components/Home/HomeHeader/HomeHeader";
import HomeSearch from "@/components/Home/HomeSearch/HomeSearch";
import Logo from "@/components/Reusable/Logo/Logo";
import React from "react";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24 md:mt-56">
        <Logo width={300} height={100} />
        <HomeSearch />
      </div>
    </>
  );
}
