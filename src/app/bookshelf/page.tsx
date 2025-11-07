"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePage } from "@/components/atoms/AnimatePage";
import Header from "@/components/Header";
import { getAllBookshelfItems } from "@/lib/bookshelf-utils";

export default function BookshelfPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Get all bookshelf items from all collections
  const allBookshelfItems = getAllBookshelfItems();

  const filteredItems = allBookshelfItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <AnimatePage>
      <Header />
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-text-primary">Bookshelf</h1>
          <p className="text-lg text-text-secondary">
            Stuffed by other&#39;s I found interesting.
          </p>
        </div>

        {/* Search */}
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search by title, author, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
          />
        </div>

        {/* Full width table container - break out of all parent constraints */}
        <div className="relative w-screen -ml-[50vw] left-[50%]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-full">
              <thead>
                <tr className="border-b border-border bg-surface/30">
                  <th className="text-left py-4 px-4 sm:px-6 lg:px-8 xl:px-12 font-semibold text-text-primary">
                    Title
                  </th>
                  <th className="text-left py-4 px-4 sm:px-6 lg:px-8 xl:px-12 font-semibold text-text-primary">
                    Category
                  </th>
                  <th className="text-left py-4 px-4 sm:px-6 lg:px-8 xl:px-12 font-semibold text-text-primary">
                    Medium
                  </th>
                  <th className="text-left py-4 px-4 sm:px-6 lg:px-8 xl:px-12 font-semibold text-text-primary">
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b border-border hover:bg-surface/50 transition-colors ${
                      index % 2 === 0 ? "bg-bg" : "bg-surface/20"
                    }`}
                  >
                    <td className="py-4 px-4 sm:px-6 lg:px-8 xl:px-12 border-r border-border/30">
                      <div className="space-y-1">
                        <Link
                          href={`/bookshelf/${item.slug}`}
                          className="text-text-primary hover:text-accent transition-colors font-medium hover:underline"
                        >
                          {item.title}
                        </Link>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8 xl:px-12 text-text-secondary border-r border-border/30">
                      {item.category}
                    </td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8 xl:px-12 text-text-secondary border-r border-border/30">
                      {item.medium}
                    </td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8 xl:px-12">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-accent/10 text-accent rounded border border-accent/20"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 3 && (
                          <span className="text-xs text-text-muted">
                            +{item.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            <p className="text-lg">
              {searchTerm
                ? "No items match your search."
                : "The bookshelf is currently empty."}
            </p>
            {searchTerm && (
              <p className="text-sm mt-2">Try adjusting your search terms.</p>
            )}
          </div>
        )}
      </div>
    </AnimatePage>
  );
}
