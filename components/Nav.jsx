import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full flex flex-between mt-3 mb-15">
      <Link href="/" className="flex flex-center gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="promptofia"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className=" logo_text ">MindDraft</p>
      </Link>

      {/* mobile navigation */}
    </nav>
  );
};

export default Nav;
