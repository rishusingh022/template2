"use client";

import React, { useState } from "react";
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export default function AskQuestion() {
  return (
    <div className="  w-full   bg-[#059669] py-16">
      <div className="relative mx-auto flex max-w-[1280px]  flex-col items-center justify-center text-center text-white">
        <p>Boost your productivity.</p>
        <p className="text-[35px] font-bold md:text-[40px]">
          {" "}
          Start using Workflow today.
        </p>
        <p className="text-[24px] font-[400] leading-[36px]">
          {" "}
          Sign up for our waitlist and be the first to experience the latest
          feature!
        </p>
        <div className="flex justify-center items-center w-full">
          <input
            className="border focus:outline-none text-center w-1/3 py-2 px-3 rounded-md text-black"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-white text-black ml-2 px-5 py-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
