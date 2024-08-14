import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center ">
      <Link className="px-4 py-3   hover:bg-green-600" href={"/"}>
        Home
      </Link>
      <Link className="px-4 py-3  hover:bg-green-600" href={"/people"}>
        People
      </Link>
      <Link className="px-4 py-3   hover:bg-green-600" href={"/about"}>
        About
      </Link>
    </nav>
  );
}

export default Navbar;
