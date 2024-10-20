// import React, { useState } from "react";
// import "./Login.css"; 

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div classNameName={`relative min-h-screen sm:flex sm:flex-row justify-center login-background`}>
//       <div classNameName="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
//         <div classNameName="self-start hidden lg:flex flex-col text-gray-300">
//           <h1 classNameName="my-3 font-semibold text-6xl title">Welcome</h1>
//           <p classNameName="pr-3 text-xl opacity-75 subtitle">
//             Your Cinematic Guide: Reviews That Illuminate the Screen
//           </p>
//         </div>
//       </div>
//       <div classNameName="login-container">
//         <div classNameName="login-card">
//           <div classNameName="mb-7">
//             <h3 classNameName="font-semibold text-2xl text-gray-800 title">Sign In</h3>
//             <p classNameName="text-gray-400">
//               Don't have an account?{" "}
//               <a href="#" classNameName="text-sm link">Sign Up</a>
//             </p>
//           </div>
//           <div classNameName="space-y-6">
//             <div>
//               <input
//                 classNameName="input"
//                 type="email"
//                 placeholder="Email"
//               />
//             </div>
//             <div classNameName="relative">
//               <input
//                 placeholder="Password"
//                 type={showPassword ? "text" : "password"}
//                 classNameName="input"
//               />
//               <div classNameName="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
//                 <svg
//                   onClick={() => setShowPassword(!showPassword)}
//                   classNameName={`h-4 text-purple-700 password-toggle ${showPassword ? "hidden" : "block"}`}
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 576 512"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
//                   />
//                 </svg>
//                 <svg
//                   onClick={() => setShowPassword(!showPassword)}
//                   classNameName={`h-4 text-purple-700 password-toggle ${showPassword ? "block" : "hidden"}`}
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 640 512"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <div classNameName="flex items-center justify-between">
//               <div classNameName="text-sm ml-auto">
//                 <a href="#" classNameName="link">Forgot your password?</a>
//               </div>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 classNameName="button"
//               >
//                 Sign in
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;















import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl" 
         style={{ backgroundImage: "url('/images/your-background-image.jpg')", backgroundSize: 'cover' }}>
      <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
        <div className="self-start hidden lg:flex flex-col text-gray-300">
          <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
          <p className="pr-3 text-sm opacity-75">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
      </div>
      <div className="flex justify-center self-center z-10">
        <div className="p-12 bg-white mx-auto rounded-3xl w-96">
          <div className="mb-7">
            <h3 className="font-semibold text-2xl text-gray-800">Sign In</h3>
            <p className="text-gray-400">
              Don't have an account?{' '}
              <a href="#" className="text-sm text-purple-700 hover:text-purple-600">
                Sign Up
              </a>
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <input
                className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="relative">
              <input
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
              />
              <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                <svg
                  onClick={() => setShowPassword(!showPassword)}
                  className={`h-4 text-purple-700 ${showPassword ? 'hidden' : 'block'}`}
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
                  className={`h-4 text-purple-700 ${showPassword ? 'block' : 'hidden'}`}
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

            <div className="flex items-center justify-between">
              <div className="text-sm ml-auto">
                <a href="#" className="text-purple-700 hover:text-purple-600">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2 my-5">
              <span className="h-px w-16 bg-gray-100"></span>
              <span className="text-gray-300 font-normal">or</span>
              <span className="h-px w-16 bg-gray-100"></span>
            </div>
            <div className="flex justify-center gap-5 w-full ">
              <button
                type="submit"
                className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500"
              >
                <svg className="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EA4335"
                    d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.568-1.001 7.657-2.66l-3.617-3.327Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M1.24 6.65A7.077 7.077 0 0 0 0 12c0 1.563.51 3.004 1.366 4.186l4.04-3.067A3.527 3.527 0 0 1 5.266 9.765Z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.998 12c0-.592-.055-1.173-.144-1.742H12v3.414h6.483A6.983 6.983 0 0 1 12 18c-1.162 0-2.279-.267-3.271-.738l-4.029 3.082A11.956 11.956 0 0 0 12 24c6.628 0 12-5.372 12-12z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>
              <button
                type="submit"
                className="w-full flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500"
              >
                <svg
                  className="w-4 mr-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4267B2"
                    d="M23.494 12.298c0-.59-.057-1.15-.165-1.703H12v3.208h6.356c-.27 1.417-1.012 2.603-2.351 3.276v3.054h3.879c2.271-2.092 3.609-5.038 3.609-8.835z"
                  />
                  <path
                    fill="#F6F6F6"
                    d="M12 2.005c-5.516 0-10 4.486-10 10s4.484 10 10 10c5.514 0 10-4.486 10-10s-4.486-10-10-10zm-1.612 14.095V12.57H8.314v-2.575h2.074V8.57c0-2.062 1.231-3.208 3.066-3.208.897 0 1.878.161 1.878.161v2.054h-1.058c-1.033 0-1.353.644-1.353 1.308v1.574h2.27l-.362 2.575h-1.908v3.53c-1.057.093-2.168.138-3.298.138-.846 0-1.762-.051-2.699-.124v-3.504z"
                  />
                </svg>
                <span>Sign in with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
