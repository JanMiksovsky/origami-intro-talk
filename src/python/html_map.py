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
            markdown_key = f"{html_key[:-5]}.md"
            markdown_value = markdownMap[markdown_key]
            html_value = markdown.markdown(markdown_value)
            return html_value

        def __iter__(self):
            for markdown_key in markdownMap:
                html_key = f"{markdown_key[:-3]}.html"
                yield html_key

        def __len__(self):
            return len(markdownMap)

    return HtmlMap()


m = html_map(FolderMap("greetings"))
for key in m:
    print(f"{key}: {m[key]}")
