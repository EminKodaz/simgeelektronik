import useTranslation from "next-translate/useTranslation";
import React, { useState, useEffect } from "react";
import { BsFillSendFill, BsSendCheckFill } from "react-icons/bs";
import { AiFillWarning } from "react-icons/ai";
import Link from "next/link";

function HeaderRightSide() {
  const { t } = useTranslation("quickExplorer");
  const [status, setStatus] = useState("idle");
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    kvkk: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleKvkkChange = (e) => {
    setKvkkAccepted(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = `${t("fullNameError")}`;
    if (!formData.email) newErrors.email = `${t("emailError")}`;
    if (!formData.phoneNumber)
      newErrors.phoneNumber = `${t("phoneNumberError")}`;
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = `${t("phoneNumberError2")}`;
    if (!kvkkAccepted) newErrors.kvkk = `${t("kvkkError")}`;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // console.log("Form submitted:", formData);
      try {
        console.log(formData);
        const response = await fetch("/api/quickExplorer", {
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
        phoneNumber: "",
      });
      setErrors({});
      setKvkkAccepted(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setStatus("idle");
    }, 2000);
  }, [status === "success"]);
  return (
    <div className="w-2/4 max-[1300px]:w-[37%]   bg-[#ffffffc9] rounded-4xl shadow-xl backdrop-blur-sm p-7 max-[1300px]:rounded-3xl absolute top-1/2 transform -translate-y-1/2 max-lg:hidden max-[1300px]:-right-60 -right-80 z-20">
      <form
        className="w-full gap-3  max-md:w-full m-auto flex font-medium text-black justify-start items-start flex-col h-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl  max-[1300px]:text-lg max-[1300px]:mb-3 font-bold mb-5 text-center text-[#023047]">
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
            className={`p-2 max-[1300px]:p-1 indent-2 w-full max-[1300px]:text-sm max-[1300px]:rounded-md rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791] ${
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
            className={`p-2 max-[1300px]:p-1 indent-2 w-full max-[1300px]:text-sm  max-[1300px]:rounded-md rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791] ${
              errors.email && "border-red-500"
            }`}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
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
            className={`p-2 max-[1300px]:p-1 indent-2 w-full max-[1300px]:text-sm max-[1300px]:rounded-md rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791] ${
              errors.phoneNumber && "border-red-500"
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber}</p>
          )}
        </div>
        <div className=" text-sm text-start">
          <label className="block mb-1 font-semibold">
            <input
              type="checkbox"
              onChange={handleKvkkChange}
              checked={kvkkAccepted}
            />{" "}
            {t("kvkk")}{" "}
            <Link href="/kvkk" className="underline text-blue-400">
              {t("kvkkLink")}
            </Link>{" "}
          </label>
          {errors.kvkk && <p className="text-red-500">{errors.kvkk}</p>}
        </div>
        <button
          type="submit"
          className="bg-sky-600 w-full max-[1300px]:py-1  max-[1300px]:rounded-md max-[1300px]:text-base  rounded-xl hover:bg-sky-400 hover:text-zinc-800 flex items-center justify-center font-bold text-white duration-100 py-2 px-4 cursor-pointer"
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
}

export default HeaderRightSide;
