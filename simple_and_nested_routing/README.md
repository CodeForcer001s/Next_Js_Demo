This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Ignoring Files in Multiple Subdirectories

## Overview

This repository uses a common `.gitignore` configuration to ignore specific files and folders inside **all subdirectories** under the parent directory. This is useful if you are creating multiple subprojects (like `simple_and_nested_routing` or any other) and want to maintain consistent ignore rules across all of them.

## Purpose

The `.gitignore` file in this repository is set up to ensure that common files (such as `node_modules`, `.next`, `build`, log files, environment files, and others) are ignored **across all subdirectories** that you may add in the future.

### What Is Being Ignored?
1. **Node Modules & Yarn**: 
   - `node_modules/` and any Yarn-related files are ignored in every subdirectory.
2. **Build Directories**: 
   - Directories like `.next/`, `out/`, `build/`, and coverage folders are ignored in every subdirectory.
3. **Log Files**: 
   - Log files like `npm-debug.log`, `yarn-debug.log`, `yarn-error.log`, and `.pnpm-debug.log` are excluded.
4. **Vercel & Environment Files**:
   - `.vercel/` and any `.env*` files are ignored to avoid pushing sensitive data or unnecessary deployment configurations.
5. **Miscellaneous Files**:
   - Common system files like `.DS_Store` and private key files (`*.pem`) are ignored.

### How to Use
1. **Add Subdirectories**: 
   - Simply create a new folder inside the parent directory, and the `.gitignore` rules will apply automatically to that folder.
   - Example: Create a folder `my_project` inside the parent, and it will automatically have the same ignore rules.
   
2. **Customize for Specific Subdirectories**:
   - If you need to **customize** the `.gitignore` for specific subdirectories, you can create a new `.gitignore` in that subdirectory and modify it as needed.
   - The rules in that `.gitignore` file will only apply to that specific subdirectory.

### Example of Folder Structure:
<!-- Here is the most important piece of information...
() has put almost every single route into categories and we can thus work with it effectively  each one of them having their own layout as well as not found -->

`Huge Warning: Either use object-metadata or use dynamically generated metadata for one route nothing else`