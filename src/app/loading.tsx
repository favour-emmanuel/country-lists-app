"use client";
import React from "react";
import { ClipLoader } from "react-spinners";


const Loading = () => {
  return (
    <div className="w-full max-w-4xl mx-auto flex items-center justify-center">
      <ClipLoader size={30} color="#686769" />
    </div>
  );
};

export default Loading;
