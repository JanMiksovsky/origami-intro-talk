#!/usr/bin/env python3

greetings = {
    "Alice.md": "Hello, **Alice**!",
    "Bob.md": "Hello, **Bob**!",
    "Carol.md": "Hello, **Carol**!",
}

for key, value in greetings.items():
    print(f"{key}: {value}")
