---
title: "GitNews"
description: "macOS menu bar app for GitHub notifications. Mentions, review requests, assignments — native alerts, no browser tab."
date: 2026-02-06
tags: ["macos", "typescript", "github", "dev-tools", "native"]
draft: false
repo: "https://github.com/SamHobson/GitNews"
status: "maintained"
---

GitNews is a lightweight macOS menu bar application that monitors your GitHub notifications and surfaces what actually matters: @mentions, PR review requests, and issue assignments. It lives in the menu bar, not the dock, and uses native macOS notifications with sound.

## Stack

- **Language:** TypeScript
- **Platform:** macOS (native menu bar app, Electron)
- **GitHub API:** REST via personal access token
- **Security:** Token encrypted and stored locally
- **Appearance:** Light/dark mode, follows system preference

## Features

Smart filtering separates signal from noise. The app only alerts on mentions, review requests, and assignments. Everything else is there if you want it, but it doesn't interrupt. Quick replies and mark-as-read sync back to GitHub. Configurable polling interval, optional launch-at-login.

No browser tab required to know someone's waiting on your review.
