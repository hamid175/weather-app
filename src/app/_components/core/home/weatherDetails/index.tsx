import React from "react";
import Temperature from "./Temperature";
import OtherDetails from "./otherDetails";
import { weatherDetailType } from "app/_types/weather";

type WeatherDetailsProps = {
  weatherDetails: weatherDetailType;
};

export default function WeatherDetails({
  weatherDetails,
}: WeatherDetailsProps) {
  return (
    <div className="mt-[100px] ">
      {/*  Main Temperature Component */}
      <Temperature weatherDetails={weatherDetails} />
      <OtherDetails weatherDetails={weatherDetails} />
    </div>
  );
}
