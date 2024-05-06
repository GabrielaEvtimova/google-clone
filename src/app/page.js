import HomeHeader from "@/components/Home/HomeHeader/HomeHeader";
import HomeSearch from "@/components/Home/HomeSearch/HomeSearch";
import { GOOGLE_LOGO, LOGO_ALT_TEXT } from "@/constants/constants";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-60">
        <Image
          src={GOOGLE_LOGO}
          alt={LOGO_ALT_TEXT}
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
