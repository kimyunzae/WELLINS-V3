import Link from "next/link";
import { LegalDocumentLayout } from "@/components/legal-document-layout";

export const metadata = {
  title: "Terms of Use | Wellins Inc.",
  description:
    "Terms and conditions governing the use of the Wellins Inc. website and related digital services.",
};

export default function TermsOfUsePage() {
  return (
    <LegalDocumentLayout
      title="Terms of Use"
      description="Please review these terms carefully before using the Wellins Inc. website."
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
          Disclaimer and <span className="font-semibold">Terms of Use</span>
        </h2>
      </div>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          Disclaimer
        </h3>
        <p>
          &copy; 2024 Wellins Inc. This information has been obtained from
          sources we believe to be reliable; however, we have not verified it
          and make no guarantees, warranties, or representations about its
          accuracy or completeness. Any projections, opinions, assumptions, or
          estimates used on this site are for illustrative purposes only and do
          not represent the current or future performance of any project,
          facility, installation, or service engagement. We encourage you and
          your advisors to conduct a thorough, independent review of any
          project, service, or operational decision to ensure it meets your
          specific requirements.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          Terms of Use
        </h3>
        <h4 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
          (Last Updated: February 28, 2026) Please Read Carefully
        </h4>
        <p>
          This Wellins Inc. Terms of Use agreement (&ldquo;Agreement&rdquo;) is
          a legal agreement between you and Wellins Inc. (&ldquo;Wellins,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and
          outlines the terms and conditions for your use of our website and
          related digital resources, including the privacy information
          accessible at{" "}
          <Link
            href="/global-privacy-notice"
            className="font-medium text-foreground underline underline-offset-4"
          >
            https://wellins-inc.com/global-privacy-notice/
          </Link>{" "}
          (the &ldquo;Site&rdquo;).
        </p>
        <p>
          By accessing or using the Site, you accept and agree to be bound by
          this Agreement without any reservations, modifications, or additions.
          If you do not agree to these terms, you are not authorized to use the
          Site.
        </p>
      </section>

      <section className="space-y-4">
        <h4 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
          1. Authorized Users
        </h4>
        <p>
          <span className="font-medium text-foreground">
            1.1 Age Requirement:
          </span>{" "}
          To use this Site, you must be at least 18 years of age. By accessing
          the Site, you represent that you are at least 18 years old.
        </p>
        <p>
          <span className="font-medium text-foreground">1.2 Registration:</span>{" "}
          Some areas of the Site may require registration or form submission.
          You agree to provide accurate and complete information and maintain
          the confidentiality of your login credentials. Wellins will not be
          liable for unauthorized use of your account.
        </p>
      </section>

      <section className="space-y-4">
        <h4 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
          2. License to Use the Site
        </h4>
        <p>
          <span className="font-medium text-foreground">
            2.1 Grant of License:
          </span>{" "}
          Wellins grants you a limited, non-exclusive, non-transferable license
          to access and use the Site for lawful, internal, and non-commercial
          purposes.
        </p>
        <p>
          <span className="font-medium text-foreground">2.2 Restrictions:</span>{" "}
          You may not:
        </p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>
            Reproduce, distribute, or modify content on the Site without
            written consent.
          </li>
          <li>
            Use the Site for illegal purposes or interfere with its operation.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h4 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
          3. Intellectual Property
        </h4>
        <p>
          <span className="font-medium text-foreground">3.1</span> All content
          on this Site, including but not limited to text, graphics, logos, and
          images, is the property of Wellins Inc. or its licensors and is
          protected by copyright and trademark laws.
        </p>
        <p>
          <span className="font-medium text-foreground">3.2</span> You may not
          use any of Wellins&apos; trademarks, service marks, or logos without
          prior written consent.
        </p>
      </section>

      <section className="space-y-4">
        <h4 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
          4. Privacy Policy
        </h4>
        <p>
          Your use of the Site is subject to our{" "}
          <Link
            href="/global-privacy-notice"
            className="font-medium text-foreground underline underline-offset-4"
          >
            https://wellins-inc.com/global-privacy-notice/
          </Link>
          , which explains how we collect, use, and protect your personal
          information.
        </p>
      </section>

      <section className="space-y-4">
        <h4 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
          5. Limitation of Liability
        </h4>
        <p>
          In no event will Wellins Inc., its affiliates, or employees be liable
          for any direct, indirect, incidental, or consequential damages
          arising from your use of the Site.
        </p>
      </section>

      <section className="space-y-4">
        <h4 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
          6. Governing Law
        </h4>
        <p>
          This Agreement is governed by the laws of the United States and the
          State of Georgia, where Wellins Inc. operates. Any disputes will be
          resolved exclusively in the courts of the applicable state.
        </p>
      </section>

      <section className="space-y-4">
        <h4 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
          7. Changes to Terms
        </h4>
        <p>
          We reserve the right to modify these Terms of Use at any time. By
          continuing to use the Site after changes are posted, you agree to the
          revised terms.
        </p>
      </section>

      <section className="space-y-4">
        <h4 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
          8. Contact Us
        </h4>
        <p>
          If you have any questions or concerns about these Terms of Use,
          please contact us:
        </p>
        <div className="space-y-1 text-foreground">
          <p>Email: info@wellinsinc.com</p>
          <p>Phone: +1 (770) 557-0019</p>
          <p>Address: 3483 Satellite Blvd. Suite 100, Duluth, GA 30096</p>
        </div>
      </section>

      <section className="space-y-4">
        <h4 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
          Acknowledgment
        </h4>
        <p>
          By using this website, you acknowledge that you have read,
          understood, and agree to be bound by the Disclaimer and Terms of Use.
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
