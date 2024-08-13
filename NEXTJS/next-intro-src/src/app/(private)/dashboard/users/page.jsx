import GoBack from "@/components/GoBack";
import Link from "next/link";
import React from "react";

const Users = () => {
  const usersArr = [1, 2, 3, 4];

  return (
    <div className="p-4 text-3xl w-full">
      <h1 className="ml-2">Hello, this is Users Page</h1>
      <nav className="flex flex-col p-2">
        {usersArr.map((user) => (
          <Link
            key={user}
            href={`/dashboard/users/${user}`}
            className="hover:underline text-xl"
          >
            Go User - {user}
          </Link>
        ))}
      </nav>
      <GoBack />
    </div>
  );
};

export default Users;
