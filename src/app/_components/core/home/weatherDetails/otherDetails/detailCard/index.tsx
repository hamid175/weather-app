import React from "react";

type DetailCardProps = {
  value: number;
  label: string;
};

export default function DetailCard({ value, label }: DetailCardProps) {
  return (
    <div className="w-[100%] p-4 bg-slate-100 rounded-md mt-4 shadow-lg">
      <p className="text-[24px] font-[600]">{value}</p>
      <h3 className="text-slate-600 text-[18px]">{label}</h3>
    </div>
  );
}
