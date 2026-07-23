#!/Users/jan/Source/Origami/origami-intro-talk/.venv/bin/python3

import sys
from collections.abc import Mapping
from pathlib import Path

import markdown
from folder_map import FolderMap


def transform(markdownMap: Mapping):
    """
    Given a Mapping of markdown, return a new Mapping of the corresponding HTML
    """
    class HtmlMap(Mapping):
        def __getitem__(self, html_key):
            return markdown.markdown(markdownMap[Path(html_key).with_suffix(".md")])

        def __iter__(self):
            for md_key in markdownMap:
                yield Path(md_key).with_suffix(".html")

        def __len__(self):
            return len(markdownMap)

    return HtmlMap()


html_map = transform(FolderMap("greetings"))
for key in html_map:
    print(f"{key}: {html_map[key]}")
