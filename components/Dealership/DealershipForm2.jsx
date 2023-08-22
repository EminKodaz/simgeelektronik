import useTranslation from "next-translate/useTranslation";
import React, { useState, useEffect } from "react";
import { FaFolderPlus } from "react-icons/fa";

const DealershipForm2 = () => {
  const { t } = useTranslation("dealership");
  const [fileStatus, setFileStatus] = useState("Dosya Seçilmedi");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    files: [],
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    files: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({ ...prevData, files }));
    updateFileStatus();
  };
  const updateFileStatus = () => {
    if (formData.files.length === 0) {
      setFileStatus("Dosya Seçilmedi");
    } else if (formData.files.length === 1) {
      setFileStatus("1 Dosya");
    } else {
      setFileStatus(`${formData.files.length} Dosya`);
    }
  };
  useEffect(() => {
    updateFileStatus();
  }, [formData.files]);

  const handleSubmit = (e) => {
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
    if (formData.files.length === 0)
      newErrors.files = "En az bir dosya yüklemelisiniz.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted:", formData);
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        files: [],
      });
      setErrors({});
      setFileStatus("Dosya Seçilmedi");
    }
  };

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
          <input
            type="text"
            id="companyName"
            name="companyName"
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
        <div className="w-full flex flex-col items-start">
          <label
            htmlFor="selectFile"
            className={`flex items-center justify-between gap-3 p-3 indent-2 w-full rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791] ${
              errors.files && "border-red-500"
            }`}
          >
            <div className="flex items-center justify-start">
              <FaFolderPlus size={32} />
              Dosya Seç
            </div>
            <p className="text-gray-500 mt-1">
              {formData.files.length == 1 ? formData.files[0].name : fileStatus}
            </p>
          </label>
          <input
            id="selectFile"
            type="file"
            multiple
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className={`hidden`}
          />
          {errors.files && <p className="text-red-500">{errors.files}</p>}
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
};

export default DealershipForm2;
