#!/bin/bash

# Function to locate the project root directory by searching for package.json recursively
findProjectRoot() {
  local startDir="${1:-$(pwd)}"
  while [[ "$startDir" != "/" ]]; do
    if [[ -f "$startDir/package.json" ]]; then
      echo "$startDir"
      return
    fi
    startDir=$(dirname "$startDir")
  done
}

# Function to check Node.js version
checkNodeVersion() {
  local version=$(node --version | cut -d. -f1 | cut -c2-)
  if [[ $version -lt 18 ]]; then
    echo "This script requires Node.js version 18 or greater."
    exit 1
  fi
}

# Function to check if required environment variables are set
envVarsSet() {
  local missingVars=()
  for var in "$@"; do
    if [[ -z "${!var}" ]]; then
      missingVars+=("$var")
    fi
  done

  if [[ ${#missingVars[@]} -ne 0 ]]; then
    echo "Error: environment variable(s) ${missingVars[*]} must be set."
    exit 1
  fi
}

# Function to execute a command and wait for it to finish
execCommand() {
  local command="$1"
  shift
  local envVars=("$@")
  local envStr=""
  for var in "${envVars[@]}"; do
    envStr+="$var "
  done

  eval "$envStr $command"
  local status=$?
  if [ $status -ne 0 ]; then
    echo "Error executing command: $command"
    exit $status
  fi
}

# Function to delete specified directories and files
deleteSpecifiedItems() {
  for item in "$@"; do
    if [ -e "$item" ]; then
      rm -rf "$item"
      echo "${item} deleted."
    else
      echo "${item} not found."
    fi
  done
}

# Function to print the help message
printHelp() {
  echo "Usage: $0 [command]"
  echo "Available commands:"
  echo "  clean          Cleans up project by deleting generated files."
  echo "  antlr4         Processes ANTLR4 grammar files for TypeScript."
  echo "  help           Display this help message."
}

checkNodeVersion

PROD_ENV="NODE_ENV=production"

# Set PROJECT_CWD to env var or default to project root
PROJECT_CWD=${PROJECT_CWD:-$(findProjectRoot)}

export PROJECT_CWD

envVarsSet "PROJECT_CWD"

# Command line argument handling
case "$1" in
clean)
  deleteSpecifiedItems "node_modules" "dist" "yarn.lock"
  echo "clean completed successfully."
  ;;
antlr4)
  execCommand "java -jar $PROJECT_CWD/bin/antlr-4.13.1-complete.jar -Dlanguage=TypeScript -visitor -o ${PROJECT_CWD}/src/parser ${PROJECT_CWD}/src/Cypher.g4"
  execCommand "rm -f $PROJECT_CWD/src/parser/*.interp"
  execCommand "rm -f $PROJECT_CWD/src/parser/*.tokens"
  echo "antlr4 generation completed successfully."
  ;;
help)
  printHelp
  ;;
*)
  if [[ -z "$1" ]]; then
    printHelp
  else
    echo "Error: Unknown command '$1'"
    echo "Use '$0 help' to see the list of available commands."
    exit 1
  fi
  ;;
esac
