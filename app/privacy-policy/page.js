"use client";

import Link from "next/link";
const Page = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className=" max-w-7xl mx-auto px-6 py-12">
        {/* Title */}
        <h1 className="text-5xl font-bold text-orange-600 mb-4">
          Privacy Policy
        </h1>
        <p className="mb-2 text-xl px-2">
          <strong>Effective Date:</strong>{" "}
          {new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        {/* Intro */}
        <p className="mb-6">
          Calsoft Inc. (“Calsoft,” “we,” “our,” or “us”) respects your privacy
          and is committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit{" "}
          <a
            href="https://www.calsoftinc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline"
          >
            https://www.calsoftinc.com
          </a>{" "}
          (the “Website”) or interact with our services. It also outlines the
          rights available to users under applicable laws, including the General
          Data Protection Regulation (GDPR) and the California Consumer Privacy
          Act (CCPA).
        </p>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Sections */}
        <Section
          heading="Information We Collect"
          content={
            <>
              <h3 className="text-lg font-semibold mb-2">Personal Data</h3>
              <p className="mb-2">
                When you submit forms (including HubSpot forms), subscribe to
                updates, or contact us, we may collect:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Name</li>
                <li>Job title and company name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Usage Data</h3>
              <p className="mb-2">We automatically collect data such as:</p>
              <ul className="list-disc list-inside mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device identifiers</li>
                <li>Pages visited and time spent</li>
                <li>Referral source and other diagnostic data</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">
                Cookies and Tracking
              </h3>
              <p>
                We use cookies, tracking pixels, and similar technologies
                (including HubSpot and Google Analytics) to understand website
                usage, improve functionality, and tailor communications. You can
                manage cookie preferences through your browser settings.
              </p>
            </>
          }
        />

        <Divider />
        <Section
          heading="How We Use Your Data"
          list={[
            "Provide and maintain our Website and services",
            "Respond to inquiries and requests",
            "Send relevant marketing communications (with your consent, where required)",
            "Analyze trends and improve user experience",
            "Detect, prevent, and address technical issues or security risks",
            "Comply with legal or regulatory obligations",
          ]}
        />

        <Divider />
        <Section
          heading="Sharing of Information"
          content={
            <>
              <p className="mb-2">We may share your information with:</p>
              <ul className="list-disc list-inside mb-2">
                <li>
                  Service providers (e.g., HubSpot, analytics platforms,
                  hosting providers)
                </li>
                <li>Legal authorities when required by law</li>
                <li>Business partners only with your explicit consent</li>
              </ul>
              <p className="font-medium">We do not sell personal information.</p>
            </>
          }
        />

        <Divider />
        <Section
          heading="International Data Transfers"
          text="As a global company, your data may be transferred and stored outside your country of residence, including in India and the United States. When transferring data from the EU/EEA, we use approved safeguards such as Standard Contractual Clauses (SCCs)."
        />

        <Divider />
        <Section
          heading="Your Rights"
          content={
            <>
              <h3 className="text-lg font-semibold mb-2">GDPR (EU/EEA users)</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Access, correct, or delete personal data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">
                CCPA (California residents)
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>Know what personal information we collect and how it’s used</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of the sale of personal data (we do not sell data)</li>
                <li>Non-discrimination for exercising your rights</li>
              </ul>
              <p>
                To exercise these rights, email us at{" "}
                <a
                  href="mailto:marketing@calsoftinc.com"
                  className="text-orange-600 underline"
                >
                  marketing@calsoftinc.com
                </a>
              </p>
            </>
          }
        />

        <Divider />
        <Section
          heading="Data Retention"
          text="We retain personal data only as long as necessary for the purposes described in this policy, or as required by law."
        />

        <Divider />
        <Section
          heading="Security"
          text="We implement appropriate technical and organizational measures to protect your data. However, no method of electronic storage or transmission over the internet is completely secure."
        />

        <Divider />
        <Section
          heading="Children’s Privacy"
          text="Our Website is not intended for individuals under 16 years of age. We do not knowingly collect personal data from children."
        />

        <Divider />
        <Section
          heading="Third-Party Links"
          text="Our Website may contain links to third-party sites. We are not responsible for the privacy practices or content of these sites."
        />

        <Divider />
        <Section
          heading="Changes to This Privacy Policy"
          text="We may update this policy from time to time. Updates will be posted on this page with a revised “Effective Date.”"
        />

        <Divider />
        <Section
          heading="Contact Us"
          content={
            <p>
              If you have any questions about this Privacy Policy, please
              contact us: <br />
              • By email:{" "}
              <a
                href="mailto:marketing@calsoftinc.com"
                className="text-orange-600 underline"
              >
                marketing@calsoftinc.com
              </a>
            </p>
          }
        />
      </div>
    </main>
  );
};

export default Page;

/* --------- Components --------- */

const Section = ({ heading, text, list, content }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-3">{heading}</h2>
    {text && <p className="mb-3">{text}</p>}
    {list && (
      <ul className="list-disc list-inside mb-3">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}
    {content && <div>{content}</div>}
  </div>
);

const Divider = () => <hr className="my-6 border-gray-300" />;
