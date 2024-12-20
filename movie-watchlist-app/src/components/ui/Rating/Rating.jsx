import React from "react";

function Rating({ ratings }) {
  if (!ratings || ratings.length === 0) {
    return <p>No ratings available</p>;
  }

  const getRatingPercentage = (value) => {
    if (value.includes("/")) {
      const [score, max] = value.split("/").map(parseFloat);
      return `${(score / max) * 100}%`;
    } else if (value.includes("%")) {
      return value;
    }
    return "50%";
  };

  return (
    <>
      <div className="flex items-center mb-5 rajdhani-light">
        <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
          {ratings[0]?.Value || "N/A"} 
        </p>
        <p className="ms-2 font-medium text-gray-900 dark:text-white">
          {ratings[0]?.Source || "Rating Source"}
        </p>
        <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {ratings.length} ratings available
        </p>
      </div>

      <div className="gap-4 sm:grid sm:grid-cols-2">
        {ratings.map((rating, index) => (
          <dl key={index}>
            <dt className="rajdhani-bold text-sm font-medium text-gray-500 dark:text-gray-400">
              {rating.Source}
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div
                  className=" bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                  style={{ width: getRatingPercentage(rating.Value) }}
                ></div>
              </div>
              <span className="rajdhani-bold text-sm font-medium text-gray-500 dark:text-gray-400">
                {rating.Value}
              </span>
            </dd>
          </dl>
        ))}
      </div>
    </>
  );
}

export default Rating;
