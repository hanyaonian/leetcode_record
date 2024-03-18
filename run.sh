function find_leetcode_by_id() {
  for file in "${2}"/*; do
    if [ -d "$file" ]; then
      find_leetcode_by_id "${1}" "$file"
    elif [ -f "$file" ]; then
      js_name="${1}.js"
      ts_name="${1}.ts"
      basename=$(basename "$file")
      if [[ $js_name = $basename ]]; then
        node $file
      fi
      if [[ $ts_name = $basename ]]; then
        npx tsx $file
      fi
    fi
  done
}

# if [ -ne $1 ]
if [ $# -ne 1 ]; then
  echo "Missing arguments. Usage: $0 <leetcode id>"
  exit 1
fi

if !(command -v node >/dev/null); then
  echo "Missing node.js"
  exit 1
fi

find_leetcode_by_id "${1}" "./code" 