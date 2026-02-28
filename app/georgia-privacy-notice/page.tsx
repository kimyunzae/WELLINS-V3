import { LegalDocumentLayout } from "@/components/legal-document-layout";

export const metadata = {
  title: "Georgia Privacy Notice | Wellins Inc.",
  description:
    "Georgia-specific notice describing how Wellins Inc. collects, uses, and safeguards personal information.",
};

export default function GeorgiaPrivacyNoticePage() {
  return (
    <LegalDocumentLayout
      title="Georgia Privacy Notice"
      description="A Georgia-specific overview of Wellins Inc. data handling practices."
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
          Wellins Inc. <span className="font-semibold">Georgia Privacy Notice</span>
        </h2>
        <p>
          <span className="font-medium text-foreground">Last Updated:</span>{" "}
          February 28, 2026
        </p>
      </div>

      <section className="space-y-4">
        <p>
          Wellins Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          is committed to protecting your privacy and handling personal
          information in a manner consistent with applicable laws, including
          those affecting Georgia residents. This notice explains how we collect,
          use, and safeguard personal information in connection with our
          operations in Georgia.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          1. Scope of This Notice
        </h3>
        <p>
          This notice applies to personal information collected by Wellins Inc.
          through our website, business communications, project inquiries,
          recruiting activity, and related operational interactions in Georgia.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          2. Business Operations in Georgia
        </h3>
        <p>
          Wellins Inc. provides industrial engineering, construction support,
          project coordination, fabrication, and related professional services in
          Georgia and surrounding markets.
        </p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>Mechanical and industrial piping project support</li>
          <li>HVAC, fire protection, and equipment installation services</li>
          <li>Engineering coordination, estimating, and client communications</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          3. Information We Collect
        </h3>
        <p>
          In the course of our operations, we may collect the following
          categories of personal information:
        </p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>
            Contact information such as your name, email address, phone number,
            company name, and mailing address
          </li>
          <li>
            Professional information related to project inquiries, bids, vendor
            relationships, and recruiting
          </li>
          <li>
            Technical data such as IP address, browser type, device details, and
            usage information collected through cookies or similar tools
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          4. How We Use Your Information
        </h3>
        <p>We use personal information for purposes including:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>Responding to project, service, partnership, or employment inquiries</li>
          <li>Preparing proposals, coordinating work, and supporting operations</li>
          <li>Complying with legal obligations and improving our services</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          5. Sharing of Information
        </h3>
        <p>We may share your information in limited circumstances, including:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>With service providers supporting hosting, email, analytics, or administration</li>
          <li>When required by law, regulation, or valid legal process</li>
          <li>Within Wellins Inc. for legitimate internal operational purposes</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          6. Your Rights Under Georgia Law
        </h3>
        <p>Depending on applicable law, you may be able to:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>Request access to personal information we maintain about you</li>
          <li>Request correction of inaccurate or outdated information</li>
          <li>
            Request deletion of personal information, subject to business and
            legal retention requirements
          </li>
        </ul>
        <p>
          To submit a request, contact us at{" "}
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
          7. Updates to This Notice
        </h3>
        <p>
          We may update this notice from time to time. If we do, the revised
          version will include an updated effective date.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          8. Contact Information
        </h3>
        <p>
          If you have questions about this Georgia Privacy Notice or our privacy
          practices, contact Wellins Inc.:
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
