#!/bin/bash

# Check if the user provided an input name
if [ -z "$1" ]; then
  echo "Usage: $0 <input_name>"
  exit 1
fi

# Assign the input name to a variable
INPUT_NAME=$1


BASE_DIR="./src/modules"
cd $BASE_DIR

# Create the main folder
mkdir -p "./$INPUT_NAME"

# Create the required files within the folder
touch "./$INPUT_NAME/${INPUT_NAME}.data.ts"
touch "./$INPUT_NAME/${INPUT_NAME}.validator.ts"
touch "./$INPUT_NAME/${INPUT_NAME}.controller.ts"
touch "./$INPUT_NAME/${INPUT_NAME}.router.ts"

echo "Folder structure created successfully."
