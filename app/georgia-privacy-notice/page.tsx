import Link from "next/link";
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
          Wellins Inc. -{" "}
          <span className="font-semibold">Georgia Privacy Notice</span>
        </h2>
        <p>
          <span className="font-medium text-foreground">Last Updated:</span>{" "}
          February 28, 2026
        </p>
      </div>

      <section className="space-y-4">
        <p>
          Wellins Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          is committed to protecting your privacy and complying with applicable
          laws, including those governing the State of Georgia. This Privacy
          Notice explains how we collect, use, and safeguard your personal
          information and clarifies our operational scope within Georgia.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          1. Scope of this Privacy Notice
        </h3>
        <p>
          This Privacy Notice applies to personal information collected by
          Wellins Inc. in the course of our business operations in Georgia. It
          covers information we collect through our website, office
          communications, project coordination, recruiting, vendor interactions,
          and related service activities connected to Georgia operations.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          2. Business Operations in Georgia
        </h3>
        <p>
          Wellins Inc. provides industrial engineering, construction support,
          fabrication coordination, and other professional services in Georgia.
          We may provide, facilitate, or engage in:
        </p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>Industrial piping, process systems, and mechanical project support.</li>
          <li>HVAC, fire protection, and equipment installation coordination.</li>
          <li>Estimating, administrative support, and client communications.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          3. Information We Collect
        </h3>
        <p>
          In the course of providing our services, we may collect the following
          categories of personal information:
        </p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>
            <span className="font-medium text-foreground">
              Contact Information:
            </span>{" "}
            Name, email address, phone number, and mailing address.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Professional Information:
            </span>{" "}
            Details related to your business or professional inquiries.
          </li>
          <li>
            <span className="font-medium text-foreground">Technical Data:</span>{" "}
            IP address, browser type, and interaction data collected via
            cookies.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          4. Use of Your Information
        </h3>
        <p>We use your personal information for the following purposes:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>
            To provide professional services related to industrial engineering,
            construction support, and field coordination.
          </li>
          <li>To communicate with you about your inquiries or business needs.</li>
          <li>To comply with legal obligations and improve our services.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          5. Sharing of Information
        </h3>
        <p>We may share your information in the following circumstances:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>
            <span className="font-medium text-foreground">
              Service Providers:
            </span>{" "}
            Trusted third-party vendors assisting us in delivering services.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Legal Compliance:
            </span>{" "}
            When required by law or in response to legal requests.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Internal Operations:
            </span>{" "}
            Within Wellins Inc. for administrative and operational purposes
            related to Georgia work.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          6. Wellins Inc.&apos;s Role in Georgia
        </h3>
        <p>
          Wellins Inc. is responsible for industrial engineering, mechanical
          contracting, fabrication support, and related project coordination in
          Georgia. This Georgia Privacy Notice applies to those Georgia-specific
          operations. Company-wide website and cross-regional privacy practices
          are addressed separately in our{" "}
          <Link
            href="/global-privacy-notice"
            className="font-medium text-foreground underline underline-offset-4"
          >
            Global Privacy Notice
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          7. Your Rights Under Georgia Law
        </h3>
        <p>As a Georgia resident, you may have the right to:</p>
        <ul className="space-y-3 pl-5 text-muted-foreground marker:text-foreground">
          <li>Request access to your personal information.</li>
          <li>Request corrections to your personal information.</li>
          <li>
            Request the deletion of your personal information, subject to legal
            retention requirements.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us at{" "}
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
          8. Updates to This Notice
        </h3>
        <p>
          We may update this Privacy Notice periodically. Any changes will be
          reflected with an updated &ldquo;Last Updated&rdquo; date.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          9. Contact Information
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
        <p>
          <span className="font-medium text-foreground">Important Note:</span>{" "}
          This Georgia Privacy Notice supplements, and does not replace, our
          company-wide Global Privacy Notice. When both notices apply, this
          Georgia notice governs Georgia-specific operations and interactions.
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
