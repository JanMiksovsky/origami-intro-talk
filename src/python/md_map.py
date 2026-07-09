#!/usr/bin/env python3

from collections.abc import Mapping


class GreetingsMap(Mapping):
    def __init__(self):
        self.domain = ["Alice.md", "Bob.md", "Carol.md"]

    def __getitem__(self, key):
        return f"Hello, **{key[:-3]}**!"

    def __iter__(self):
        return iter(self.domain)

    def __len__(self):
        return len(self.domain)


if __name__ == "__main__":
    m = GreetingsMap()
    for key in m:
        print(f"{key}: {m[key]}")
