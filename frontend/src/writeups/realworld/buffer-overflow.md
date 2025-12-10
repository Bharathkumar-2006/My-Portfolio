---
title: "Getting Started with Buffer Overflows"
date: "2025-10-24"
description: "A beginner-friendly guide to understanding and exploiting simple stack-based buffer overflows."
category: "realworld"
tags: ["binary-exploitation", "linux", "c"]
---

# Introduction

Buffer overflows are one of the most classic vulnerabilities in binary exploitation. They occur when a program writes more data to a fixed-length buffer than it can handle.

## The Concept

Imagine a glass of water. If you pour more water than the glass can hold, it spills over. In computer memory, this "spill" can overwrite adjacent memory, including vital control structures like the return address.

### Vulnerable Code Example

```c
#include <stdio.h>
#include <string.h>

void vulnerable_function(char *str) {
    char buffer[64];
    strcpy(buffer, str); // No bounds checking!
}

int main(int argc, char **argv) {
    vulnerable_function(argv[1]);
    return 0;
}
```

## Exploitation Steps

1. **Fuzzing**: Determine the offset to the EIP/RIP.
2. **Control EIP**: Verify you can overwrite the instruction pointer.
3. **Shellcode**: Generate shellcode (e.g., using `msfvenom`).
4. **Injection**: Place shellcode in memory and point EIP to it (often using a NOP sled).

> [!WARNING]
> Always practice on isolated systems. Never attempt to exploit systems you do not own or have permission to test.

## Conclusion

Understanding memory management is key to mastering binary exploitation.
