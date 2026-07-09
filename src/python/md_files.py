#!/usr/bin/env python3

from pathlib import Path

folder = Path("greetings").resolve()
names = [entry.name for entry in sorted(folder.iterdir())]

for key in names:
    with open(folder / key, "r") as f:
        value = f.read()
        print(f"{key}: {value}")
