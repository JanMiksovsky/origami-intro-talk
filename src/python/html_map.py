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
            # Convert .html extension to .md
            md_key = f"{html_key[:-5]}.md"
            # Get markdown and convert to HTML
            md_value = markdownMap[md_key]
            html_value = markdown.markdown(md_value)
            return html_value

        def __iter__(self):
            # Convert .md extensions to .html
            for md_key in markdownMap:
                html_key = f"{md_key[:-3]}.html"
                yield html_key

        def __len__(self):
            return len(markdownMap)

    return HtmlMap()


map = html_map(FolderMap("greetings"))
for key in map:
    print(f"{key}: {map[key]}")
