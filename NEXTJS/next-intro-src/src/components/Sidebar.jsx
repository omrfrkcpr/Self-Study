import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-slate-300 float-left text-black p-3">
      <nav className="flex flex-col gap-3">
        {/* relative path yok, ana route dan itibaren yazmaliyiz path i  */}
        <Link href="/dashboard/settings" className="underline">
          Settings
        </Link>
        <Link href="/dashboard/profile" className="underline">
          Profile
        </Link>
        <Link href="/dashboard/users" className="underline">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
