import {
  OrganizationChart,
  type OrganizationDivision,
} from "@/app/company/organization/organization-chart";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Organization",
  description:
    "Learn about the organizational structure of Wellins Inc. and our leadership team.",
  path: "/company/organization",
});

const divisions: OrganizationDivision[] = [
  {
    name: "Management Support Division",
    description: "Company operations and administrative support",
    groups: [
      { name: "HR / General Affairs", items: [] },
      { name: "Purchasing", items: [] },
      { name: "Accounting", items: [] },
    ],
  },
  {
    name: "Fabrication Division",
    description: "Fabrication, production, and engineering execution",
    groups: [
      {
        name: "Production Team",
        items: ["Fire Protection Piping Team", "Equipment & Spool Team"],
      },
      {
        name: "Engineering Team",
        items: ["Fire Protection Piping Team", "Equipment & Piping Team"],
      },
    ],
  },
  {
    name: "Installation Division",
    description: "Installation and site delivery operations",
    groups: [
      {
        name: "Installation Team",
        items: ["Project Control Manager", "Safety Manager"],
      },
      {
        name: "Construction Manager",
        items: ["QC Manager"],
      },
    ],
  },
  {
    name: "New Business Division",
    description: "Growth, sales, and service expansion",
    groups: [
      {
        name: "Fire Protection Support Team",
        items: ["Installation Support Team", "Maintenance Team"],
      },
      {
        name: "Sales Team",
        items: ["Sales Manager", "Project Estimator"],
      },
    ],
  },
];

export default function OrganizationPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Company"
        title="Organization"
        description="Skilled teams and specialized units, equipped for mission-critical operations with zero compromise on safety or compliance."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <OrganizationChart divisions={divisions} />
        </div>
      </section>

      {/* Team Stats */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
            Our <span className="font-semibold">Team</span>
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            <div>
              <p className="text-4xl font-light text-foreground lg:text-5xl">
                150+
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Total Employees
              </p>
            </div>
            <div>
              <p className="text-4xl font-light text-foreground lg:text-5xl">
                25
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Licensed Engineers
              </p>
            </div>
            <div>
              <p className="text-4xl font-light text-foreground lg:text-5xl">
                80+
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Certified Tradespeople
              </p>
            </div>
            <div>
              <p className="text-4xl font-light text-foreground lg:text-5xl">
                12
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Average Tenure (Years)
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
