import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { getNewsBySlug, newsItems } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) return {};

  return {
    title: `${item.title} | Wellins Inc.`,
    description: item.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="PR Center"
        title={item.title}
        description={item.excerpt}
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>{item.date}</span>
              <span className="border border-border px-2 py-1 text-xs uppercase tracking-wider">
                {item.category}
              </span>
            </div>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              {item.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/pr-center/news"
                className="text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
