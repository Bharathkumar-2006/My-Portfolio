---
title: "My First Automated Post"
date: "2024-05-20"
category: "TryHackMe"
description: "This post was automatically loaded by simply dropping a markdown file into the folder."
tags: ["tutorial", "react", "automation"]
---

# Automatic Loading Works!

If you are reading this, the dynamic loading system is operational.

## How to add a new post?

1. Create a new `.md` file in the `src/posts` folder.
2. Add the following **Frontmatter** at the top:

\`\`\`yaml
---
title: "Your Post Title"
date: "YYYY-MM-DD"
category: "TryHackMe"  <-- Or: HackTheBox, Real World, Security
description: "Brief summary"
tags: ["tag1", "tag2"]
---
\`\`\`

3. Write your content below.

## Code Example

\`\`\`python
def hack_the_planet():
    print("Access Granted")
\`\`\`
