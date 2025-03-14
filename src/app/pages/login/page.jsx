import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import picture5 from "../../assets/pic5.jpg";
import { MdEmail } from "react-icons/md";
import {
  FaLock,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <img src={picture5} className="fixed w-full h-full top-0 left-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className=" font-mono bg-white
          border rounded-xl p-7"
        >
          <h2 className="text-center text-3xl font-bold mb-7 ">Login</h2>

          <form onSubmit={handleLogin}>
            <label>Email</label>
            <div className="flex items-center gap-1.5 border-b p-1">
              <MdEmail className="text-xs text-gray-500" />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <label>Password</label>
            <div className="flex items-center gap-1.5 border-b p-1">
              <FaLock className="text-xs text-gray-500" />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="mt-1 text-sm text-center">
              <Link to="/signup">
                <h2>Forgot your password? </h2>
              </Link>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" w-40 text-amber-50 bg-gradient-to-r from-purple-300 to-purple-400 p-0.5 items-center mt-5 border rounded-3xl "
              >
                Login
              </button>
            </div>
            <h2 className="text-center text-sm mt-1.5">
              Or,
              <Link to="/signup" className="hover:underline underline-offset-2 hover:text-green-700">
                Signup
              </Link>
               {" "}Using
            </h2>
            <div className="justify-items-center">
              <div className="flex gap-2 mt-1.5 ">
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

export default Login;