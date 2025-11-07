import Link from "next/link";
import { AnimatePage } from "@/components/atoms/AnimatePage";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <AnimatePage>
      <Header />
      <div className="text-center space-y-6 py-12">
        <h1 className="text-4xl font-bold text-text-primary">Item Not Found</h1>
        <p className="text-lg text-text-secondary">
          The bookshelf item you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="space-x-4">
          <Link
            href="/bookshelf"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            ← Back to Bookshelf
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-surface/50 transition-colors text-text-primary"
          >
            Go Home
          </Link>
        </div>
      </div>
    </AnimatePage>
  );
}
