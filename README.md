# gorkem.codes

Personal website and portfolio of Görkem Özyılmaz, featuring a blog, projects showcase, and more.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 📚 Markdown-based blog with frontmatter
- 🔍 Full-text search functionality
- 🌓 Dark/Light theme switching
- 🎯 SEO optimized
- 📱 Fully responsive design
- ⚡️ Fast page loads with static generation
- 🔤 [Geist](https://vercel.com/font) font optimization

## Project Structure

```
gorkem.codes/
├── src/
│   ├── app/             # Next.js app router pages
│   ├── components/      # React components
│   ├── lib/            # Utility functions
│   ├── styles/         # Global styles
│   └── types/          # TypeScript types
├── content/
│   ├── blog/           # Markdown blog posts
│   └── projects.md     # Projects data
├── public/             # Static assets
└── [config files]      # Various configuration files
```

## Content Management

### Blog Posts
Add new blog posts by creating markdown files in `content/blog/` with the following frontmatter:

```markdown
---
title: "Post Title"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
excerpt: "Brief description"
featured: true|false
series: "Optional Series Name"
---
```

### Projects
Edit `content/projects.md` to manage the projects showcase.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deployment

The site is deployed on Vercel. Push to main branch to trigger automatic deployment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
