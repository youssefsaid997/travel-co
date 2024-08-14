import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="w-full bg-green-200">
      <div className="flex justify-between items-center  container mx-auto">
        <div>
          <h1 className=" font-extrabold text-lg">Logo</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
