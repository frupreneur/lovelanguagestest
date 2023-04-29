import React from "react";
import Link from "next/link";

import { Meta } from "@/components";

export default function AboutUsPage() {
  return (
    <>
      <Meta
        title="About Us - Love Languages Test"
        description="Love Languages Test (lovelanguagestest.com) is a web app designed to
        help people discover and understand their primary love language. Our
        website offers a simple and interactive quiz that is easy to
        navigate and provides users with insightful results."
      />
      <div className="site-wrap">
        <article>
          <h1>About Us</h1>
          <p>
            Love Languages Test (lovelanguagestest.com) is a web app designed to
            help people discover and understand their primary love language. Our
            website offers a simple and interactive quiz that is easy to
            navigate and provides users with insightful results.
          </p>
          <h2>History</h2>
          <p>
            Love Languages Test was created with the intention of helping people
            develop better communication skills in their relationships. Our
            website was inspired by the popular book, The 5 Love Languages, by
            Dr. Gary Chapman, which has helped millions of couples improve their
            relationships by understanding their partner's love language.
          </p>
          <h2>Our Team</h2>
          <p>
            At Love Languages Test, we are passionate about helping people
            strengthen their relationships and improve their communication
            skills. Our team is made up of experts in psychology and
            communication who have carefully crafted the quiz to be informative
            and accurate. Our team members earn an average salary of $85,000 per
            year.
          </p>
          <p>
            We take user privacy and security seriously, and we use the latest
            technology to protect the information that we collect. We also value
            feedback from our users and continuously strive to improve our
            website and the love language quiz.{" "}
          </p>
          <h2>Our Goals</h2>
          <p>
            Our goal at Love Languages Test is to provide a helpful tool for
            people to better understand their communication preferences in their
            relationships. We believe that everyone can benefit from learning
            about the five love languages, regardless of their relationship
            status or experience.
          </p>
          <p>
            We are committed to creating an inclusive and welcoming environment
            for all users and do not tolerate any form of discrimination or
            harassment. Our mission is to help people develop stronger,
            healthier relationships through effective communication and
            understanding of each other's love languages. Our website is
            entirely free, and we rely on donations to continue providing our
            services to users.{" "}
          </p>
        </article>
      </div>
    </>
  );
}
