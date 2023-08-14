import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  BsFillSendFill,
  BsFacebook,
  BsWhatsapp,
  BsYoutube,
  BsSendCheckFill,
} from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Iletisim() {
  const { t } = useTranslation("contact");

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
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
        subject: "",
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
    subject.trim() !== "" &&
    message.trim() !== "" &&
    email.includes("@");

  useEffect(() => {
    setTimeout(() => {
      setStatus("idle");
    }, 2000);
  }, [status === "success"]);

  return (
    <>
      <Head>
        <title>
          BAAF Makina | İletişim Endüstriyel Fırın Ekipmanları Fiyatları, Ekmek
          Otomasyon Cihazları Fiyatları{" "}
        </title>
        <meta
          name="description"
          content="Firmamızın iletişim sayfası, Ankara merkezli ekmek otomasyon sistemleri hakkında daha fazla bilgi alabileceğiniz ve bize ulaşabileceğiniz bir platformdur. Profesyonel ve deneyimli ekibimiz, işletmenizin ekmek üretimi süreçlerinde size yardımcı olmak için burada bulunmaktadır. İletişim sayfamız aracılığıyla sorularınızı yöneltebilir, taleplerinizi iletebilir veya ürünlerimiz hakkında daha fazla bilgi alabilirsiniz. Müşteri odaklı yaklaşımımızla, size en uygun çözümleri sunmak için iletişim kanallarımızı sürekli olarak açık tutuyoruz. İşbirliği için bizi arayın veya iletişim formumuzu doldurun. Size hızlı ve etkili bir şekilde geri dönüş yapmaktan memnuniyet duyarız."
        />
        <meta name="robots" content="index, follow"></meta>
        <meta name="author" content="KoerLabs"></meta>
        <meta name="publisher" content="BAAF MAKİNA"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-[75vh]">
        <div className="w-[70%] max-lg:w-[90%] mt-6 flex flex-col justify-center items-center m-auto">
          <h1 className="w-full text-yellow-500 text-center font-bold text-2xl border-b mb-5 pb-2 border-black">
            {t("formHead")}
          </h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="w-1/2 max-md:w-full m-auto flex font-medium  text-black justify-center items-center flex-col"
          >
            <input
              className="bg-[#fdbe357c]  indent-2 w-full mb-2 rounded-md h-9 focus-within:outline-none border border-black focus-within:border-black"
              placeholder={t("fullname")}
              required
              name="name"
              type="text"
              value={name}
              onChange={(e) => handleChange(e)}
            ></input>
            <input
              className="bg-[#fdbe357c] indent-2 w-full mb-2 rounded-md h-9 focus-within:outline-none border border-black focus-within:border-black"
              required
              name="email"
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            ></input>
            <input
              className="bg-[#fdbe357c]  indent-2 w-full mb-2 rounded-md h-9 focus-within:outline-none border border-black focus-within:border-black"
              required
              name="subject"
              value={subject}
              type="text"
              placeholder={t("subject")}
              onChange={(e) => handleChange(e)}
            ></input>
            <textarea
              rows={8}
              className="bg-[#fdbe357c]  indent-2 w-full mb-2 rounded-md focus-within:outline-none border border-black focus-within:border-black"
              required
              name="message"
              value={message}
              as="textarea"
              placeholder={t("message")}
              onChange={(e) => handleChange(e)}
            ></textarea>
            <button
              className="bg-emerald-500 rounded-md hover:bg-emerald-400 flex items-center justify-center font-bold text-white duration-100 p-2 px-4"
              type="submit"
              disabled={!isFormValid}
              onClick={() => setStatus("pending")}
            >
              {status === "idle" ? (
                <>
                  <BsFillSendFill className="mr-2" /> {t("sendButton")}
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
          <div className="w-full mt-12">
            <h3 className="border-b text-center  border-black mb-2 pb-2 text-yellow-500 text-2xl font-medium">
              {t("map")}
            </h3>
            <div className="flex justify-center ">
              <div className="rounded-lg overflow-hidden mt-5 blogShadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12218.820385329203!2d32.6115407!3d40.0373632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3337cdf19590b%3A0xffd5227917a60c8c!2sBAAF%20Makina!5e0!3m2!1sen!2str!4v1683390432615!5m2!1sen!2str"
                  width="700"
                  height="300"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <h2 className="text-yellow-500 font-bold text-xl mt-5">
            {t("social")}
          </h2>
          <ul className="flex max-md:mt-5 justify-center mt-5">
            <li className="text-gray-600 hover:text-emerald-500 border-[#10b98139]">
              <Link href="https://wa.me/905050321554?" target="_blank">
                <BsWhatsapp className="max-md:w-10 max-md:h-10" size={30} />
              </Link>
            </li>
            <li className="text-gray-600 hover:text-sky-600  ml-5">
              <Link href="https://www.facebook.com/people/BAAF-Ekmek-Otomasyon-Sistemleri/100070403558082/">
                <BsFacebook className="max-md:w-10 max-md:h-10" size={30} />
              </Link>
            </li>
            <li className="text-gray-600 hover:text-red-600  ml-5">
              <Link href="https://www.youtube.com/@BAAFMakina">
                <BsYoutube className="max-md:w-10 max-md:h-10" size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Iletisim;
