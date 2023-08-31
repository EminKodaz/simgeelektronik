import Link from "next/link";
import React from "react";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";

function SocialMedia() {
  return (
    <div>
      <ul className="flex max-md:mt-5 justify-center mt-5">
        <li className="text-gray-200 hover:text-emerald-500 border-[#10b98139]">
          <Link href="https://wa.me/905064628885?" target="_blank">
            <BsWhatsapp className="max-md:w-10 max-md:h-10" size={30} />
          </Link>
        </li>
        <li className="text-gray-200 hover:text-sky-600  ml-5">
          <Link href="https://www.facebook.com/simgegrup/">
            <BsFacebook className="max-md:w-10 max-md:h-10" size={30} />
          </Link>
        </li>
        <li className="text-gray-200 hover:text-sky-600  ml-5">
          <Link
            className="hover:text-pink-500 transition-all duration-200"
            href="https://www.instagram.com/simgegroup/"
          >
            <BsInstagram className="max-md:w-10 max-md:h-10" size={30} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
