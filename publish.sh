#!/bin/bash
npm run build
cd dist
git init
git add *
git commit -am 'release to github pages'
git push -f git@github.com:Tiinusen/bingo.git master:gh-pages