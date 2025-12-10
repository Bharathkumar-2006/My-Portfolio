# How to Add New Writeups

Your portfolio includes a dynamic blog system that reads Markdown files from the `frontend/src/writeups` directory.

## 1. Create a Markdown File

Navigate to `frontend/src/writeups/` and choose the appropriate category folder:
- `thm/` (TryHackMe)
- `htb/` (HackTheBox)
- `realworld/` (Real World Findings)
- `others/` (Miscellaneous)

Create a new file, e.g., `my-new-writeup.md`.

## 2. Add Frontmatter

At the very top of your file, add the metadata (Frontmatter) between three dashes:

```yaml
---
title: "My New Writeup Title"
date: "2023-12-10"
description: "A brief summary of what this writeup is about."
tags: ["web", "xss", "bug-bounty"]
---
```

**Note**: The system automatically assigns the category based on the folder name!

## 3. Write Your Content

Write your content in standard Markdown.

### Code Blocks
Use triple backticks for code:
\`\`\`python
print("Hello World")
\`\`\`

### Images
To add images:
1. Place your image in `frontend/public/images/`.
2. Reference it in markdown like this: `![Alt Text](/images/my-image.png)`.

## 4. Publish
Just save the file! If the dev server is running, it will update automatically. If deployed, rebuild the project (`npm run build`).
