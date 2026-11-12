#!/usr/bin/env python3
"""Build data/tribeverkauf/index.json from one JSON file per creature."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CREATURE_DIR = ROOT / "data" / "tribeverkauf" / "tiere"
INDEX_FILE = ROOT / "data" / "tribeverkauf" / "index.json"


def main() -> None:
    if not CREATURE_DIR.is_dir():
        raise SystemExit(f"Creature directory not found: {CREATURE_DIR}")

    creatures = {}
    for file_path in sorted(CREATURE_DIR.glob("*.json")):
        creature_id = file_path.stem.lower()
        try:
            data = json.loads(file_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as error:
            raise SystemExit(f"Invalid JSON in {file_path.name}: {error}")

        if not isinstance(data, dict):
            raise SystemExit(f"{file_path.name} must contain a JSON object.")
        if not isinstance(data.get("name"), str) or not data["name"].strip():
            raise SystemExit(f"{file_path.name} is missing a valid 'name'.")
        if "varianten" in data and not isinstance(data["varianten"], list):
            raise SystemExit(f"{file_path.name}: 'varianten' must be an array.")

        creatures[creature_id] = data

    INDEX_FILE.parent.mkdir(parents=True, exist_ok=True)
    INDEX_FILE.write_text(
        json.dumps(creatures, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Created {INDEX_FILE.relative_to(ROOT)} with {len(creatures)} creatures.")


if __name__ == "__main__":
    main()
