// contentlayer.config.js

import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: "one-dark-pro",
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    draft: {
      type: "boolean",
      description: "Sets whether the post is set to published or not",
      required: false,
    },
    publishedAt: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    lastModified: {
      type: "date",
      description: "The date of the post was last modified",
      required: false,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    tags: {
      type: "list",
      description: "The tags of the post",
      required: false,
      of: {
        type: "string",
      },
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^posts\//, ""),
    },
  },
}));

export const BookshelfItem = defineDocumentType(() => ({
  name: "BookshelfItem",
  filePathPattern: `bookshelf/*.mdx`,
  contentType: "mdx",
  fields: {
    id: {
      type: "string",
      description: "Unique identifier for the item",
      required: true,
    },
    title: {
      type: "string",
      description: "Title of the content",
      required: true,
    },
    link: {
      type: "string",
      description: "URL to the content",
      required: false,
    },
    category: {
      type: "string",
      description: "Category of the content",
      required: true,
    },
    medium: {
      type: "string",
      description: "Type of content medium",
      required: true,
    },
    tags: {
      type: "list",
      description: "Tags associated with the content",
      required: true,
      of: {
        type: "string",
      },
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^bookshelf\//, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "./contents",
  documentTypes: [Post, BookshelfItem],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
