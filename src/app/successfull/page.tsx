import React from "react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-black via-gray-900 to-purple-800 text-white">
   <div className="blink-animation mb-6">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-green-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm18.94-2.36a1 1 0 00-1.32-.32l-7.03 4.32-3.13-2.36a1 1 0 00-1.24 1.56l4 3a1 1 0 001.32-.02l8-5a1 1 0 00.01-1.64z"
      clipRule="evenodd"
    />
  </svg>
</div>

      <h1 className="text-3xl mb-4 text-center">Success!</h1>
      <p className="text-lg mb-4 text-center">
       Congrats, You have successfully submitted your wallet address.
      </p>
      
    </div>
  );
}
