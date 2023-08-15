import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsFillSendFill, BsSendCheckFill } from "react-icons/bs";

function ContactForm() {
  const { t } = useTranslation("contact");

  const [values, setValues] = useState({
    name: "",
    email: "",
    // subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const { name, email, message, subject } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const send = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      setValues({
        name: "",
        email: "",
        // subject: "",
        message: "",
      });
      setStatus(send.status === 200 ? "success" : "failed");
    } catch (err) {
      console.error(err);
    }
  };

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    // subject.trim() !== "" &&
    message.trim() !== "" &&
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
          required
          name="email"
          value={email}
          type="email"
          placeholder={t("emailLabel")}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          className="p-3 indent-2 w-full mb-2 rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791]"
          placeholder={t("nameLabel")}
          required
          name="name"
          type="text"
          value={name}
          onChange={(e) => handleChange(e)}
        ></input>
        {/* <input
          className="p-4 indent-2 w-full mb-2 rounded-xl focus-within:outline-none border border-[#677791] focus-within:border-[#677791]"
          required
          name="subject"
          value={subject}
          type="text"
          placeholder={t("subject")}
          onChange={(e) => handleChange(e)}
        ></input> */}
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
        <button
          className="bg-emerald-500 w-full rounded-xl hover:bg-emerald-400 flex items-center justify-center font-bold text-white duration-100 p-2 px-4"
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

export default ContactForm;
