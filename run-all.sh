#!/usr/bin/env bash
set -e
(cd modules/emergency-reporting-engine && npm install && npm run dev) &
(cd modules/responder-command-center && npm install && npm run dev) &
(cd modules/campus-safety-intelligence && npm install && npm run dev) &
wait
