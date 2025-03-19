"use client";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaUser } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

function AdminSignup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); 

  const validateInputs = () => {
    if (!username.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required.");
      return false;
    }

    if (/\s/.test(username)) {
      setError("Username cannot contain spaces.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const newUser = {
      username,
      email,
      password,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    router.push("/adminLogin");
  };

  return (
    <div className="w-full h-140 flex items-center justify-center">
      <div className="bg-white border rounded-3xl p-5">
        <h2 className="text-center text-3xl font-bold mb-7">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <label className="font-semibold">Username</label>
          <div className="flex items-center gap-3 mb-3">
            <FaUser className="text-xs text-gray-500" />
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b text-gray-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label className="font-semibold">Email</label>
          <div className="flex items-center gap-3 mb-3">
            <MdEmail className="text-xs text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b text-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label className="font-semibold">Password</label>
          <div className="flex items-center gap-3">
            <RiLockPasswordLine className="text-sm text-gray-500" />
            <input
              type="password"
              placeholder="Enter your password"
              className="border-b text-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-600">{error}</p>}

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-gray-600 to-gray-800 text-white w-40 rounded-2xl mt-7 p-0.5 cursor-pointer"
            >
              Signup
            </button>
            <p className="text-sm mt-1">
              Already have an account?{" "}
              <Link
                href="/adminLogin"
                className="hover:underline underline-offset-2 hover:text-green-700"
              >
                Login
              </Link>
            </p>
            <div className="justify-items-center mt-2">
              <div className="flex gap-2">
                <FaFacebook className="text-blue-400" />
                <FaTwitter className="text-blue-600" />
                <AiFillGoogleCircle className="text-red-500" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminSignup;
