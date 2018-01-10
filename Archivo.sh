#!/bin/sh

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$BRANCH" != "master" ]
then
    echo "wii"
fi

