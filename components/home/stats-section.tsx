const stats = [
  { value: "2016", label: "Founded" },
  { value: "12", label: "States Licensed" },
  { value: "4.3", label: "Acres", subLabel: "Buford Facility" },
  { value: "150+", label: "Major Installations" },
]

export function StatsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <p className="text-4xl font-light tracking-tight text-foreground lg:text-5xl xl:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
              {stat.subLabel && (
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                  {stat.subLabel}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
