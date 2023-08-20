import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsFillSendFill, BsSendCheckFill } from "react-icons/bs";
import axios from "axios";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function HrForm() {
  const { t } = useTranslation("humanResources");
  const [selectedFile, setSelectedFile] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState();

  const [values, setValues] = useState({
    name: "",
    email: "",
    // subject: "",
    message: "",
    tel: phoneNumber,
    file: selectedFile,
  });

  const [status, setStatus] = useState("idle");
  const { name, email, message, tel, file } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Yükleme başarılı!", response.data);
      } catch (error) {
        console.error("Yükleme hatası:", error);
      }
    }
  };
  const handleSubmit = async (e) => {
    handleUpload();
    e.preventDefault();
    try {
      const send = await fetch("/api/humanResources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      setValues({
        name: "",
        email: "",
        tel: "",
        message: "",
        file: null,
      });
      setStatus(send.status === 200 ? "success" : "failed");
    } catch (err) {
      console.error(err);
    }
  };

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    tel.trim() !== "" &&
    message.trim() !== "" &&
    file !== null &&
    email.includes("@");

  useEffect(() => {
    setTimeout(() => {
      setStatus("idle");
    }, 2000);
  }, [status === "success"]);
  return (
    <div className="min-w-full md:h-[40rem] min-h-fit md:w-1/2 md:p-10 p-3 mt-6 flex flex-col justify-center items-center  bg-[#FAFAFA] shadow-[0px_0px_61px_2px_#00000024] md:rounded-[2.5rem] rounded-2xl">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full gap-2 max-md:w-full m-auto flex font-medium text-black justify-start items-start flex-col"
      >
        <h1 className="text-2xl font-bold mb-5 text-center text-[#023047]">
          {t("formTitle")}
        </h1>
        <input
          className="p-3 indent-2 w-full mb-2 rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791]"
          placeholder={t("nameLabel")}
          required
          name="name"
          type="text"
          value={name}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          className="p-3 indent-2 w-full mb-2 rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791]"
          required
          name="email"
          value={email}
          type="email"
          placeholder={t("emailLabel")}
          onChange={(e) => handleChange(e)}
        ></input>
        <PhoneInput
          placeholder="Enter phone number"
          className="p-3 indent-2 w-full mb-2 rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791]"
          defaultCountry="TR"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <textarea
          rows={8}
          className="p-3 indent-2 w-full max-h-52 mb-2 rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791]"
          required
          name="message"
          value={message}
          as="textarea"
          placeholder={t("messageLabel")}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <div className="flex flex-col items-start w-full">
          <span>{t("selectCvLabel")}</span>
          <input type="file" onChange={handleFileChange} />
        </div>
        {/* <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleUpload}
      >
        Yükle
      </button> */}
        <button
          className="bg-sky-600 w-full rounded-xl hover:bg-sky-400 hover:text-zinc-800 flex items-center justify-center font-bold text-white duration-100 p-2 px-4 cursor-pointer"
          type="submit"
          disabled={!isFormValid}
          onClick={() => setStatus("pending")}
        >
          {status === "idle" ? (
            <>
              <BsFillSendFill className="mr-2" /> {t("formButton")}
            </>
          ) : status === "pending" ? (
            <AiOutlineLoading3Quarters className="animate-spin" size={32} />
          ) : status === "success" ? (
            <BsSendCheckFill size={32} />
          ) : status === "failed" ? (
            <BsSendCheckFill size={32} />
          ) : (
            ""
          )}
        </button>
      </form>
    </div>
  );
}

export default HrForm;
