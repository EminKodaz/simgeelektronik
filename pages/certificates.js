import CertificateCard from "@/components/certificates/CertificateCard";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Certificates() {
  const { t } = useTranslation("certificates");
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setCertificates(t("allCertficates", {}, { returnObjects: true }));
    console.log(certificates);
  }, [t]);

  return (
    <main className="flex flex-col min-h-screen min-[2000px]:w-[60%] max-lg:w-[95%] w-[75%] m-auto max-[1300px]:w-[95%]">
      <div className="my-44 m-auto items-center grid grid-cols-3 gap-4">
        {certificates &&
          certificates.map((certificate, index) => {
            return (
              <CertificateCard
                key={index}
                name={certificate.name}
                url={certificate.url}
              />
            );
          })}
      </div>
    </main>
  );
}

export default Certificates;
