#!/bin/bash

# Source and destination folders
SOURCE_FOLDER="src/components"
DESTINATION_FOLDER="lib"

# Components to compile
FILES_TO_COMPILE=(
  "Link.jsx"
  "Route.jsx"
  "Router.jsx"
)

# Create destiantion folder if not exists
mkdir -p "$DESTINATION_FOLDER"

# Compile each file and move it to lib folder
for FILE in "${FILES_TO_COMPILE[@]}"; do
  swc "$SOURCE_FOLDER/$FILE" -d "$DESTINATION_FOLDER"
done

echo "Done."
echo
