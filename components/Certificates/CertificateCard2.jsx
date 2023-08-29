import Image from "next/image";
import React from "react";
import InviewAnimate from "../Animation/InViewAnimate";

const bezier = "all 0.5s cubic-bezier(.26,.72,.2,1.31) 0.3s";

function CertificateCard2({ key, name, url }) {
  return (
    <InviewAnimate
      bezier={bezier}
      translate="translateY(300px)"
      className="w-full"
    >
      <div className="border items-center duration-300 rounded-xl overflow-hidden hover:shadow-xl transform hover:-translate-y-2">
        <Image
          key={key}
          alt={name}
          src={url}
          width={300}
          height={300}
          className="w-full max-h-[32rem]"
        />
        <div className="p-3">
          <h2 className="text-xl font-bold text-zinc-800 mt-1">{name}</h2>
        </div>
      </div>
    </InviewAnimate>
  );
}

export default CertificateCard2;
