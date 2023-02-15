import React from "react";
import Link from "next/link";

import { Meta } from "@/components";

export default function disclaimer() {
  return (
    <>
      <Meta
        title="Privacy Policy - Love Languages Test"
        description="Our commitment to your privacy is important to us at Love Languages Test. We have established this Privacy Policy to inform you about the types of information we collect and how we use it."
      />
      <div className="site-wrap">
        <article>
          <h1>Privacy Policy</h1>
          <p>
            Our commitment to your privacy is important to us at Love Languages
            Test (https:///www.lovelanguagestest.com). We have established this
            Privacy Policy to inform you about the types of information we
            collect and how we use it.
          </p>
          <h2>Agreement to Privacy Policy</h2>
          <p>
            By using our website, you are agreeing to the terms of this Privacy
            Policy and giving your consent for us to collect and use your
            information as described herein.
          </p>
          <h2>Collection of Information</h2>
          <p>
            When you provide us with personal information, we will be
            transparent about why we need it. If you contact us directly, we may
            receive additional information about you, such as your name, email
            address, phone number, and the contents of your message.
            <br />
            When you create an account on our website, we may request your
            contact information, such as your name, company name, address, email
            address, and telephone number.
          </p>
          <h2>Use of Information</h2>
          <p>
            We collect information to maintain, operate, and improve our
            website, personalize our website, understand how visitors use our
            website, develop new products and services, communicate with you
            directly or through our partners, and prevent fraud.
          </p>
          <h2>Log Files</h2>
          <p>
            We use log files to obtain information about our visitors, such as
            their internet protocol (IP) addresses, browser types, Internet
            Service Providers (ISPs), date and time stamps, referring/exit
            pages, and the number of clicks. This information is not linked to
            any personally identifiable information and is used to analyze
            trends, administer the site, track user movements, and gather
            demographic information.
          </p>
          <h2>Cookies and Web Beacons</h2>
          <p>
            We use cookies to store information about our visitors' preferences
            and the pages they accessed or visited to improve their user
            experience. Additionally, we may use third-party vendors, such as
            Google, who may use cookies, including the DoubleClick DART cookie,
            to display ads based on a visitor's past visits to our website.
          </p>
          <h2>Privacy Policies of Advertising Partners</h2>
          <p>
            Third-party ad servers or ad networks may use cookies, JavaScript,
            or web beacons in their respective advertisements and links that
            appear on our website. We do not have control over these cookies,
            and we recommend that you review their respective privacy policies
            for more information.
          </p>
          <h2>Third-Party Privacy Policies</h2>
          <p>
            This Privacy Policy only applies to our website, and it does not
            cover other advertisers or websites. We recommend that you consult
            the respective privacy policies of these third-party ad servers for
            more detailed information.
          </p>
          <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>
            Under the CCPA, California residents can request access to their
            personal data, request the deletion of their personal data, and
            request that their personal data not be sold.
          </p>
          <h2>GDPR Data Protection Rights</h2>
          <p>
            Each user has the right to access, rectify, erase, limit processing,
            object to processing, and data portability of their personal data.
          </p>

          <h2>Disclaimer</h2>
          <p>
            We are in no form affiliated to Dr. Gary Chapman and his book "The 5
            Love Languages." The information on this website is solely for
            educational purposes. <br />
            <br />
            We will only use your information for the purpose for which it is
            intended for. No sharing with any third party! Here you consider
            your privacy as a number one serious issue.
          </p>
          <p>
            If you have any questions or would like to exercise any of these
            rights, please contact us.
          </p>

          <Link href="/" alt="love language test">
            {" "}
            <button>TAKE LOVE LANGUAGE TEST</button>
          </Link>
        </article>
      </div>
    </>
  );
}
