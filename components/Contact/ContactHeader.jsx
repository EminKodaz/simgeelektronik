import Head from "next/head";
import React from "react";
import ContactInfos from "./ContactInfos";
import InviewAnimate from "../Animation/InViewAnimate";
import ContactForm from "./ContactForm";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function ContactHeader() {
  return (
    <>
      <Head>
        <title>Simge Elektronik İletişim Sayfası</title>
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
      <main className="min-h-fit mb-32">
        <div className="w-full mt-6 flex flex-col justify-center items-center m-auto">
          <InviewAnimate
            bezier={bezier}
            translate="translateY(300px)"
            className="w-full"
          >
            <div className="w-full h-full md:h-[36rem] md:px-8 md:py-4 px-3 gap-2 mt-14 flex flex-col md:flex-row justify-between items-center md:rounded-[2.5rem] rounded-2xl bg-lightred">
              <InviewAnimate
                bezier={bezier}
                translate="translateX(300px)"
                className="w-full"
              >
                <ContactForm />
              </InviewAnimate>
              <InviewAnimate
                bezier={bezier}
                translate="translateX(-300px)"
                className="w-full"
              >
                <ContactInfos />
              </InviewAnimate>
            </div>
          </InviewAnimate>
          {/*  */}
        </div>
      </main>
    </>
  );
}

export default ContactHeader;
