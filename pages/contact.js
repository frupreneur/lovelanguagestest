import React from "react";
import Link from "next/link";
import { ContactForm, Meta } from "@/components";
import { useGlobalState } from "@/state";

export default function contact() {
  const { state } = useGlobalState();

  console.log(state);
  return (
    <>
      <Meta
        title="Contact Us - Love Languages tes"
        description="If you have any questions or would like to partner with us, please contact us."
      />
      <ContactForm />
      <Link href="/" alt="Love Language test">
        {" "}
        <button>TAKE LOVE LANGUAGE TEST</button>
      </Link>
    </>
  );
}
