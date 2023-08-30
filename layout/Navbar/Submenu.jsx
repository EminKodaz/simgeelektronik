import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import useTranslation from "next-translate/useTranslation";
import { BiChevronDown } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import LangItems from "./LangItems";
import UserProcess from "./UserProcess";


function Submenu({ submenuItems, toggle }) {
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <motion.ul
      style={{
        opacity: isOpenSub ? 1 : 0,
        overflow: "hidden",
        height: 0,
      }}
      animate={{
        opacity: isOpenSub ? 1 : 0,
        height: isOpenSub ? "auto" : 0,
      }}
      className="max-lg:flex hidden flex-col items-end w-full "
    >
      {item.submenu.map((item) => {
        return (
          <li key={item.id} className="py-2 text-base mr-2">
            <Link
              href={item.link}
              onClick={handleClick}
              className="py-2 flex items-center "
            >
              {item.title}
              <div className="w-3 h-3 rounded-full bg-lightred ml-2"></div>
            </Link>
          </li>
        );
      })}
    </motion.ul>
  );
}

export default Submenu;
