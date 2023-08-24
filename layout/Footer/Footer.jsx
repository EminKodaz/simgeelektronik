import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import SocialMedia from "@/components/SocialMedia";
import WorkingHours from "./WorkingHours";
import QuickLinks from "./QuickLinks";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="min-h-[24rem] bg-[url('/images/footerImg.jpg')] bg-cover  flex flex-col z-40 relative">
      <div className="bg-[#5e23239a] backdrop-blur-[2px]">
        <section className="min-[2000px]:w-[60%] max-lg:w-[95%] w-[75%] m-auto max-[1300px]:w-[95%] grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-10 py-14">
          <div className="flex flex-col items-start max-lg:items-center pr-10 gap-5">
            <Image
              src="/images/logo3.png"
              className="w-80"
              width={2611}
              height={609}
              alt="simgeelektronik"
            />
            <p className="text-zinc-300 text-start max-lg:items-center mt-5">
              {t("footerDescription")}
            </p>
            <SocialMedia />
          </div>
          <QuickLinks />
          <div className="w-fit mx-auto max-lg:items-center">
            <WorkingHours />
            <button className="py-4 px-8 bg-sky-600 my-7 rounded-2xl text-white hover:text-sky-950 hover:scale-110 hover:bg-slate-200 duration-200">
              <BsFillTelephoneFill className="inline-block mr-2" size={20} />
              {t("contactCallButton")} +90 (312) 287 17 40
            </button>
            <address className="text-white mt-5">
              <h5 className="text-lg font-bold">Genel Müdürlük</h5>
              <p>Ziyabey Cad. No:36 Balgat - Ankara</p>
            </address>
            <address className="text-white mt-5">
              <h5 className="text-lg font-bold">Akdeniz Bölge Müdürlüğü</h5>
              <p>A. Türkeş Bulvarı No: 281 / A Seyhan - ADANA</p>
            </address>
          </div>
        </section>
        <p className="text-zinc-300 text-center py-3 border-t border-zinc-300">
          {t("copyRight")}
        </p>
        <p className="text-zinc-300 text-center py-3 border-t border-zinc-300">
          Created by Koer Labs
        </p>
      </div>
    </footer>
  );
}

export default Footer;
