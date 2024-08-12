import React from "react";

const NotFound = () => {
  return (
    <div className="max-w-screen-xl m-auto px-4 flex items-center justify-center h-screen">
      <div className="max-w-lg mx-auto space-y-3 text-center">
        <h3 className="text-gray-950 font-semibold text-xl">404 Error</h3>
        <p className="text-gray-800 text-4xl font-semibold">Page Not Found</p>
        <p className="text-gray-600">
          Sorry, the page you are looking for could not be found or has been
          removed.
        </p>
        <div className="flex gap-2 justify-center pt-4">
          <button className="py-2 px-3 text-white bg-main duration-150 hover:bg-orange-600 rounded-md">
            Go Back
          </button>
          <button className="py-2 px-3 text-gray-700 duration-150 hover:text-white hover:bg-gray-700 rounded-md border border-gray-700">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
