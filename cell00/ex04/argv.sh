#!/bin/sh

if [ -z "$1" ]; then
  echo "No arguments supplied"
else
  count=0
  for i in "$@"; do
    if [ -n "$i" ] && [ "$count" -lt 3 ]; then
      echo "$i"
      count=$((count + 1))
    fi
  done
fi
