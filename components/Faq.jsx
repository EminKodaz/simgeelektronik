import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";
import useTranslation from "next-translate/useTranslation";

function Faq() {
  const [faqItems, setFaqItems] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setFaqItems(t("home:faq", {}, { returnObjects: true }));
  }, [t]);

  return (
    <section className="w-[75%] min-[2000px]:w-[60%] max-[1300px]:w-[95%] max-lg:w-[90%] m-auto mb-12">
      <h5 className="text-3xl text-center font-bold text-lightred mb-8">{t("home:faq-title")}</h5>
      <Accordion items={faqItems} />
    </section>
  );
}

export default Faq;
