---
title: "Personal AI Workflow"
description: "Always-on AI assistant running on an M1 Max. Route tasks by complexity across local and cloud models — 80% on a free local model, premium reserved for what matters."
date: 2025-01-10
tags: ["ai", "llm", "local-ml", "automation", "personal-tools"]
draft: false
repo: "https://github.com/SamHobson/hermes-config"
status: "active"
image: "/images/ai-workflow.png"
---

## How it works

My work runs through a setup that combines plain text files, an AI assistant in the terminal, and a tagged structure that connects everything. The core idea is routing: not every task needs Claude Opus. Most don't.

The system classifies every request and sends it to the right tier:

**Local tier — free, zero latency.** Qwen3-30B-A3B running 4-bit quantized on LM Studio at `localhost:1234`. Handles classification, summarization, simple text transforms, and basic scripting. This is where 80%+ of all AI interactions land. Zero API cost. Zero network round trips.

**API tier — pay-per-use.** OpenRouter with DeepSeek and Claude Sonnet as fallbacks. The default for most real work: code generation, content writing, analysis that needs more than 4-bit reasoning. Roughly $5/month in practice.

**Premium tier — flat subscription.** Claude Opus for hard reasoning, multi-file refactors, and planning sessions where quality matters more than speed or cost. Reserved for the work that actually needs deep thought.

## The pieces

Everything I write lives in `.md` files. A `.md` file is plain text with light formatting: a hash mark for a heading, a dash for a bullet. No special software needed. My whole workspace is a folder of these files — meetings, decisions, project briefs, research, journal entries. I use them because they're durable. Small, fast, searchable, and not trapped inside an app.

The second piece is an AI assistant that runs in the terminal. I type a request in plain English. The AI reads the relevant files in my workspace, answers, and edits files when I ask. Plain text plus an AI that can read and edit it is the combination that makes the rest of this work.

## What it runs

**Daily brief.** Every morning the system scans active workstreams, meeting notes, and the kanban board. Generates a compact briefing in the journal. Takes 30 seconds instead of 15 minutes of tab-switching.

**Session logging.** After a work session, the assistant writes a third-person prose log — what got decided, by whom, what's still open. These accumulate into a searchable history that spans months. No more "what did we agree about that?"

**Kanban dispatch.** Large tasks get decomposed into specialist worker agents with dependency chains. The dispatcher runs them in parallel where possible, serializes where there are gates. I review the outputs; the AI handles the routing.

**Code review delegation.** PRs go to Claude Code with quality gates and project-specific rules. The review comes back with inline comments and a summary. I read the summary and spot-check the diffs.

**Project management.** Builds, deployments, and configuration for personal projects (UXRStudy, coreyhobson.com) run through the assistant. I describe what I want; the system figures out how to ship it.

## Why this works

**Context persistence.** The AI doesn't reset every session. It knows what I worked on yesterday and what's due this week. Long-running work doesn't have to be re-explained every time.

**Two-Mac continuity.** Same assistant, same memory, synced via git every 5 minutes. Work Mac and personal Mac stay in lockstep without manual synchronization.

**Zero vendor lock-in.** The knowledge graph is plain markdown. If the assistant disappears tomorrow, every decision, note, and dataset is still readable in Obsidian. No vector database. No black-box embedding store. Just files and git.

**Cost efficiency.** 80%+ of AI interactions run on the local model at zero marginal cost. Cloud API spend is reserved for tasks that genuinely need the reasoning depth. A flat Claude subscription covers the rest.

## Stack

- **Orchestration:** Hermes Agent with multi-profile routing
- **Local inference:** LM Studio running Qwen3-30B-A3B (4-bit quantized)
- **Knowledge base:** Obsidian vault (CoreyWorkspace) with git-backed sync
- **Task orchestration:** Hermes Kanban with multi-agent dispatch
- **Coding delegation:** Claude Code CLI for complex implementation work
- **Hardware:** Apple M1 Max, 64GB unified memory
