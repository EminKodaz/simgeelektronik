import Image from "next/image";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="flex flex-col h-screen relative">
      
      <div className="bg-[url('/images/homebg.jpg')] bg-contain bg-no-repeat w-full h-[700px] absolute top-0 left-0 z-0">
        <div className="w-full h-full gradient-bg">
          <div className="gradient-bg-2 w-full h-full">

          </div>
        </div>
      </div>
      <div className="z-10 mt-96">
        HEllo
      </div>
    </main>
  );
}
