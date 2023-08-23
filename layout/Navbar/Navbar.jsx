import React, { useState } from "react";
import MenuItems from "./MenuItems";
import SocialIcons from "./SocialIcons";
import MobileMenu from "./MobileMenu";
import MobileMenuItems from "./MobileMenuItems";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import TopBanner from "./TopBanner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`fixed max-lg:border-b bg-[#fcfcfc59] max-lg:bg-[#fcfcfcf1] backdrop-blur-md w-full text-sm pt-3 flex flex-col items-center z-50 font-bold ${poppins.className}`}
    >
      <TopBanner />
      <div className="flex border-darkred border-b max-lg:border-b-0 pb-5 pt-3 justify-between min-[2000px]:w-[60%] max-lg:w-[95%] w-[75%] m-auto max-[1300px]:w-[95%]">
      <Link href="/">
        <Image
          src="/images/logo.png"
          className="w-32"
          width={1600}
          height={886}
          alt="simgeelektronik"
        />
       </Link> 
        <MenuItems />
        <div className="max-lg:hidden flex items-center w-[10%]">
          <SocialIcons />
        </div>
        <MobileMenu toggle={toggle} setToggle={setToggle} />
      </div>
      <MobileMenuItems toggle={toggle} setToggle={setToggle} />
    </nav>
  );
}

export default Navbar;
