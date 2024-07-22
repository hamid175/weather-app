import React from "react";

type SearchBarProps = {
  inputHandler: (e: any) => void;
  btnHandler: (searchedText: string) => void;
  searchedInput: string;
};

export default function SearchBar({
  inputHandler,
  btnHandler,
  searchedInput,
}: SearchBarProps) {
  return (
    <div className="flex gap-4">
      <input
        type="text"
        className="w-[100%] py-2 px-4 rounded-md bg-slate-200 outline-none"
        name="searchInput"
        onChange={inputHandler}
        placeholder="Search for cities..."
      />
      <button
        className="px-4 py-2 bg-slate-500 text-white rounded-md"
        onClick={() => btnHandler(searchedInput)}
      >
        Search
      </button>
    </div>
  );
}
