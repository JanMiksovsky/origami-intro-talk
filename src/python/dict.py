#!/usr/bin/env python3

greetings = {
    "Alice.md": "Hello, **Alice**!",
    "Bob.md": "Hello, **Bob**!",
    "Carol.md": "Hello, **Carol**!",
}

for key in greetings:
    print(f"{key}: {greetings[key]}")
