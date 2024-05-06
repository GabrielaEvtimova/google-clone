import Link from "next/link";
import React from "react";

export default async function WebSearchPage({ searchParams }) {
  const term = searchParams.searchTerm;

  const response =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}
  `);

  if (!response.ok) throw new Error("Something went wrong");
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for &quot;{term}&quot;
        </h1>
        <p className="text-lg">
          Try searching for something else.
          {" "}
          <Link href="/" className="text-blue-500">
            Start a new search
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="">
      {results &&
        results.map((result, index) => (
          <div key={index}>
            <h1>{result.title}</h1>
          </div>
        ))}
    </div>
  );
}
