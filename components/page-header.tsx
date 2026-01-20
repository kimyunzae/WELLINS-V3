interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-primary pt-32 pb-20 text-primary-foreground lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-4xl font-light tracking-tight lg:text-5xl xl:text-6xl text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70 lg:text-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
