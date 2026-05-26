---
title: "GitNews"
description: "macOS menu bar app for GitHub notifications. Surface what matters — mentions, review requests, assignments — through native alerts."
date: 2026-02-06
tags: ["macos", "typescript", "github", "dev-tools", "native"]
draft: false
repo: "https://github.com/SamHobson/GitNews"
status: "maintained"
---

## Why this exists

GitHub's notification inbox is a firehose. Repository watches, release notifications, and CI pings bury the signal. Most developers either check GitHub obsessively (context-switching tax) or ignore it entirely (missed reviews, delayed responses).

GitNews splits the difference: it watches everything but only interrupts for what needs action. Someone mentioned you. Someone requested your review. Someone assigned you an issue. Everything else is available if you want it but silent if you don't.

## The pieces

**A menu bar icon with a badge.** The menu bar is where system information lives — WiFi, battery, clock. Notifications belong there too. The badge shows unread count. One click to see what's pending.

**A polling loop.** The app polls GitHub's notifications API at a configurable interval. Each poll returns all unread notifications. GitNews classifies them into three buckets: mentions, reviews, and everything else.

**Smart filtering.** Only mentions, review requests, and assignments trigger a native macOS notification with sound. The rest is available in the dropdown. The filter logic runs locally — no notification data leaves your machine.

**Quick actions.** From the notification or dropdown, you can open the item in your browser, reply via the GitHub API, or mark as read. No tab switching for routine responses.

## In practice

The app ships with sensible defaults: 5-minute poll interval, only review/mention/assign alerts, sound on. Most people never need to open settings. You paste a GitHub token once and it runs. At login, at startup, in the background.

The token only needs `notifications` and `repo` scopes — read your inbox, post comments. No broader permissions. It's encrypted and stored locally.

## Why this works

**Menu bar, not dock.** A dock app with a window is overkill for a notification monitor. The menu bar is where you glance. It's ambient, not demanding.

**Opinionated defaults.** The app makes choices for you: what to alert on, how often to poll, whether to play sound. Power users can tweak, but most people should never need to.

**Native, not web.** Electron was the practical choice for cross-platform potential, but the UI is deliberately macOS-native. No web-style dropdowns. No browser devtools aesthetic. It feels like part of the operating system.

## What it changes

Notification response time drops from hours to minutes for time-sensitive reviews. No proactive GitHub checking means fewer context switches. 40MB memory footprint, negligible CPU — you forget it's running until it tells you something you need to know.

## Stack

TypeScript, Electron, GitHub REST API, native macOS menu bar integration.
