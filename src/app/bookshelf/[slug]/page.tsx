import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getMDXComponent } from "next-contentlayer/hooks";
import { AnimatePage } from "@/components/atoms/AnimatePage";
import Header from "@/components/Header";
import {
  getAllBookshelfItems,
  getBookshelfItemBySlug,
} from "@/lib/bookshelf-utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const item = getBookshelfItemBySlug(params.slug);

  if (!item) {
    return {
      title: "Item Not Found",
    };
  }

  return {
    title: item.title,
    description: `${item.title} - ${item.category} ${item.medium}`,
  };
}

export default function BookshelfItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getBookshelfItemBySlug(params.slug);

  if (!item) {
    notFound();
  }

  const MDXContent = getMDXComponent(item.body.code);

  return (
    <AnimatePage>
      <Header />
      <div className="space-y-8">
        {/* Breadcrumb */}
        <div className="text-sm text-text-muted">
          <Link
            href="/bookshelf"
            className="hover:text-text-secondary transition-colors"
          >
            ← Back to Bookshelf
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <span className="px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20">
              {item.medium}
            </span>
            <span>{item.category}</span>
          </div>

          <h1 className="text-4xl font-bold text-text-primary">{item.title}</h1>

          {item.link && (
            <div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                Open Link
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-surface border border-border rounded-full text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="prose prose-headings:text-text text-left text-[#D4D4D4] prose-a:text-neutral-50 prose-a:no-underline prose-strong:text-[#D4D4D4] prose-code:text-white/80 prose-blockquote:text-[#D4D4D4] max-w-none">
          <MDXContent />
        </div>
      </div>
    </AnimatePage>
  );
}

export function generateStaticParams() {
  const allItems = getAllBookshelfItems();
  return allItems.map((item) => ({
    slug: item.slug,
  }));
}
