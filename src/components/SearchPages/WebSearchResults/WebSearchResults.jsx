import Link from "next/link";
import React from "react";
import Parser from "html-react-parser"
import PaginationButtons from "../PaginationButtons/PaginationButtons";

export default function WebSearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-neutral-600 mb-5 mt-3 text-sm">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div className="flex flex-col group">
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link href={result.link} className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800">
              {result.title}
            </Link>
          </div>
          <p className="text-neutral-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons/>
    </div>
  );
}
