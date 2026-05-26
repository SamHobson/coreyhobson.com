---
title: "GitNews"
description: "macOS menu bar app for GitHub notifications. Built because the notification system wasn't designed for designers reviewing PRs — or for teams moving at AI speed."
date: 2026-02-06
tags: ["macos", "typescript", "github", "dev-tools", "native"]
draft: false
repo: "https://github.com/SamHobson/GitNews"
status: "maintained"
---

## Why this exists

We went AI-first at work. Everyone writing code. Designers and developers working toward the product, not their job titles. That meant I was suddenly in GitHub — and GitHub's notification system is shit.

When AI lets a team produce multiple PRs a day each, the firehose is real. A Slack message arrives: "review this PR." You open it. No screenshots. Just code. To actually evaluate it, you need to pull the branch locally. All of that context-switching just to figure out if your input is even needed.

I wanted a tool that would tell me when I was actually needed — and let me respond without leaving what I was doing.

## What it does

**Filters the firehose.** The app polls GitHub's notifications API and classifies everything into three buckets: mentions, reviews, and the rest. Only reviews, mentions, and assignments trigger a native macOS notification. Everything else is available in the dropdown when you want it, not when it arrives.

**Runs UX audits.** I built an automatic skill that runs heuristic evaluations on PRs. AI can't do all heuristics perfectly — some are better than others — but it does enough for a first pass. Developers get feedback. I don't context-switch. The review pipeline keeps moving.

**Became a news tracker.** Over time, the app evolved beyond notifications. I added quick-launch tools: terminals, routes, lazy-docker, pages, tabs. It now sits everywhere — desktop, menu bar, browser — showing what's coming in and going out at a glance. More dashboard than alert system now.

## What I learned

I am not a developer. I'm a UXer. I had never made a desktop application before this. The stack is TypeScript and Electron. There are still bugs I need to fix — it pulls all notifications when it should let me restrict what I care about. User settings need work.

But here's what happened: other people at work saw it and built their own versions. Everyone found what worked for them. It didn't scale as a product — it scaled as an idea. Sometimes a tool's job is to show people what's possible.

I'm planning a second release once I clean up the notification filtering and add proper user settings.

## Stack

TypeScript, Electron, GitHub REST API, native macOS menu bar integration.
