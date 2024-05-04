import HomeHeader from "@/components/HomeHeader/HomeHeader";
import HomeSearch from "@/components/HomeSearch/HomeSearch";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-60">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="Google logo"
          width={400}
          height={200}
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </>
  );
}
