"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      username: email,
      password: password,
    };

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "YOUR_API_KEY",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("userToken", data.token);
        router.push("/adminDashboard"); 
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full h-140 grid items-center justify-center">
      <div className="bg-white border rounded-3xl p-5">
        <form onSubmit={handleLogin}>
          <h2 className="text-center text-3xl font-bold mb-7">Login</h2>

          <label className="font-semibold">Email</label>
          <div className="flex items-center gap-3 mb-3">
            <MdEmail className="text-xs text-gray-500" />
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b text-gray-500"
            />
          </div>

          <label className="font-semibold">Password</label>
          <div className="flex items-center gap-3">
            <RiLockPasswordLine className="text-sm text-gray-500" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b text-gray-500"
            />
          </div>

          {error && <p className="text-red-600">{error}</p>}

          <div className="text-center">
            <h1 className="text-sm mt-2">Forgot your password?</h1>
            <button
              type="submit"
              className="bg-gradient-to-r from-gray-600 to-gray-800 text-white w-50 rounded-2xl mt-5 cursor-pointer"
            >
              Login
            </button>
            <p className="text-sm">
              or{" "}
              <Link
                href="/adminSignup" 
                className="hover:underline underline-offset-2 hover:text-green-700"
              >
                sign up
              </Link>{" "}
              using
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
