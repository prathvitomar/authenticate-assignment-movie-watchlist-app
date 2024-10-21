import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../../features/users/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (email) {
      dispatch(loginUser(email)); 
      navigate("/home");
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div
      className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent
     shadow-xl rajdhani-bold"
      style={{
        backgroundImage: "url('../../public/images/login-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="flex-col flex self-center text-black-300 mx-4">
        <h1 className="my-3 font-bold text-5xl text-white-outline">Welcome</h1>
        <p className="pr-6 font-bold opacity-95 text-white-outline">Your Personal Movie Library Awaits, Cinema at Your Fingertips</p>
      </div>

      <div className="flex justify-center self-center z-10 mx-4">
        <div className="p-12 bg-white mx-auto rounded-3xl w-96">
          <div className="mb-7">
            <h3 className="font-semibold text-2xl text-gray-800">Sign In</h3>
            <p className="text-gray-400 ">
              Hurry up and Create your Watchlist.
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="space-y-6">
              <div>
                <input
                  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              {/* <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <a href="#" className="text-purple-700 hover:text-purple-600">
                    Forgot your password?
                  </a>
                </div>
              </div> */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
