---
title: "Getting Started with Github Pages"
date: "2024-12-23"
tags: ["github", "gh-pages", "webdev"]
excerpt: "Learn how to deploy static website free with GitHub Pages."
featured: true
series: "Hosting"
---


# Basic Git Commands for Beginners

1. **Check what files you've changed**
```bash
git status
```
This shows you which files are modified, added, or deleted in red and green colors.

2. **Stage your changes**
```bash
# To add all changes:
git add .

# To add specific files:
git add filename.tsx
```
This prepares your changes to be committed. Think of it like putting items in a box before shipping.

3. **Commit your changes**
```bash
git commit -m "Your message here"
```
For example:
```bash
git commit -m "Add contact page and fix config files"
```
The message should briefly describe what changes you made.

4. **Push your changes to GitHub**
```bash
git push origin main
```
This uploads your changes to GitHub. If this is your first push to a new repository:
```bash
git push -u origin main
```

# Common Scenarios

## If you get an error about pull first:
```bash
# First, get the changes from GitHub
git pull origin main

# Then try pushing again
git push origin main
```

## If you want to undo changes:
```bash
# Undo changes in a specific file
git checkout filename.tsx

# Undo all changes
git checkout .
```

## If you made a mistake in your commit message:
```bash
# Change the last commit message
git commit --amend -m "New message"
```

# Deployment Steps

1. **For Vercel:**
    - Go to [vercel.com](https://vercel.com)
    - Sign in with your GitHub account
    - Click "Import Project"
    - Select your repository
    - Click Deploy

2. **For GitHub Pages:**
    - Go to your repository on GitHub
    - Click Settings
    - Scroll to "Pages" section
    - Select your branch (usually main)
    - Click Save

# Common Terms
- **Repository** (or "repo"): Your project folder that Git tracks
- **Commit**: A snapshot of your changes
- **Push**: Uploading your changes to GitHub
- **Pull**: Downloading changes from GitHub
- **Branch**: A separate version of your code (main is the default)

# Tips
- Always write clear commit messages
- Commit often, but make sure each commit makes sense on its own
- Pull before you start working if others are working on the same project
- Check `git status` frequently to understand what's changed
- If you're ever unsure, ask for help! The Git community is friendly

Need help with any specific step or got an error message? Just let me know!