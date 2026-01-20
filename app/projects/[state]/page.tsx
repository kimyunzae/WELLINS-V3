import { ProjectDetail } from "@/components/project-detail"
import { notFound } from "next/navigation"

const stateData: Record<string, {
  state: string
  description: string
  stats: { label: string; value: string }[]
  projects: {
    name: string
    type: string
    location: string
    year: string
    description: string
    image: string
  }[]
}> = {
  indiana: {
    state: "Indiana",
    description: "Strategic location for serving the Midwest's manufacturing heartland, with expertise in automotive and steel production facilities.",
    stats: [
      { label: "Projects Completed", value: "35+" },
      { label: "Years Active", value: "15" },
      { label: "Major Clients", value: "12+" },
      { label: "Team Members", value: "15+" },
    ],
    projects: [
      {
        name: "Indianapolis Manufacturing Complex",
        type: "Industrial Piping",
        location: "Indianapolis, IN",
        year: "2024",
        description: "Process piping installation for a major automotive supplier, including compressed air, cooling water, and process chemical systems.",
        image: "/images/project-1.jpg",
      },
      {
        name: "Fort Wayne Steel Mill",
        type: "Equipment Installation",
        location: "Fort Wayne, IN",
        year: "2022",
        description: "Heavy equipment rigging and installation for steel processing line modernization, including hydraulic systems and cooling infrastructure.",
        image: "/images/project-2.jpg",
      },
    ],
  },
  michigan: {
    state: "Michigan",
    description: "Supporting the automotive industry's evolution with installations for both traditional and electric vehicle manufacturing.",
    stats: [
      { label: "Projects Completed", value: "40+" },
      { label: "Years Active", value: "12" },
      { label: "Major Clients", value: "18+" },
      { label: "Team Members", value: "18+" },
    ],
    projects: [
      {
        name: "Detroit Electric Vehicle Plant",
        type: "Equipment Installation",
        location: "Detroit, MI",
        year: "2024",
        description: "Comprehensive mechanical installation for EV battery assembly facility, including climate-controlled clean rooms and specialized material handling.",
        image: "/images/project-3.jpg",
      },
      {
        name: "Grand Rapids Pharmaceutical Facility",
        type: "HVAC System",
        location: "Grand Rapids, MI",
        year: "2023",
        description: "Complete HVAC and cleanroom systems for pharmaceutical manufacturing expansion, meeting FDA validation requirements.",
        image: "/images/project-1.jpg",
      },
    ],
  },
  ohio: {
    state: "Ohio",
    description: "Serving Ohio's diverse industrial landscape from distribution to chemical processing and advanced manufacturing.",
    stats: [
      { label: "Projects Completed", value: "50+" },
      { label: "Years Active", value: "16" },
      { label: "Major Clients", value: "20+" },
      { label: "Team Members", value: "22+" },
    ],
    projects: [
      {
        name: "Columbus Distribution Center",
        type: "Fire Protection",
        location: "Columbus, OH",
        year: "2024",
        description: "Multi-level fire protection system for 750,000 sq ft e-commerce fulfillment center with high-bay storage and mezzanine levels.",
        image: "/images/project-2.jpg",
      },
      {
        name: "Cincinnati Chemical Plant",
        type: "Industrial Piping",
        location: "Cincinnati, OH",
        year: "2023",
        description: "Specialty alloy piping installation for chemical processing expansion, including hastelloy and titanium systems.",
        image: "/images/project-3.jpg",
      },
    ],
  },
  "south-carolina": {
    state: "South Carolina",
    description: "Supporting the Southeast's growing manufacturing sector with industrial engineering services across multiple industries.",
    stats: [
      { label: "Projects Completed", value: "30+" },
      { label: "Years Active", value: "10" },
      { label: "Major Clients", value: "10+" },
      { label: "Team Members", value: "12+" },
    ],
    projects: [
      {
        name: "Charleston Port Facility",
        type: "Equipment Installation",
        location: "Charleston, SC",
        year: "2024",
        description: "Heavy equipment installation for port logistics facility including crane systems and material handling equipment.",
        image: "/images/project-1.jpg",
      },
      {
        name: "Greenville Textile Mill",
        type: "HVAC System",
        location: "Greenville, SC",
        year: "2022",
        description: "Industrial HVAC modernization for textile manufacturing, optimizing humidity control and energy efficiency.",
        image: "/images/project-2.jpg",
      },
    ],
  },
  tennessee: {
    state: "Tennessee",
    description: "Central location for automotive manufacturing support and logistics facility construction across the state.",
    stats: [
      { label: "Projects Completed", value: "42+" },
      { label: "Years Active", value: "14" },
      { label: "Major Clients", value: "15+" },
      { label: "Team Members", value: "16+" },
    ],
    projects: [
      {
        name: "Nashville Automotive Assembly",
        type: "Industrial Piping",
        location: "Nashville, TN",
        year: "2024",
        description: "Complete process piping installation for automotive paint shop expansion including paint circulation and solvent recovery systems.",
        image: "/images/project-3.jpg",
      },
      {
        name: "Memphis Logistics Center",
        type: "Fire Protection",
        location: "Memphis, TN",
        year: "2023",
        description: "Fire suppression systems for major logistics hub near Memphis International Airport, including specialized aircraft cargo areas.",
        image: "/images/project-1.jpg",
      },
    ],
  },
  texas: {
    state: "Texas",
    description: "Our Houston office provides specialized services to the petrochemical and energy sectors along the Gulf Coast.",
    stats: [
      { label: "Projects Completed", value: "60+" },
      { label: "Years Active", value: "9" },
      { label: "Major Clients", value: "25+" },
      { label: "Team Members", value: "30+" },
    ],
    projects: [
      {
        name: "Houston Petrochemical Complex",
        type: "High-Pressure Vessels",
        location: "Houston, TX",
        year: "2024",
        description: "Pressure vessel installation and process piping for petrochemical facility expansion, including ASME code welding and testing.",
        image: "/images/project-2.jpg",
      },
      {
        name: "Dallas Semiconductor Fab",
        type: "HVAC System",
        location: "Dallas, TX",
        year: "2023",
        description: "Ultra-clean HVAC systems for semiconductor manufacturing cleanroom, meeting ISO Class 1-4 specifications.",
        image: "/images/project-3.jpg",
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(stateData).map((state) => ({
    state,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const data = stateData[state]
  if (!data) return {}
  
  return {
    title: `${data.state} Projects | Wellins Inc.`,
    description: data.description,
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const data = stateData[state]
  
  if (!data) {
    notFound()
  }
  
  return (
    <ProjectDetail
      state={data.state}
      description={data.description}
      stats={data.stats}
      projects={data.projects}
    />
  )
}
