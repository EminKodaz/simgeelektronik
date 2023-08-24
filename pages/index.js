import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import BannerNReferences from "@/components/BannerNReferences";
import WorkingProcess from "@/components/WorkingProcess";
import Faq from "@/components/Faq";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("headtitle:home-t")}</title>
        <meta name="description" content="" />
        <meta name="robots" content="index, follow"></meta>
        <meta name="author" content=""></meta>
        <meta name="publisher" content=""></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col relative overflow-hidden">
        <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[700px] absolute top-0 left-0 z-0"></div>
        <Header />
        <SubHeader />
        <BannerNReferences />
        <WorkingProcess />
        <Faq />
      </main>
    </>
  );
}
