---
title: "GitNews"
description: "macOS menu bar app for GitHub notifications. Surface what matters — mentions, review requests, assignments — through native alerts. No browser tab required to know someone's waiting."
date: 2026-02-06
tags: ["macos", "typescript", "github", "dev-tools", "native"]
draft: false
repo: "https://github.com/SamHobson/GitNews"
status: "maintained"
---

## What it is

GitNews lives in your macOS menu bar and watches your GitHub notifications. It filters out the noise — stars, follows, CI status — and only interrupts you for the three things that actually matter: someone mentioned you, someone requested your review, or someone assigned you an issue.

The problem it solves is real: GitHub's notification inbox is a firehose. Repository watches, release notifications, and CI pings bury the signal. Most developers either check GitHub obsessively (context-switching tax) or ignore it entirely (missed reviews, delayed responses). GitNews splits the difference: it watches everything but only alerts on what needs action.

## Architecture

**Polling loop:** The app polls GitHub's notifications API at a configurable interval. Each poll returns all unread notifications. GitNews classifies them into three buckets: mentions, reviews, and everything else.

**Smart filtering:** Only mentions, review requests, and assignments trigger a native macOS notification with sound. Everything else is available in the dropdown if you want it. The filter logic runs locally — no notification data leaves your machine.

**Native macOS integration:** Notifications use the system Notification Center with sound. The menu bar icon shows an unread count badge. Light/dark mode follows your system preference. Optional launch-at-login keeps it running without manual intervention.

**Quick actions:** From the notification or dropdown, you can open the item in your browser, reply directly from the app (posts via GitHub API), or mark as read (syncs back to GitHub). No tab switching for routine responses.

**Security:** Your GitHub personal access token is encrypted and stored locally. The token only needs `notifications` and `repo` scopes — read your inbox, post comments. No broader permissions.

## Design decisions

**Menu bar, not dock.** A dock app with a window is overkill for a notification monitor. The menu bar is where system information lives — WiFi, battery, clock. Notifications belong there too. One click to see what's pending, one click to act.

**Native over web wrapper.** Electron was the practical choice for cross-platform potential, but the UI is deliberately macOS-native. No web-style dropdowns. No browser devtools aesthetic. It feels like part of the operating system, not a website in a frame.

**Opinionated defaults.** The app ships with sensible defaults: 5-minute poll interval, only review/mention/assign alerts, sound on. Power users can tweak, but most people should never need to open settings.

## What it achieves

- Notification response time cut from hours to minutes for time-sensitive reviews
- Reduced context-switching — no need to check GitHub proactively
- Zero configuration required beyond pasting a token
- Lightweight: 40MB memory footprint, negligible CPU

## Stack

- **Language:** TypeScript
- **Platform:** macOS (native menu bar, Electron)
- **GitHub API:** REST via personal access token
- **Security:** Token encrypted and stored locally, minimal required scopes
- **Appearance:** System light/dark mode, native menu bar integration
