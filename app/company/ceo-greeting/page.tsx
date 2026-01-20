import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "CEO Greeting | Wellins Inc.",
  description: "A message from the CEO of Wellins Inc. about our commitment to industrial engineering excellence.",
}

export default function CEOGreetingPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Company"
        title="CEO Greeting"
        description="A message from our leadership"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-20">
            {/* CEO Photo */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/ceo-portrait.jpg"
                  alt="Jeongsu Park, CEO of Wellins Inc."
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6">
                <p className="text-xl font-semibold text-foreground">Jeongsu Park</p>
                <p className="mt-1 text-sm text-muted-foreground">Chief Executive Officer</p>
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed text-foreground">
                  Dear Valued Partners and Stakeholders,
                </p>
                
                <p className="mt-6">
                  For nearly three decades, Wellins Inc. has been at the forefront of industrial 
                  engineering, delivering precision-driven solutions that power American manufacturing. 
                  What started as a small team with big ambitions has grown into a nationally recognized 
                  leader in industrial piping, HVAC systems, equipment installation, and fire protection.
                </p>

                <p className="mt-4">
                  Our success is built on a simple foundation: we treat every project as if it were 
                  our own facility. This means never compromising on safety, always pursuing the 
                  highest standards of quality, and continuously investing in our people and 
                  capabilities.
                </p>

                <p className="mt-4">
                  As we look to the future, we see tremendous opportunity to support the 
                  reindustrialization of America. From automotive plants to food processing 
                  facilities, from petrochemical complexes to distribution centers, we are 
                  ready to help our partners build the infrastructure that drives economic growth.
                </p>

                <p className="mt-4">
                  I invite you to explore what Wellins Inc. can do for your next project. 
                  Our team of expert engineers, project managers, and skilled tradespeople 
                  are ready to bring your vision to life with the precision and reliability 
                  that has defined our company for over 25 years.
                </p>

                <p className="mt-8 font-medium text-foreground">
                  Thank you for considering Wellins Inc. as your industrial engineering partner.
                </p>

                <div className="mt-8">
                  <p className="font-semibold text-foreground">Jeongsu Park</p>
                  <p className="text-sm">Chief Executive Officer, Wellins Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
