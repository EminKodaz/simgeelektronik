import Link from "next/link";
import React from "react";
import { BsInstagram, BsFacebook, BsTiktok, BsWhatsapp } from "react-icons/bs";

function SocialIcons({isMobile}) {
  return (
    <ul className="text-zinc-600 flex  w-full justify-end items-center ">
      <li className="mr-2">
        <Link
          className="hover:text-pink-500 transition-all duration-200"
          href="https://www.instagram.com/simgegroup/"
          target="_blank"
        >
          <BsInstagram size={isMobile ? 32 : 24} />
        </Link>
      </li>
      <li className="">
        <Link
          className="hover:text-blue-500 transition-all duration-200"
          href="https://www.facebook.com/simgegrup/"
          target="_blank"
        >
          <BsFacebook size={isMobile ? 32 : 24} />
        </Link>
      </li>
      <li className="ml-2">
        <Link
          className="hover:text-emerald-500 transition-all duration-200"
          href="https://wa.me/905064628885?"
          target="_blank"
        >
          <BsWhatsapp size={isMobile ? 32 : 24} />
        </Link>
      </li>
    </ul>
  );
}

export default SocialIcons;
