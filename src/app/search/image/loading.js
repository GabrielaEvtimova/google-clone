import React from "react";

export default function loading() {
  return (
    <div className="pt-10 mx-2 lg:pl-52 max-w-6xl flex sm:space-x-4 pb-42 flex-col sm:flex-row">
      <div className="animate-puls">
        <div className="h-48 w-48 bg-neutral-200 mb-4 rounded-md"></div>
        <div className="h-2 w-48 bg-neutral-200 mb-2.5 rounded-md"></div>
        <div className="h-2 w-48 bg-neutral-200 mb-2.5 rounded-md"></div>
      </div>
      <div className="hidden sm:inline-flex sm:space-x-4">
        <div className="animate-puls">
          <div className="h-48 w-48 bg-neutral-200 mb-4 rounded-md"></div>
          <div className="h-2 w-48 bg-neutral-200 mb-2.5 rounded-md"></div>
          <div className="h-2 w-48 bg-neutral-200 mb-2.5 rounded-md"></div>
        </div>
        <div className="animate-puls">
          <div className="h-48 w-48 bg-neutral-200 mb-4 rounded-md"></div>
          <div className="h-2 w-48 bg-neutral-200 mb-2.5 rounded-md"></div>
          <div className="h-2 w-48 bg-neutral-200 mb-2.5 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
