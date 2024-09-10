#!/bin/sh

if [ -z "$1" ]; then
    echo "No arguments supplied"
else
    for i in "$@"; do
        if [ -n "$i" ]; then
            new_folder="ex${i}"
            echo "Creating folder: $new_folder"
            mkdir "$new_folder"
        fi
    done
fi
