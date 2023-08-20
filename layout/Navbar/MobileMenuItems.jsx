import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import useTranslation from "next-translate/useTranslation";
import { BiChevronDown } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import LangItems from "./LangItems";

function MobileMenuItems({ toggle, setToggle }) {
  const [menuItems, setMenuItems] = useState([]);
  const { t } = useTranslation();
  const [isOpenSub, setIsOpenSub] = useState(false);

  useEffect(() => {
    setMenuItems(t("navbar:menuItems", {}, { returnObjects: true }));
  }, [t]);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleSubMenu = () => {
    setIsOpenSub(!isOpenSub);
  };
  return (
    <motion.div
      style={{
        opacity: toggle ? 1 : 0,
        overflow: "hidden",
        height: 0,
      }}
      animate={{
        opacity: toggle ? 1 : 0,
        height: toggle ? "auto" : 0,
      }}
      className="max-lg:flex hidden flex-col  w-full"
    >
      {" "}
      <ul className="text-zinc-600 flex flex-col w-full justify-around items-end mr-10  pb-5">
        {menuItems.map((item) => {
          return (
            <li key={item.id} className="mr-10">
              <Link
                className="flex text-xl font-semibold m-2 w-full items-center ml-12"
                onClick={item.submenu ? handleSubMenu : handleClick}
                href={item.link ? item.link : ""}
                scroll={false}
              >
                {item.submenu && (
                  <BiChevronDown
                    size={32}
                    className={`${isOpenSub && "rotate-180"} duration-300`}
                  />
                )}
                {item.title}
              </Link>
              {item.submenu && (
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
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col items-end justify-end mb-5 mr-10">
        <Link
          className="mb-2 text-xl hover:text-red-600 font-light rounded-lg"
          href="alarm-report duration-300"
        >
          Şifre Talebi
        </Link>
        <Link
          className="border-sky-800 mb-2 border text-lg  py-1 px-3  font-light rounded-sm flex justify-center hover:border-red-700 hover:text-red-700 duration-300"
          href="alarm-report"
        >
          <MdReport size={24} className="mr-1 text-red-700" />
          Alarm Raporları
        </Link>
        <LangItems isMobile={true} />
      </div>
      <div className="mb-3 mr-10">
        <SocialIcons isMobile={true} />
      </div>
    </motion.div>
  );
}

export default MobileMenuItems;
