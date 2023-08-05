#!/usr/bin/env bash

function Compile() {
  # go tool dist list
  export GOARCH=amd64
  export GOOS=darwin
  cd /Users/xulei/jungle/githubproject/my/password-manager/packages/server/backend && go build -ldflags="-s -w" -o ./backend ./backend.go
}

Compile
