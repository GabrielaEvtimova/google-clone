"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import Link from "next/link";

export default function PaginationButtons() {
  const path = usePathname();
  const serachParams = useSearchParams();
  const searchTerm = serachParams.get("searchTerm");
  const startIndex = +serachParams.get("start") || 1;

  return (
    <div className="flex justify-between text-blue-700 px-10 sm:justify-start sm:space-x-44 sm:px-0 mb-[-20px] sm:mb-6">
      {startIndex >= 10 && (
        <Link
          href={`${path}?searchTerm=${searchTerm}&start=${(
            startIndex - 10
          ).toString()}`}
        >
          <div className="flex flex-col items-center hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {startIndex <= 90 && (
        <Link
          href={`${path}?searchTerm=${searchTerm}&start=${(
            startIndex + 10
          ).toString()}`}
        >
          <div className="flex flex-col items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
