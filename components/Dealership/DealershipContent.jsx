import useTranslation from "next-translate/useTranslation";
import React, { useState, useEffect } from "react";

function DealershipContent() {
  const { t } = useTranslation("dealership");
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(t("formDescriptionDetailList", {}, { returnObjects: true }));
  }, [t]);

  return (
    <div className="text-white flex flex-col lg:gap-9 gap-2 pl-4">
      <div className="text-start md:text-lg text-md font-bold italic">
        {t("formContentDescription")}
      </div>
      <div className="text-start md:text-lg text-md">
        {list.map((item, index) => {
          return (
            <ul key={index}>
              <li>{`- ${item},`}</li>
            </ul>
          );
        })}
      </div>
      <div className="text-start md:text-lg text-md">
        {t("formContentDescriptionAuthor")}
      </div>
    </div>
  );
}

export default DealershipContent;
