"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  let pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex justify-between py-4 px-8 border-b border-black sticky top-0 bg-navbarColor">
      <div>
        <Link href="/" className="flex items-center">
          {/* //? Next.js, import edilen dosyaya göre image genişliğini ve yüksekliğini otomatik olarak belirler ancak Next.js'nin build işlemi sırasında remote dosyalara erişimi olmadığından, genişlik ve yükseklik özelliklerini manuel olarak sağlamanız gerekir. */}
          {/* //* farklı domainlerden alınan image'ler için ilgili domainler config dosyasında belirtilmelidir. */}
          <Image
            width={150}
            height={50}
            // src="/clarusway-logo.png"
            // src={logo}
            src="https://clarusway.com/wp-content/uploads/2022/12/clarusway-logo-black.png"
            alt=""
          />
        </Link>
      </div>
      <ul className="flex gap-4">
        {navigation.map(({ path, title }) => (
          <li
            key={path}
            className={`font-medium hover:bg-gray-300 rounded-full border border-gray-300 flex justify-center items-center px-3 py-1 text-lg duration-150 ${
              path === pathname && "bg-black text-white hover:bg-black/70"
            }`}
          >
            {/* //? next/link arka planda sayfayı önceden fetch edilir. Bu, client tarafı gezintilerin performansını iyileştirmek için kullanışlıdır. Görünüm alanındaki herhangi bir <Link />  önceden yüklenecektir. */}
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
