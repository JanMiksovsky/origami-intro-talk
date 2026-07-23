#!/Users/jan/Source/Origami/origami-intro-talk/.venv/bin/python3

import sys
from collections.abc import Mapping
from pathlib import Path

import markdown
from folder_map import FolderMap


def html_map(markdownMap: Mapping):
    """
    Given a Mapping of markdown documents, return a new Mapping of the
    corresponding HTML documents.
    """
    class HtmlMap(Mapping):
        def __getitem__(self, html_key):
            return markdown.markdown(markdownMap[Path(html_key).with_suffix(".md")])

        def __iter__(self):
            for md_key in markdownMap:
                yield f"{md_key[:-3]}.html"

        def __len__(self):
            return len(markdownMap)

    return HtmlMap()


map = html_map(FolderMap("greetings"))
for key in map:
    print(f"{key}: {map[key]}")
