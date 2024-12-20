import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const email = activeUser?.email;

  function getFirstNameFromEmail(email) {
    let namePart = email.split("@")[0];
    let firstName = namePart.replace(/[^a-zA-Z]/g, "");
    firstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    return firstName;
  }
  let firstName = getFirstNameFromEmail(email);
  const handleLogout = () => {
    localStorage.removeItem("activeUser");
    navigate("/login");
  };

  return (
    <>
      <aside className="flex flex-col w-64 h-screen px-5 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 rajdhani-regular">
        <div className="flex flex-col flex-1">
          <nav className="space-y-3 ">
            <div className="mx-3 flex flex-col justify-between">
              <h1 className=" text-3xl font-medium text-gray-700 dark:text-gray-200">
                Welcome..!!!!!!
              </h1>
              <span className=" text-xl font-medium text-gray-700 dark:text-gray-200">
                {firstName}
              </span>
            </div>

            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/history"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-4a9 9 0 11-3.22-7.28"
                />
              </svg>
              <span className="mx-2 text-sm font-medium">History</span>
            </a>

            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/watch-list"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
              <span className="mx-2 text-sm font-medium">Watchlist</span>
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-200 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              <span className="mx-2 text-sm font-medium">Log Out</span>
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
