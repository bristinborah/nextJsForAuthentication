"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
      email: "",
      password: "",
      username: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
  
    const onSignup = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/users/signup", user);
        console.log("Signup success", response.data);
        router.push("/successfull");
      } catch (error) {
        console.log("Signup failed", error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }, [user]);
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-black via-gray-900 to-purple-800">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl mb-4 text-center text-gray-800">World NFT Day X Birina Handmade</h1>
          <div className="mb-4">
            <label htmlFor="username" className="text-lg font-semibold text-gray-700">
              Full Name
            </label>
            <input
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black w-full"
              id="username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg font-semibold text-gray-700">
              Email
            </label>
            <input
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black w-full"
              id="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-lg font-semibold text-gray-700">
              Wallet Address
            </label>
            <input
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black w-full"
              id="password"
              type="text"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Wallet Address"
            />
          </div>
          <button
            onClick={onSignup}
            disabled={buttonDisabled}
            className={`${
              buttonDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white p-2 rounded-lg focus:outline-none w-full transition duration-300 ease-in-out transform hover:scale-105`}
          >
            {loading ? "Processing" : "Submit"}
          </button>    
        </div>
      </div>
    );
  }