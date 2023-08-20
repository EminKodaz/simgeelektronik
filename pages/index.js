import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import BannerNReferences from "@/components/BannerNReferences";
import WorkingProcess from "@/components/WorkingProcess";
import Faq from "@/components/Faq";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
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
