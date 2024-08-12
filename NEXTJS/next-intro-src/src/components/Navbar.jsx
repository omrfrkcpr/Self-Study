import Link from "next/link";
import React from "react";

const navigation = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 px-8 border-b border-black sticky top-0 bg-navbarColor">
      <div>
        <Link href="/" className="flex items-center">
          <img src="/clarusway-logo.png" width="150px" alt="clarusway-logo" />
        </Link>
      </div>
      <ul className="flex gap-4">
        {navigation.map((navItem) => (
          <li
            key={navItem.path}
            className={`font-medium hover:bg-gray-300 rounded-full border border-gray-300 flex justify-center items-center px-3 py-1 text-lg duration-150`}
          >
            <Link href={navItem.path}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
