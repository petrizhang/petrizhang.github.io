#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
dist_dir="$project_dir/dist"

rm -rf "$dist_dir"
mkdir -p "$dist_dir/client" "$dist_dir/server"

bundle exec jekyll build --destination "$dist_dir/client"
cp "$project_dir/worker/index.js" "$dist_dir/server/index.js"
