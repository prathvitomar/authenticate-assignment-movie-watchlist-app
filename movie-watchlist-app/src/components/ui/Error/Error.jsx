import React from "react";

function Error({ errorMessage }) {
  return (
    <>
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-6 py-6 rounded relative"
        role="alert"
      >
        <div className="flex space-between">
        <strong className="font-bold px-2 rajdhani-medium">Holy smokes!</strong>
        <span className="block sm:inline rajdhani-bold">{errorMessage}</span>
        </div>
      </div>
    </>
  );
}

export default Error;
