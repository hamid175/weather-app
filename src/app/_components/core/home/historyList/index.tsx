import { weatherDetailType } from "app/_types/weather";
import React from "react";

const Button = ({ children, btnHandler, value }: any) => {
  return (
    <button
      className="rounded-full px-4 py-2 bg-slate-700 text-white"
      onClick={() => btnHandler(value)}
    >
      {children}
    </button>
  );
};

type HistoryListProps = {
  searchedHistory: weatherDetailType[] | null;
  btnHandler: (searchedText: string) => void;
};

export default function HistoryList({
  searchedHistory,
  btnHandler,
}: HistoryListProps) {
  return (
    <>
      {searchedHistory ? (
        <div className="flex gap-4 bg-slate-100 py-2 rounded-full px-4 mt-4">
          {searchedHistory.map((value, index) => (
            <Button key={index} btnHandler={btnHandler} value={value?.city}>
              {value?.city}
            </Button>
          ))}
        </div>
      ) : null}
    </>
  );
}
