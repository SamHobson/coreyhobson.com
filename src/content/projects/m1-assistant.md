---
title: "Personal AI Workflow"
description: "Always-on AI assistant system running on an M1 Max. Routes tasks by complexity across local and cloud models, manages projects through Kanban dispatch, and keeps a persistent knowledge graph — all without sending routine work to cloud APIs."
date: 2025-01-10
tags: ["ai", "llm", "local-ml", "automation", "personal-tools"]
draft: false
repo: "https://github.com/SamHobson/hermes-config"
status: "active"
image: "/images/ai-workflow.png"
---

## What it does

This is the engine behind how I work. A personal AI workflow that runs on an M1 Max MacBook Pro, handling daily tasks — workspace briefings, session logging, task orchestration, code review delegation, project management — without pushing data to cloud APIs for routine work. It's the difference between "an AI helps me sometimes" and "the AI knows what I'm working on."

The system replaced manual Claude Code CLI sessions with an agent that persists state across conversations. Before this, every AI interaction started from zero. Now the assistant reads my workspace, understands what's active, and picks up where the last session left off.

## Architecture

The routing logic is the core idea. Not every task needs Claude Opus. Most don't.

```
User request → Classification → Route
                ├── Mechanical   → Local Qwen3-30B (free, zero latency)
                ├── Moderate     → OpenRouter cheap API
                └── Complex      → Claude Opus (reserved for what matters)
```

**Local tier:** Qwen3-30B-A3B running 4-bit quantized through LM Studio at `localhost:1234`. Handles classification, summarization, simple text transforms, basic scripting. Zero API cost. Zero latency from network round trips.

**API tier:** OpenRouter with DeepSeek and Sonnet/Haiku as fallbacks. Default for most real work — code generation, content writing, analysis that needs more than 4-bit reasoning.

**Premium tier:** Claude Opus for hard reasoning, multi-file refactors, and planning sessions where quality matters more than speed or cost.

The knowledge backbone is an Obsidian vault (CoreyWorkspace) with git-backed sync across two Macs. Session logs, decisions, datasets, and canon are all plain markdown files that the AI reads and writes directly. No vector database. No black-box embedding store. Just files and git.

## Key workflows

**Daily brief.** Every morning the system scans active workstreams, meeting notes, and the kanban board. Generates a compact briefing in the journal. Takes 30 seconds instead of 15 minutes of tab-switching.

**Session logging.** After a work session, the assistant writes a third-person prose log — what got decided, by whom, what's still open. These accumulate into a searchable history that spans months. No more "what did we decide about that?"

**Kanban dispatch.** Large tasks get decomposed into specialist worker agents with dependency chains. The dispatcher runs them in parallel where possible, serializes where there are gates. I review the outputs; the AI handles the routing.

**Code review delegation.** PRs go to Claude Code with quality gates and project-specific rules. The review comes back with inline comments and a summary. I read the summary and spot-check the diffs.

**Project management.** Builds, deployments, and configuration for personal projects (UXRStudy, coreyhobson.com) run through the assistant. I describe what I want; the system figures out how to ship it.

## What it achieves

- **Cost efficiency.** 80%+ of AI interactions run on the local model at zero marginal cost. Cloud API spend is reserved for tasks that genuinely need the reasoning depth.
- **Context persistence.** The AI doesn't reset every session. It knows what I worked on yesterday and what's due this week.
- **Two-Mac continuity.** Same assistant, same memory, synced via git. Work Mac and personal Mac stay in lockstep without manual synchronization.
- **Zero-vendor lock-in.** The knowledge graph is plain markdown. If the assistant disappears tomorrow, every decision, note, and dataset is still readable in Obsidian.

## Stack

- **Orchestration:** Hermes Agent with multi-profile routing
- **Local inference:** LM Studio running Qwen3-30B-A3B (4-bit quantized)
- **Knowledge base:** Obsidian vault (CoreyWorkspace) with git-backed sync
- **Task orchestration:** Hermes Kanban with multi-agent dispatch
- **Coding delegation:** Claude Code CLI for complex implementation work
- **Hardware:** Apple M1 Max, 64GB unified memory
