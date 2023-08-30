import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";

function HeaderRightSide() {
  const { t } = useTranslation("contact");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
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
    if (!formData.message) newErrors.message = "Mesaj alanı zorunludur.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // console.log("Form submitted:", formData);
      try {
        console.log(formData);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const responseData = await response.json();

        console.log("API yanıtı:", responseData);
      } catch (error) {
        console.error("API isteği başarısız:", error);
      }
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };
  return (
    <div className="w-2/4 bg-[#ffffffc9] rounded-4xl shadow-xl backdrop-blur-sm p-8 h-fit pb-16 absolute top-1/2 transform -translate-y-1/2 max-lg:hidden max-[1300px]:-right-60 -right-80 z-20">
      <form
        className="w-full gap-3 max-md:w-full m-auto flex font-medium text-black justify-start items-start flex-col h-full"
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
          <textarea
            rows={1}
            className={`p-3 indent-2 w-full  rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791] ${
              errors.message && "border-red-500"
            }`}
            name="message"
            value={formData.message}
            as="textarea"
            placeholder={t("messageLabel")}
            onChange={(e) => handleChange(e)}
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-sky-600 w-full rounded-xl hover:bg-sky-400 hover:text-zinc-800 flex items-center justify-center font-bold text-white duration-100 p-2 px-4 cursor-pointer"
        >
          Başvuru Gönder
        </button>
      </form>
    </div>
  );
}

export default HeaderRightSide;
