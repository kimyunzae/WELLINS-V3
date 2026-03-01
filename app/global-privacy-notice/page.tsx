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
          Wellins Inc. -{" "}
          <span className="font-semibold">Global Privacy Notice</span>
        </h2>
        <p>
          <span className="font-medium text-foreground">Last Updated:</span>{" "}
          February 28, 2026
        </p>
      </div>

      <section className="space-y-4">
        <p>
          Wellins Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          values your privacy and is committed to protecting your personal
          information in compliance with applicable privacy laws across all
          regions where we operate. This Global Privacy Notice outlines how we
          collect, use, and disclose personal information and clarifies the
          scope of our business activities.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          1. Scope of this Privacy Notice
        </h3>
        <p>
          This Privacy Notice applies to personal information collected by
          Wellins Inc. through our websites, services, and interactions
          worldwide.
        </p>
        <p>
          <span className="font-medium text-foreground">Important Note:</span>{" "}
          Wellins Inc. provides industrial engineering, fabrication support,
          mechanical contracting, and related professional services. This notice
          applies to those business and website interactions. Project owners,
          subcontractors, and third-party vendors may maintain separate privacy
          practices for their own systems and processes.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          2. Information We Collect
        </h3>
        <p>We may collect the following types of personal information:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>
            <span className="font-medium text-foreground">
              Contact Information:
            </span>{" "}
            Name, email address, phone number, and physical address.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Professional Information:
            </span>{" "}
            Details related to your business inquiries or interactions with us.
          </li>
          <li>
            <span className="font-medium text-foreground">Technical Data:</span>{" "}
            IP address, browser type, and other usage data collected via
            cookies or similar technologies.
          </li>
          <li>
            <span className="font-medium text-foreground">Other Information:</span>{" "}
            Any information you voluntarily provide during communications with
            us.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          3. Use of Your Information
        </h3>
        <p>
          We use your personal information for purposes including, but not
          limited to:
        </p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>
            Providing and improving industrial engineering, construction
            support, and administrative services.
          </li>
          <li>
            Communicating with you regarding inquiries, project requests, or
            professional services.
          </li>
          <li>Complying with applicable legal and regulatory requirements.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          4. Sharing of Information
        </h3>
        <p>We may share your information in the following circumstances:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>
            <span className="font-medium text-foreground">
              Service Providers:
            </span>{" "}
            Third-party vendors assisting in our operations.
          </li>
          <li>
            <span className="font-medium text-foreground">Internal Use:</span>{" "}
            Information may be shared within Wellins Inc. for administrative
            purposes.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Legal Obligations:
            </span>{" "}
            When required by law or legal processes.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          5. Wellins Inc.&apos;s Operational Scope
        </h3>
        <p>
          Wellins Inc. is the entity responsible for industrial engineering,
          piping, HVAC, fire protection, equipment installation, and related
          project support services. This Global Privacy Notice applies to those
          business activities and related communications.
        </p>
        <p>
          If you interact with a third-party platform, project owner system, or
          separate service provider, that party may have its own privacy notice
          and data practices that apply to your information.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          6. Your Rights
        </h3>
        <p>
          Depending on your location, you may have rights under applicable
          privacy laws, including:
        </p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>
            <span className="font-medium text-foreground">Access:</span> Request
            access to personal information we have collected about you.
          </li>
          <li>
            <span className="font-medium text-foreground">Correction:</span>{" "}
            Request corrections to inaccuracies in your personal information.
          </li>
          <li>
            <span className="font-medium text-foreground">Deletion:</span>{" "}
            Request deletion of your personal information, subject to legal
            requirements.
          </li>
          <li>
            <span className="font-medium text-foreground">Opt-Out:</span> Opt
            out of certain data processing activities, such as marketing
            communications.
          </li>
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
          7. International Data Transfers
        </h3>
        <p>
          As a multi-state and cross-border business, your personal information
          may be transferred and processed in countries other than your own. We
          ensure such transfers comply with applicable data protection laws and
          implement appropriate safeguards.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          8. Security Measures
        </h3>
        <p>
          We use reasonable technical and organizational measures to protect
          your personal information. However, no system is entirely secure, and
          we encourage you to take precautions to protect your data.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          9. Retention of Information
        </h3>
        <p>
          We retain personal information only as long as necessary to fulfill
          the purposes outlined in this Privacy Notice or as required by law.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          10. Updates to This Privacy Notice
        </h3>
        <p>
          We may update this Privacy Notice periodically to reflect changes in
          our practices or applicable laws. Updates will include a revised
          &ldquo;Last Updated&rdquo; date.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          11. Contact Us
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
