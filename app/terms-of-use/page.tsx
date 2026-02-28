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
        <p>
          <span className="font-medium text-foreground">Last Updated:</span>{" "}
          February 28, 2026
        </p>
      </div>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          Disclaimer
        </h3>
        <p>
          &copy; 2024 Wellins Inc. Information published on this site is provided
          for general informational purposes. While we use sources we believe to
          be reliable, we do not guarantee that all information is complete,
          current, or free from error. Any examples, projections, or estimates
          shown on the site are illustrative only and should not be treated as a
          guarantee of future performance or project outcomes.
        </p>
        <p>
          You are responsible for conducting your own review of any project,
          service, document, or communication before relying on it for business
          or operational decisions.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          1. Agreement to These Terms
        </h3>
        <p>
          These Terms of Use form a legal agreement between you and Wellins Inc.
          (&ldquo;Wellins,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) and govern your use of the Wellins website and its
          related content, features, and services.
        </p>
        <p>
          By accessing or using this site, you agree to be bound by these terms.
          If you do not agree, do not use the site.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          2. Authorized Users
        </h3>
        <p>
          You must be at least 18 years old to use this site. If portions of the
          site require registration or form submission, you agree to provide
          accurate and complete information and to keep any credentials or
          account details secure.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          3. Limited License
        </h3>
        <p>
          Wellins grants you a limited, non-exclusive, non-transferable right to
          access and use this site for lawful, internal, and non-commercial
          purposes.
        </p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>
            You may not copy, distribute, republish, or modify site content
            without prior written permission.
          </li>
          <li>
            You may not use the site in a way that disrupts operations, violates
            law, or interferes with other users.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          4. Intellectual Property
        </h3>
        <p>
          All content on this site, including text, designs, logos, graphics,
          downloads, and images, is owned by Wellins Inc. or its licensors and
          is protected by applicable intellectual property laws.
        </p>
        <p>
          You may not use Wellins trademarks, service marks, trade dress, or
          other brand elements without prior written consent.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          5. Privacy
        </h3>
        <p>
          Your use of this site is also subject to our{" "}
          <a
            href="https://wellins-inc.com/global-privacy-notice/"
            className="font-medium text-foreground underline underline-offset-4"
          >
            https://wellins-inc.com/global-privacy-notice/
          </a>
          , which describes how we collect, use, and protect personal
          information.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          6. Limitation of Liability
        </h3>
        <p>
          To the fullest extent permitted by law, Wellins Inc., its affiliates,
          officers, employees, and contractors will not be liable for any
          indirect, incidental, special, or consequential damages arising out of
          or related to your use of this site.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          7. Governing Law
        </h3>
        <p>
          These Terms of Use are governed by the laws of the United States and
          the State of Georgia, without regard to conflict-of-law principles. Any
          dispute relating to these terms or your use of the site must be brought
          in a court of competent jurisdiction located in Georgia.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          8. Changes to These Terms
        </h3>
        <p>
          We may revise these Terms of Use from time to time. Continued use of
          the site after updates are posted means you accept the revised terms.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          9. Contact Us
        </h3>
        <p>If you have questions about these Terms of Use, contact Wellins Inc.:</p>
        <div className="space-y-1 text-foreground">
          <p>Email: info@wellinsinc.com</p>
          <p>Phone: +1 (770) 557-0019</p>
          <p>Address: 3483 Satellite Blvd. Suite 100, Duluth, GA 30096</p>
        </div>
        <p>
          By using this website, you acknowledge that you have read,
          understood, and agreed to these Terms of Use.
        </p>
        <p className="text-sm text-muted-foreground">
          Related notice:{" "}
          <Link
            href="/global-privacy-notice"
            className="font-medium text-foreground underline underline-offset-4"
          >
            Global Privacy Notice
          </Link>
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
