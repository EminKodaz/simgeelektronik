import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InviewAnimate from "../Animation/InViewAnimate";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function ReferencesCard() {
  const { t } = useTranslation("references");
  const [referencesItems, setReferencesItems] = useState();

  useEffect(() => {
    setReferencesItems(t("references", {}, { returnObjects: true }));
  }, [t]);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-center w-full">
      {referencesItems &&
        referencesItems.map((item) => {
          return (
            <div key={item.id}>
              <InviewAnimate
                bezier={bezier}
                translate="translateY(300px)"
                className="w-full"
              >
                <div className="w-full lg:h-48 min-h-fit grid lg:grid-cols-3 gap-14 rounded-lg border border-stone-300 p-5">
                  <Image
                    src={item.url}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="lg:w-3/4 sm:w-1/4 md:w-1/3 aspect-auto object-cover  m-auto lg:col-span-1"
                  />
                  <div className="flex flex-col lg:col-span-2">
                    <div className=" text-black mb-5 text-base font-light leading-normal">
                      {item.title}
                    </div>
                    <div className="justify-start items-start inline-flex">
                      <span className="text-black text-base font-bold leading-normal">
                        İşveren :{" "}
                      </span>
                      <span className="text-black text-base font-light leading-normal">
                        {item.employer}
                      </span>
                    </div>
                    <div className="justify-start items-start inline-flex">
                      <div className="text-black text-base font-light leading-normal">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              </InviewAnimate>
            </div>
          );
        })}
    </div>
  );
}

export default ReferencesCard;
