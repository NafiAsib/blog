# Blog of Nafi Asib

This blog is created with [Next.js 13 (App Router)](https://nextjs.org/docs/app), [Contentlyar](https://contentlayer.dev/docs/environments/nextjs-dcf8e39e), TailwindCSS.

All the blog posts are written in MDX.

This project is hosted on an arm64 based VPS on `Oracle Cloud`. A github [Github Action](https://github.com/features/actions) is triggered when code is pushed to `main`. This action builds and uploads a `docker` image to `Dockerhub`. On the VPS [Watchtower](https://github.com/containrrr/watchtower) checks and updates the local `docker` images on a 30m interval.

## Run the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

