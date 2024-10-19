import React, { useState } from "react";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div classNameName={`relative min-h-screen sm:flex sm:flex-row justify-center login-background`}>
      <div classNameName="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
        <div classNameName="self-start hidden lg:flex flex-col text-gray-300">
          <h1 classNameName="my-3 font-semibold text-6xl title">Welcome</h1>
          <p classNameName="pr-3 text-xl opacity-75 subtitle">
            Your Cinematic Guide: Reviews That Illuminate the Screen
          </p>
        </div>
      </div>
      <div classNameName="login-container">
        <div classNameName="login-card">
          <div classNameName="mb-7">
            <h3 classNameName="font-semibold text-2xl text-gray-800 title">Sign In</h3>
            <p classNameName="text-gray-400">
              Don't have an account?{" "}
              <a href="#" classNameName="text-sm link">Sign Up</a>
            </p>
          </div>
          <div classNameName="space-y-6">
            <div>
              <input
                classNameName="input"
                type="email"
                placeholder="Email"
              />
            </div>
            <div classNameName="relative">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                classNameName="input"
              />
              <div classNameName="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                <svg
                  onClick={() => setShowPassword(!showPassword)}
                  classNameName={`h-4 text-purple-700 password-toggle ${showPassword ? "hidden" : "block"}`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  />
                </svg>
                <svg
                  onClick={() => setShowPassword(!showPassword)}
                  classNameName={`h-4 text-purple-700 password-toggle ${showPassword ? "block" : "hidden"}`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                  />
                </svg>
              </div>
            </div>

            <div classNameName="flex items-center justify-between">
              <div classNameName="text-sm ml-auto">
                <a href="#" classNameName="link">Forgot your password?</a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                classNameName="button"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
