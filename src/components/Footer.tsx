import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-3 py-5 border-t-2 border-dark dark:border-light">
      <div className="flex md:justify-between dark:text-light flex-col md:flex-row items-center">
        <p className="">© 2024 Chetan Dhakad. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          Made With <AiTwotoneHeart className="text-red-600" size={20} /> By
          Chetan Dhakad
        </p>
      </div>
    </div>
  );
}
