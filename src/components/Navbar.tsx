import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="p-4 sticky flex justify-center items-center gap-6 top-0 h-14 bg-violet-700">
      <Link to={"/"}>
        <h1 className="text-xl text-white">MyQuiz</h1>
      </Link>
      <div className="w-[2px] h-10 bg-white"></div>
      <Link className="text-xl text-white hover:underline" to={"/about"}>
        About
      </Link>
      <div className="w-[2px] h-10 bg-white"></div>
      <Link className="text-xl text-white hover:underline" to={"/history"}>
        History
      </Link>
    </nav>
  );
}

export default Navbar;
