import { LegalDocumentLayout } from "@/components/legal-document-layout";

export const metadata = {
  title: "Global Privacy Notice | Wellins Inc.",
  description:
    "An overview of how Wellins Inc. collects, uses, shares, and protects personal information.",
};

export default function GlobalPrivacyNoticePage() {
  return (
    <LegalDocumentLayout
      title="Global Privacy Notice"
      description="A general privacy notice for users, partners, and visitors interacting with Wellins Inc."
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
          Wellins Inc. <span className="font-semibold">Global Privacy Notice</span>
        </h2>
        <p>
          <span className="font-medium text-foreground">Last Updated:</span>{" "}
          February 28, 2026
        </p>
      </div>

      <section className="space-y-4">
        <p>
          Wellins Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          values your privacy and is committed to protecting personal information
          in accordance with applicable privacy laws. This notice explains how we
          collect, use, disclose, and safeguard personal information across the
          regions in which we operate.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          1. Scope of This Privacy Notice
        </h3>
        <p>
          This notice applies to personal information collected through our
          website, project inquiries, recruiting, vendor communications, and
          business interactions worldwide.
        </p>
        <p>
          It covers information collected directly from individuals and
          information submitted to us on behalf of companies, project teams, and
          business partners.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          2. Information We Collect
        </h3>
        <p>We may collect the following types of personal information:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>Contact information such as name, email, phone number, and address</li>
          <li>
            Professional information related to project requests, job
            applications, vendor coordination, and customer support
          </li>
          <li>
            Technical data such as IP address, browser type, device details, and
            website interaction data
          </li>
          <li>
            Any other information you choose to provide through forms, emails, or
            direct communications
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          3. How We Use Your Information
        </h3>
        <p>We may use personal information to:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>Respond to inquiries and provide requested information or services</li>
          <li>Coordinate engineering, fabrication, and field operations</li>
          <li>Support recruiting, vendor onboarding, and internal administration</li>
          <li>Meet legal, regulatory, and contractual obligations</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          4. Sharing of Information
        </h3>
        <p>We may share information only when reasonably necessary, including:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>With third-party providers that support our business systems and operations</li>
          <li>Within Wellins Inc. for legitimate business and administrative purposes</li>
          <li>When required to comply with law, court order, or legal process</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          5. Your Rights
        </h3>
        <p>Depending on where you are located, you may have the right to:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of inaccurate personal information</li>
          <li>Request deletion of personal information, subject to legal exceptions</li>
          <li>Opt out of certain communications or data uses where permitted</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:info@wellinsinc.com"
            className="font-medium text-foreground underline underline-offset-4"
          >
            info@wellinsinc.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          6. International Data Transfers
        </h3>
        <p>
          Because we may work with partners, clients, and service providers in
          multiple regions, your information may be processed in countries other
          than your own. When that occurs, we take reasonable steps to apply
          appropriate safeguards consistent with applicable law.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          7. Security Measures
        </h3>
        <p>
          We use reasonable technical, administrative, and organizational
          measures to protect personal information. No system is completely
          secure, so we encourage you to use appropriate caution when submitting
          information online.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          8. Retention of Information
        </h3>
        <p>
          We retain personal information only as long as necessary for the
          purposes described in this notice, or as required by law, contract, or
          legitimate business need.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          9. Updates to This Notice
        </h3>
        <p>
          We may update this Global Privacy Notice periodically. Any changes will
          be reflected on this page together with a revised effective date.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          10. Contact Us
        </h3>
        <p>
          If you have questions about this notice or our privacy practices,
          contact Wellins Inc.:
        </p>
        <div className="space-y-1 text-foreground">
          <p>Wellins Inc.</p>
          <p>3483 Satellite Blvd. Suite 100</p>
          <p>Duluth, GA 30096</p>
          <p>info@wellinsinc.com</p>
          <p>+1 (770) 557-0019</p>
        </div>
      </section>
    </LegalDocumentLayout>
  );
}
