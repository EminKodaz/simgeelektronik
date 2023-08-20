import useTranslation from "next-translate/useTranslation";
import React from "react";
import HeaderLeftSide from "./HeaderLeftSide";
import HeaderRightSide from "./HeaderRightSide";
import InviewAnimate from "./Animation/InViewAnimate";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function Header() {
  const { t } = useTranslation("home");

  return (
    <section className="z-10 mt-44 w-[75%] max-lg:mt-32 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto grid grid-cols-2 max-lg:grid-cols-1 gap-5">
      <InviewAnimate bezier={bezier} translate="translateX(300px)">
        <HeaderLeftSide />
      </InviewAnimate>
      <InviewAnimate bezier={bezier} translate="translateX(-300px) " className="h-full">
        <HeaderRightSide />
      </InviewAnimate>
    </section>
  );
}

export default Header;
