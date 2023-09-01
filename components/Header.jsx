import useTranslation from "next-translate/useTranslation";
import React from "react";
import HeaderLeftSide from "./HeaderLeftSide";
import HeaderRightSide from "./HeaderRightSide";
import InviewAnimate from "./Animation/InViewAnimate";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function Header() {
  const { t } = useTranslation("home");

  return (
      <section className="z-10 mt-40 w-[75%] max-lg:mt-28 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[98%] m-auto grid grid-cols-4 max-lg:grid-cols-1 ">
        <HeaderLeftSide />
        <div className="rounded-r-4xl  shadow-xl bg-[url('/images/header-right.jpg')] bg-cover w-full h-full  relative overflow-hidden max-lg:hidden">
          <div className="absolute w-full h-full bg-[#68111177]   top-0"></div>
        </div>
      </section>
  );
}

export default Header;
