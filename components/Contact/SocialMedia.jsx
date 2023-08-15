import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsWhatsapp, BsYoutube } from "react-icons/bs";

function SocialMedia() {
  const { t } = useTranslation("contact");
  return (
    <div>
      <h2 className="text-yellow-500 font-bold text-xl mt-5">{t("social")}</h2>
      <ul className="flex max-md:mt-5 justify-center mt-5">
        <li className="text-gray-600 hover:text-emerald-500 border-[#10b98139]">
          <Link href="https://wa.me/905050321554?" target="_blank">
            <BsWhatsapp className="max-md:w-10 max-md:h-10" size={30} />
          </Link>
        </li>
        <li className="text-gray-600 hover:text-sky-600  ml-5">
          <Link href="https://www.facebook.com/people/BAAF-Ekmek-Otomasyon-Sistemleri/100070403558082/">
            <BsFacebook className="max-md:w-10 max-md:h-10" size={30} />
          </Link>
        </li>
        <li className="text-gray-600 hover:text-red-600  ml-5">
          <Link href="https://www.youtube.com/@BAAFMakina">
            <BsYoutube className="max-md:w-10 max-md:h-10" size={30} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
