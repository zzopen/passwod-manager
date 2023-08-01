#!/usr/bin/env bash

function BuildApi() {
    cd /Users/xulei/jungle/githubproject/my/z-note/packages/server/backend && goctl api go -api ./api/backend.api -dir .
}

BuildApi
