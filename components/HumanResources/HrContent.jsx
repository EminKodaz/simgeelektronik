import useTranslation from "next-translate/useTranslation";
import React, { useState, useEffect } from "react";

function HrContent() {
  const { t } = useTranslation("humanResources");
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(t("hrDescriptionDetailList", {}, { returnObjects: true }));
  }, [t]);

  return (
    <div className="text-white flex flex-col lg:gap-9 gap-2 md:pl-4">
      <div className="text-center text-xl">
        {t("hrDescriptionDetailHeader")}
      </div>
      <div className="text-start text-lg">
        {list.map((item, index) => {
          return (
            <ul key={index}>
              <li>{`- ${item},`}</li>
            </ul>
          );
        })}
      </div>
      <div className="text-start text-lg font-bold italic">
        {t("formContentDescription")}
      </div>
      <div className="text-start text-lg">
        {t("formContentDescriptionAuthor")}
      </div>
    </div>
  );
}

export default HrContent;
