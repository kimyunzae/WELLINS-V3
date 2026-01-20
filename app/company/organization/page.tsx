import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Organization | Wellins Inc.",
  description: "Learn about the organizational structure of Wellins Inc. and our leadership team.",
}

const departments = [
  {
    name: "Executive Leadership",
    description: "Strategic direction and corporate governance",
    roles: ["Chief Executive Officer", "Chief Operating Officer", "Chief Financial Officer"],
  },
  {
    name: "Engineering",
    description: "Design, planning, and technical oversight",
    roles: ["VP of Engineering", "Project Engineers", "Design Engineers", "CAD Specialists"],
  },
  {
    name: "Project Management",
    description: "Project delivery and client coordination",
    roles: ["Director of Projects", "Senior Project Managers", "Project Coordinators"],
  },
  {
    name: "Field Operations",
    description: "On-site installation and construction",
    roles: ["Field Superintendent", "Foremen", "Pipefitters", "HVAC Technicians", "Welders"],
  },
  {
    name: "Safety & Quality",
    description: "Safety compliance and quality assurance",
    roles: ["Safety Director", "Quality Manager", "Safety Officers", "QC Inspectors"],
  },
  {
    name: "Business Development",
    description: "Client relations and market growth",
    roles: ["VP of Business Development", "Account Managers", "Estimators"],
  },
]

export default function OrganizationPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Company"
        title="Organization"
        description="Our structure enables efficient delivery of complex industrial projects"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          {/* Org Chart Visual */}
          <div className="mb-20">
            <div className="flex flex-col items-center">
              {/* CEO */}
              <div className="border border-primary bg-primary px-8 py-4 text-center text-primary-foreground">
                <p className="text-sm font-medium">Chief Executive Officer</p>
              </div>
              <div className="h-8 w-px bg-border" />
              
              {/* C-Suite */}
              <div className="flex gap-4">
                <div className="h-px w-32 self-center bg-border" />
                <div className="flex gap-8">
                  <div className="border border-border bg-muted px-6 py-3 text-center">
                    <p className="text-sm font-medium text-foreground">COO</p>
                  </div>
                  <div className="border border-border bg-muted px-6 py-3 text-center">
                    <p className="text-sm font-medium text-foreground">CFO</p>
                  </div>
                </div>
                <div className="h-px w-32 self-center bg-border" />
              </div>
            </div>
          </div>

          {/* Departments Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, index) => (
              <div key={index} className="border border-border p-8">
                <h3 className="text-lg font-semibold text-foreground">{dept.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{dept.description}</p>
                <ul className="mt-6 space-y-2">
                  {dept.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1 w-1 bg-accent" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
              <p className="text-4xl font-light text-foreground lg:text-5xl">150+</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">Total Employees</p>
            </div>
            <div>
              <p className="text-4xl font-light text-foreground lg:text-5xl">25</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">Licensed Engineers</p>
            </div>
            <div>
              <p className="text-4xl font-light text-foreground lg:text-5xl">80+</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">Certified Tradespeople</p>
            </div>
            <div>
              <p className="text-4xl font-light text-foreground lg:text-5xl">12</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">Average Tenure (Years)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
