import { weatherDetailType } from "app/_types/weather";
import React from "react";
import DetailCard from "./detailCard";

type OtherDetailsPropos = {
  weatherDetails: weatherDetailType;
};

export default function OtherDetails({ weatherDetails }: OtherDetailsPropos) {
  return (
    <div className="p-4 bg-slate-200 rounded-md mt-6">
      <h1 className="text-slate-600">TODAY'S FORCAST</h1>
      <div className="flex gap-6 flex-col md:flex-row">
        <DetailCard label="Humidity" value={weatherDetails.humidity} />
        <DetailCard label="Wind Speed" value={weatherDetails.humidity} />
      </div>
    </div>
  );
}
