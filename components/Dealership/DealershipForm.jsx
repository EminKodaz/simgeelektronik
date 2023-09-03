import useTranslation from "next-translate/useTranslation";
import React, { useState, useEffect } from "react";
import { BsFillSendFill, BsSendCheckFill } from "react-icons/bs";
import { AiFillWarning } from "react-icons/ai";

const DealershipForm2 = () => {
  const { t } = useTranslation("dealership");
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Ad-Soyad alanı zorunludur.";
    if (!formData.email) newErrors.email = "Email alanı zorunludur.";
    if (!formData.companyName)
      newErrors.companyName = "Firma Adı alanı zorunludur.";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Telefon Numarası alanı zorunludur.";
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Geçerli bir Türkiye telefon numarası giriniz.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // console.log("Form submitted:", formData);
      try {
        console.log(formData);
        const response = await fetch("/api/dealership", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const responseData = await response.json();
        setStatus(responseData.status === "Success" ? "success" : "failed");

        // console.log("API yanıtı:", responseData);
      } catch (error) {
        // console.error("API isteği başarısız:", error);
      }
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
      });
      setErrors({});
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setStatus("idle");
    }, 2000);
  }, [status === "success"]);
  return (
    <div className="min-w-full md:h-[40rem] min-h-fit md:w-1/2 md:p-10 p-3 mt-6 flex flex-col justify-center items-center  bg-[#FAFAFA] shadow-[0px_0px_61px_2px_#00000024] md:rounded-[2.5rem] rounded-2xl">
      <form
        className="w-full gap-3 max-md:w-full m-auto flex font-medium text-black justify-start items-start flex-col"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-5 text-center text-[#023047]">
          {t("formTitle")}
        </h1>
        <div className="w-full flex flex-col items-start">
          <input
            type="text"
            id="fullName"
            name="fullName"
            maxLength={30}
            value={formData.fullName}
            placeholder={t("nameLabel")}
            onChange={handleChange}
            className={`p-3 indent-2 w-full rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791] ${
              errors.fullName && "border-red-500"
            }`}
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
        </div>
        <div className="w-full flex flex-col items-start">
          <input
            type="email"
            id="email"
            name="email"
            maxLength={40}
            value={formData.email}
            placeholder={t("emailLabel")}
            onChange={handleChange}
            className={`p-3 indent-2 w-full rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791] ${
              errors.email && "border-red-500"
            }`}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="w-full flex flex-col items-start">
          <input
            type="text"
            id="companyName"
            name="companyName"
            maxLength={100}
            value={formData.companyName}
            placeholder={t("companyName")}
            onChange={handleChange}
            className={`p-3 indent-2 w-full rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791] ${
              errors.companyName && "border-red-500"
            }`}
          />
          {errors.companyName && (
            <p className="text-red-500">{errors.companyName}</p>
          )}
        </div>
        <div className="w-full flex flex-col items-start">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="\d{10}"
            maxLength={12}
            value={formData.phoneNumber}
            placeholder={t("phoneNumber")}
            onChange={handleChange}
            className={`p-3 indent-2 w-full rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791] ${
              errors.phoneNumber && "border-red-500"
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-sky-600 w-full rounded-xl hover:bg-sky-400 hover:text-zinc-800 flex items-center justify-center font-bold text-white duration-100 p-2 px-4 cursor-pointer"
        >
          {status === "idle" ? (
            <>
              <BsFillSendFill className="mr-2" /> {t("formButton")}
            </>
          ) : status === "success" ? (
            <BsSendCheckFill size={32} />
          ) : status === "failed" ? (
            <AiFillWarning size={32} />
          ) : (
            ""
          )}
        </button>
      </form>
    </div>
  );
};

export default DealershipForm2;
