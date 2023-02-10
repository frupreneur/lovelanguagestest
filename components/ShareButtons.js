import React from "react";
import { FaWhatsapp, FaRegCopy, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function ShareButtons() {
  const link = "https://www.lovelanguagestest.com";

  return (
    <div className="card">
      <div className="share-container">
        <h2>Help Your Friends!!!</h2>
        <p>
          Share this website with friends so they can discover their primary
          love language too <br />
          (Your results will not be shared)
        </p>
        <div className="share-buttons">
          <Link
            href={`https://api.whatsapp.com/send?text=Do you know your love language? Take this *love language test* to learn how to better connect with your loved ones ${link}`}
            target="_blank"
            className="share-button wa"
          >
            <FaWhatsapp style={{ fontSize: "1.5rem" }} />{" "}
            <span> {`Share On WhatsApp`}</span>
          </Link>

          <Link
            href={`https://web.facebook.com/share.php?u=${link}`}
            target="_blank"
            className="share-button fb"
          >
            <FaFacebook style={{ fontSize: "1.5rem" }} />{" "}
            <span> {`Share On Facebook`}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
