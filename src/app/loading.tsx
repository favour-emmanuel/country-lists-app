"use client";
import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-[50vh]  mx-auto flex items-center justify-center">
      <ClipLoader size={30} color="#65B741" />
    </div>
  );
};

export default Loading;
