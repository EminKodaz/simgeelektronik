import InviewAnimate from "@/components/Animation/InViewAnimate";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function Payments() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("headtitle:payments-t")}</title>
        <meta
          name="description"
          content="Teknolojinin gücünü güvenlikle buluşturan şirketimiz, alarm sistemleri, kontrollü geçiş sistemleri ve akıllı ev çözümleri ile ev ve işyeri güvenliğini en üst düzeye taşıyor. Yenilikçi yaklaşımımız, yüksek kalitemiz ve üstün hizmet anlayışımızla, sizlere güvenli bir yaşam alanı sunuyoruz. İleri teknoloji ile güçlendirilmiş çözümlerimizle, ev güvenliğini artırmak ve işyeri korumasını optimize etmek artık çok daha kolay. Siz de güvenliğiniz için adım atın!"
        />
        <meta name="robots" content="index, follow"></meta>
        <meta name="author" content="KoerLabs"></meta>
        <meta name="publisher" content="SimgeGroup"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col relative overflow-hidden min-h-screen">
        <div className="bg-[url('/images/homebg.png')] bg-cover bg-no-repeat w-full h-[1200px] absolute top-0 left-0 z-0"></div>
        <InviewAnimate
          bezier={bezier}
          translate="translateY(-200px)"
          className="z-10"
        >
          <section className="mt-44 min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-32 m-auto">
            <h1 className="md:text-6xl text-3xl text-darkred text-center">
              {t("payments:caption")}
            </h1>
            <div className="flex mt-5 items-center justify-center">
              <div className="w-24 h-2 bg-lightred rounded-full mr-3"></div>
              <div className="w-4 h-4 bg-darkred rounded-full "></div>
            </div>
          </section>
        </InviewAnimate>
        <div className="min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-5 m-auto mt-12 border p-5 rounded-xl bg-white shadow-xl z-30">
          <h2 className="font-bold border-b mb-2 bg-darkred text-white rounded-md py-2 indent-24">
            {t("payments:head-1")}
          </h2>
          <table className=" w-full">
            <thead className="text-left border-b">
              <tr className="border">
                <th>{t("payments:th-1")}</th>
                <th>{t("payments:th-2")}</th>
                <th>{t("payments:th-4")}</th>
                <th>{t("payments:th-3")}</th>
                <th>IBAN</th>
              </tr>
            </thead>
            <tbody className="p">
              <tr className="border">
                <td>Vakıfbank</td>
                <td>Balgat</td>
                <td>S00402</td>
                <td>581708</td>
                <td>TR27 0001 5001 5800 7298 5817 08</td>
              </tr>
              <tr className="border">
                <td>Garanti</td>
                <td>Çetin Emeç</td>
                <td>461</td>
                <td>6299299</td>
                <td>TR94 0006 2000 4610 0006 2992 99</td>
              </tr>
              <tr className="border">
                <td>Ziraat Bankası</td>
                <td>Balgat</td>
                <td>1395</td>
                <td>66236478-5005</td>
                <td>TR46 0001 0013 9566 2364 7850 05</td>
              </tr>
              <tr className="border">
                <td>İş Bankası</td>
                <td>Balgat</td>
                <td>4284</td>
                <td>421993</td>
                <td>TR68 0006 4000 0014 2840 4219 93</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-5 m-auto mt-12 border p-5 rounded-xl bg-white shadow-xl z-30">
          <h2 className="font-bold border-b mb-2 bg-darkred text-white rounded-md py-2 indent-24">
            {t("payments:head-2")}
          </h2>
          <table className=" w-full">
            <thead className="text-left border-b">
              <tr className="border">
                <th>{t("payments:th-1")}</th>
                <th>{t("payments:th-2")}</th>
                <th>{t("payments:th-4")}</th>
                <th>{t("payments:th-3")}</th>
                <th>IBAN</th>
              </tr>
            </thead>
            <tbody className="p">
              <tr className="border">
                <td>Garanti</td>
                <td>Çetin Emeç</td>
                <td>461</td>
                <td>9098332</td>
                <td>TR67 0006 2000 4610 0009 0983 32</td>
              </tr>
              <tr className="border">
                <td>İş Bankası</td>
                <td>Balgat</td>
                <td>4284</td>
                <td>184126</td>
                <td>TR69 0006 4000 0024 2840 1841 26</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] w-[75%] max-lg:mt-5 m-auto mt-12 border p-5 rounded-xl bg-white shadow-xl z-30 mb-24">
          <h2 className="font-bold border-b mb-2 bg-darkred text-white rounded-md py-2 indent-24">
            {t("payments:head-3")}
          </h2>
          <table className=" w-full">
            <thead className="text-left border-b">
              <tr className="border">
                <th>{t("payments:th-1")}</th>
                <th>{t("payments:th-2")}</th>
                <th>{t("payments:th-4")}</th>
                <th>{t("payments:th-3")}</th>
                <th>IBAN</th>
              </tr>
            </thead>
            <tbody className="p">
              <tr className="border">
                <td>İş Bankası</td>
                <td>Balgat</td>
                <td>4284</td>
                <td>184112</td>
                <td>TR59 0006 4000 0024 2840 1841 12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Payments;
