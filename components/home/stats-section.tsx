const stats = [
  { value: "2016", label: "Founded", prefix: "" },
  { value: "12", label: "States Licensed", prefix: "" },
  { value: "4.3", label: "Acres (Buford Facility)", prefix: "" },
  { value: "150", label: "Major Installations", prefix: "+" },
]

export function StatsSection() {
  return (
    <section className="bg-[#f8f9fa] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-24">
        <div className="grid grid-cols-2 gap-y-16 gap-x-8 md:grid-cols-4 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              {/* Vertical Accent Line */}
              <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-blue-400/20 group-hover:bg-blue-400 transition-colors" />
              
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400/60 mb-2">
                  0{index + 1}
                </span>
                <div className="flex items-baseline text-5xl font-bold tracking-tighter text-[#001A3D] lg:text-6xl">
                  {stat.value}
                  <span>{stat.prefix}</span>
                </div>
                <div className="mt-4 flex flex-col gap-1">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#001A3D]/80">
                    {stat.label}
                  </p>
              
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
