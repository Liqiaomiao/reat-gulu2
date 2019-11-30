#!/usr/bin/env bash

yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m 'update pages'
git push
git checkout -