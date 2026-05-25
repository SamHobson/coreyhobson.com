---
title: "M1 Assistant"
description: "Personal AI assistant running locally on an M1 Max, powered by Hermes Agent and local LLM inference."
date: 2025-01-10
tags: ["ai", "llm", "local-ml", "automation", "personal-tools"]
draft: false
repo: "https://github.com/SamHobson/hermes-config"
status: "active"
---

A personal AI assistant that runs entirely on an M1 Max MacBook Pro. Built around Hermes Agent with local model inference via LM Studio, it handles daily workflows — workspace briefings, session logging, kanban task orchestration, code review delegation, and personal project management — without sending data to cloud APIs for routine tasks.

## Stack

- **Orchestration:** Hermes Agent with multi-profile routing
- **Local inference:** LM Studio running Qwen3-30B-A3B (4-bit quantized)
- **Knowledge base:** Obsidian vault (CoreyWorkspace) with git-backed sync
- **Task orchestration:** Hermes Kanban with multi-agent dispatch
- **Coding delegation:** Claude Code CLI for complex implementation work
- **Hardware:** Apple M1 Max, 64GB unified memory

## Architecture

The assistant routes tasks by complexity. Mechanical work — classification, summarization, simple text transforms, journal extraction — runs on the local model at zero cost. Moderate work defaults to cheap API models via OpenRouter. Complex reasoning, multi-file refactors, and planning sessions escalate to Claude Opus.

The CoreyWorkspace Obsidian vault serves as persistent memory: session logs, decisions, datasets, and canon. The assistant reads and writes to it directly. Two Macs stay in sync via git.

## Key workflows

- **Daily brief:** scans active workstreams, meetings, and decisions; generates a morning briefing in the journal
- **Session logging:** appends third-person prose logs after each work session
- **Kanban dispatch:** decomposes large tasks into specialist worker agents with dependency chains
- **Code review:** delegates PR review to Claude Code with quality gates
- **Personal projects:** manages builds and deployments for UXRStudy and coreyhobson.com
