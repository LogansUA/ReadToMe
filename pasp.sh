#!/bin/bash

urlForParse=$1
selectorContent=$2

content=$(phantomjs parser.js $urlForParse $selectorContent)
echo "$content" | festival --tts --language russian
