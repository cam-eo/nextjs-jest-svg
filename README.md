This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I set this up to figure out how to stop Jest tests from failing when working with svgs using `@svgr/webpack`. The NextJS template with `create-next-app` uses `next/image` but for many cases using an SVG as a React Component is more convinient but because of the custom render method, it breaks Jest Unit tests for components that use svgs. So we needed a solution and after much digging around in the github issues I have this POC as a solution to hopefully elivate the problem.

Unfortunately this issue seems to change whenever NextJS updates their version, then new workarounds are needed.

The icons used in this POC are downloaded from [eva icons](https://akveo.github.io/eva-icons/#/). Unfortunately their method of using svgs is not convinient when working with React/NextJs so this is the solution that works for now to take advantage of nextjs 13.

## Getting Started

First, run the development server:

```bash
pnpm run dev
```

Next, run the jest tests:

```bash
pnpm run test
```
