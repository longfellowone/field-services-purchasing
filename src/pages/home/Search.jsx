import React, { useState } from 'react';

export const Search = () => {
  const [searchFocused, setSearchFocused] = useState(false);

  const results = (
    <div className="relative">
      <div className="absolute bg-white w-full border border-grey shadow rounded-b-lg pin-t-1">
        <div className="p-2 border-t-2 border-transparent">Text</div>
        <div className="p-2 border-t-2 border-transparent">Text</div>
        <div className="p-2 border-t-2 border-transparent">Text</div>
        <div className="p-2 border-t-2 border-transparent">Text</div>
      </div>
    </div>
  );

  const searchInputClass = `border border-grey rounded-t-lg ${!searchFocused && 'rounded-b-lg'}`;

  return (
    <>
      <div className="border border-grey rounded-t-lg px-2 py-2 font-bold bg-blue text-blue-lightest">
        Project Search
      </div>
      <div className="mb-4 border-b border-l border-r border-grey p-2 rounded-b-lg shadow">
        <div className={searchInputClass}>
          <input
            className="w-full my-1 py-1 px-2 outline-none bg-transparent"
            placeholder="Enter project name"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
        {searchFocused && results}
      </div>
    </>
  );
};
