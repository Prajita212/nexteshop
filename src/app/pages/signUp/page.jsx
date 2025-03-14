import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import picture5 from "../../assets/pic5.jpg";
import {
  FaLock,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateInputs = () => {
    if (!username || !email || !password) {
      setError("All fields are required.");
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
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center">
      <img src={picture5} className="fixed w-full h-full top-0 left-0"/>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className=" font-mono bg-white
             border rounded-xl p-7"
        ><form onSubmit={handleSignup}>
        <h2 className="text-center text-3xl font-bold mb-7 ">Signup</h2>
     
          <label>Username</label>
          <div className="flex items-center gap-1.5 border-b p-1">
            <FaUser className="text-xs text-gray-500" />

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label>Email</label>
          <div className="flex items-center gap-1.5 border-b p-1">
            <MdEmail className="text-xs text-gray-500" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password:</label>
          <div className="flex items-center gap-1.5 border-b p-1">
            <FaLock className="text-xs text-gray-500" />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-50 text-center text-white bg-gradient-to-r  from-purple-300 to-purple-400 p-0.5 mt-7 border rounded-3xl "
          >
            Signup
          </button>
          <h2 className="text-center text-sm mt-1.5">Or Sign Up Using</h2>
         <div className="justify-items-center">
          <div className=" flex gap-2 mt-1.5 ">
            <Link to="https://www.facebook.com">
              <FaFacebook className=" hover:text-blue-800" />
            </Link>
            <Link to="https://www.x.com">
              <FaTwitter className="hover:text-blue-500" />
            </Link>
            <Link to="https://www.google.com">
              <FaGoogle className="hover:text-red-500" />
            </Link>
          </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;