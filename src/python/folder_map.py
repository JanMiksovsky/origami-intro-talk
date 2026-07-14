#!/usr/bin/env python3

from collections.abc import Mapping
from pathlib import Path


class FolderMap(Mapping):
    def __init__(self, relativePath):
        self.folder = Path(relativePath).resolve()

    def __getitem__(self, key):
        return (self.folder / key).read_text()

    def __iter__(self):
        return (p.name for p in sorted(self.folder.iterdir()))

    def __len__(self):
        return len(list(self.__iter__()))


if __name__ == "__main__":
    m = FolderMap("greetings")
    for key in m:
        print(f"{key}: {m[key]}")
