import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import useTranslation from "next-translate/useTranslation";
import { BiChevronDown } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import LangItems from "./LangItems";
import UserProcess from "./UserProcess";

function MobileMenuItems({ toggle, setToggle }) {
  const [menuItems, setMenuItems] = useState([]);
  const { t } = useTranslation();
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // Bu, hangi alt menünün açık olduğunu takip eder.

  useEffect(() => {
    setMenuItems(t("navbar:menuItems", {}, { returnObjects: true }));
  }, [t]);

  const handleClick = (itemIndex) => {
    setToggle(!toggle);
    setOpenSubMenuIndex(itemIndex); // Tıklanan öğenin alt menüsünü açarız.
  };

  const handleSubMenu = (itemIndex) => {
    setOpenSubMenuIndex(openSubMenuIndex === itemIndex ? null : itemIndex); // Aynı öğeye tıklanırsa, alt menüyü kapatırız.
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
      <ul className="text-zinc-600 flex flex-col w-full justify-around items-end mr-10  pb-5">
        {menuItems.map((item, index) => {
          return (
            <li key={item.id} className="mr-10">
              <Link
                className="flex text-xl font-semibold m-2 w-full items-center ml-12"
                onClick={
                  item.submenu
                    ? () => handleSubMenu(index)
                    : () => handleClick(index)
                }
                href={item.link ? item.link : ""}
                scroll={false}
              >
                {item.submenu && (
                  <BiChevronDown
                    size={32}
                    className={`${
                      openSubMenuIndex === index && "rotate-180"
                    } duration-300`}
                  />
                )}
                {item.title}
              </Link>
              {item.submenu && (
                <motion.ul
                  style={{
                    opacity: openSubMenuIndex === index ? 1 : 0,
                    overflow: "hidden",
                    height: 0,
                  }}
                  animate={{
                    opacity: openSubMenuIndex === index ? 1 : 0,
                    height: openSubMenuIndex === index ? "auto" : 0,
                  }}
                  className="max-lg:flex hidden flex-col items-end w-full "
                >
                  {item.submenu.map((submenuItem) => {
                    return (
                      <li key={submenuItem.id} className="py-2 text-base mr-2">
                        <Link
                          href={submenuItem.link}
                          onClick={() => handleClick(index)} // Alt menü öğesine tıkladığınızda ana menüyü kapatmak için handleClick'i çağırın.
                          className="py-2 flex items-center "
                        >
                          {submenuItem.title}
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
        <UserProcess isMobile={true} />
        <LangItems isMobile={true} />
      </div>
      <div className="mb-3 mr-10">
        <SocialIcons isMobile={true} />
      </div>
    </motion.div>
  );
}

export default MobileMenuItems;
