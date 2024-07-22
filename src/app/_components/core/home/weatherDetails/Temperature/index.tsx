import { weatherDetailType } from "app/_types/weather";
import React from "react";

type TemperatureProps = {
  weatherDetails: weatherDetailType;
};
export default function Temperature({ weatherDetails }: TemperatureProps) {
  return (
    <div>
      <h1 className="text-[30px]">{weatherDetails.city.toUpperCase()} </h1>
      <p className="text-[36px] font-[600]">{weatherDetails.temp}°</p>
    </div>
  );
}
