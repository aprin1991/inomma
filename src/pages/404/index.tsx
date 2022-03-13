import React from "react";
import { Link } from "react-router-dom";

function Custom404() {
  return (
    <div className="h-64 flex justify-center items-center flex-col">
      <div className="font-bold text-slate-800 text-center mb-4">
        Sorry We Can't Find It.
      </div>
      <Link to="/">
        <button className="bg-slate-900 px-8 py-2 rounded-md text-white text-base">
          Home
        </button>
      </Link>
    </div>
  );
}

export default Custom404;
