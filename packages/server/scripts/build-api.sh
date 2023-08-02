#!/usr/bin/env bash

function BuildApi() {
    cd /Users/xulei/jungle/githubproject/my/password-manager/packages/server/backend && goctl api go -api ./api/backend.api -dir .
}

BuildApi
