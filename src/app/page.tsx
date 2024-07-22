"use client";
import { HistoryList, SearchBar, WeatherDetails } from "./_components/core";
import { useState } from "react";
import { weatherDetailType } from "./_types/weather";
import { WEATHERLIST } from "./assets/dummy/weatherResult";

export default function Home() {
  const [searchedInput, setSearchedInput] = useState("");
  const [searchedHistory, setSearchedHistory] = useState<weatherDetailType[]>(
    []
  );

  const [searchedData, setSearchedData] = useState<
    weatherDetailType | "OOPs not found!" | null
  >(null);

  const searchInputHandler = (e: any) => {
    setSearchedInput(e.target.value);
  };

  const searchButtonhandler = (searchedCity: string) => {
    if (searchedCity.length === 0) {
      // ! Return and show some error
      return;
    }
    // ! Preserve previous result
    if (typeof searchedData === "object" && searchedData?.city) {
      if (!searchedHistory.includes(searchedData)) {
        setSearchedHistory((prev: any) => [...prev, searchedData]);
      }
    }

    const result: weatherDetailType | undefined = WEATHERLIST.find(
      (value) => value.city.toLowerCase() === searchedCity.toLowerCase()
    );
    if (result === undefined) {
      setSearchedData("OOPs not found!");
    } else {
      setSearchedData(result);
    }

    console.log(searchedCity, result);
  };

  return (
    <div className="bg-slate-50 p-4 rounded-md">
      <SearchBar
        inputHandler={searchInputHandler}
        searchedInput={searchedInput}
        btnHandler={searchButtonhandler}
      />
      <HistoryList
        searchedHistory={searchedHistory}
        btnHandler={searchButtonhandler}
      />
      {searchedData === "OOPs not found!" ? (
        <h1 className="mt-6 text-red-600">{searchedData}</h1>
      ) : searchedData ? (
        <WeatherDetails weatherDetails={searchedData} />
      ) : (
        <h1 className="mt-6">No data to show!</h1>
      )}
    </div>
  );
}
