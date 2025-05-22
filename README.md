# Blog of Nafi Asib

This blog is created with [Next.js 13 (App Router)](https://nextjs.org/docs/app), [Contentlayer](https://contentlayer.dev/docs/environments/nextjs-dcf8e39e) & TailwindCSS.

All the blog posts are written in MDX.

This project is hosted on an arm64 based VPS on `Oracle Cloud`. A [Github Action](https://github.com/features/actions) is triggered when code is pushed to `main`. This action builds and pushes a `Docker` image to `Dockerhub`. On the VPS, [Watchtower](https://github.com/containrrr/watchtower) checks and updates the local `Docker` images on a 30 minutes interval.

## Run the project locally

Clone the project:

```bash
git clone git@github.com:NafiAsib/blog.git
```

- Run the development server:

```bash
cd blog
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
