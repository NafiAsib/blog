import React from "react";
import Header from "@/components/Header";

const talks = [
  {
    id: 1,
    title: 'OSCON 2010: Rob Pike, "Public Static Void"',
    speaker: "Rob Pike",
    speakerUrl: "https://en.wikipedia.org/wiki/Rob_Pike",
    description:
      "Fantastic talk on programming language complexity and why he felt the need to create Go.",
    url: "https://www.youtube.com/watch?v=5kj5ApnhPAE",
    quotes: ["Patterns are a demonstration of weakness in a language - Norvig"],
    tags: ["go", "programming languages"],
  },
];

export default function TalksPage() {
  return (
    <div className="text-text flex flex-col gap-y-2">
      <Header />
      <span>
        I watch a lot of talks. Here are some of my favorites that I&apos;ve
        felt were particularly impactful.
      </span>
      <span>
        I tried to include a short description of what the talk is about.
      </span>
      <div className="mt-5">
        {talks.map((talk) => (
          <div key={talk.id} className="flex gap-x-2">
            <span className="text-xl font-bold">{talk.id}.</span>
            <div className="flex flex-col gap-y-2">
              <a href={talk.url} className="text-xl font-bold">
                {talk.title}
              </a>
              <a className="text-lg" href={talk.speakerUrl}>
                by {talk.speaker}
              </a>
              <span>{talk.description}</span>
              {talk.quotes && talk.quotes.length > 0 && (
                <div className="flex flex-col gap-y-2">
                  <span className="font-bold">Quotes: </span>
                  {talk.quotes.map((quote, i) => (
                    <span key={i} className="text-justify">
                      {quote}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
