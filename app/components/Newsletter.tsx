"use client";

import React, { useState } from "react";
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export default function Newsletter(props:any) {
  return (
    <div className=" w-full bg-[#059669] py-16">
      <div className="p-1 relative mx-auto flex max-w-[1280px] flex-col items-center justify-center text-center text-white">
        <p className="text-3xl md:text-4xl leading-10 text-center font-semibold font-inter">
          {props.title}
        </p>
        <p className="text-3xl md:text-4xl leading-10 font-bold text-center">
          {" "}
          {props.extraTitle}
        </p>
        <p className="text-lg font-[300] leading-[24px] font-inter max-w-[550px] mt-4">
          {" "}
          {props.subtitle}
        </p>
        <div className="flex justify-center items-center w-full mt-8">
          <input
            className="border focus:outline-none w-1/3 py-2 px-3 rounded-md text-black"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-white text-black ml-2 px-5 py-2 font-inter rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
