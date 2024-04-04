import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-gray-950 dark:text-neutral-50 font-semibold">
            404 Error
          </h3>
          <p className="text-gray-800 dark:text-gray-200 text-4xl font-semibold sm:text-5xl">
            Page not found
          </p>
          <p className="text-gray-600 dark:text-gray-200">
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="block py-2 px-4 text-gray-900 dark:text-gray-200 font-medium bg-main duration-150 hover:bg-red-main active:bg-indigo-700 rounded-lg"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate("/")}
              className="block py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-red-main  hover:text-white font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
