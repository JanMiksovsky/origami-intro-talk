#!/Users/jan/Source/Origami/origami-intro-talk/.venv/bin/python3

import sys
from collections.abc import Mapping
from pathlib import Path

import markdown
from folder_map import FolderMap

md_map = FolderMap("greetings")

html_map = {Path(md_key).with_suffix(".html"): markdown.markdown(
    md_value) for md_key, md_value in md_map.items()}

for key in html_map:
    print(f"{key}: {html_map[key]}")
