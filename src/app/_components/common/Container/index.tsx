import React, { ReactElement, ReactNode } from "react";

type ContaierProps = {
  children: ReactNode;
};
export default function Container({ children }: ContaierProps) {
  return (
    <div className="w-[100%] flex justify-center h-[100vh]  py-10">
      <div className="max-w-[1440px] w-[100%] h-[100%]">{children}</div>
    </div>
  );
}
