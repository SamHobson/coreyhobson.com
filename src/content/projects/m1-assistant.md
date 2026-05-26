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

<div class="not-prose my-8">
<svg width="100%" viewBox="0 0 720 140" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="45" width="70" height="50" rx="4" fill="#14181A" stroke="#2A2724" stroke-width="1"/>
  <text x="45" y="66" fill="#E6E4E0" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Request</text>
  <text x="45" y="83" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="10" text-anchor="middle">Plain English</text>
  <line x1="80" y1="70" x2="112" y2="70" stroke="#C2703E" stroke-width="1.5" marker-end="url(#arrow)"/>
  <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#C2703E"/></marker></defs>
  <rect x="115" y="40" width="90" height="60" rx="4" fill="#14181A" stroke="#C2703E" stroke-width="1"/>
  <text x="160" y="62" fill="#E6E4E0" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Classifier</text>
  <text x="160" y="80" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="10" text-anchor="middle">Qwen 4-bit</text>
  <text x="160" y="93" fill="#C2703E" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">localhost:1234</text>
  <line x1="205" y1="50" x2="248" y2="22" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="226" y="32" fill="#34d399" font-family="-apple-system, sans-serif" font-size="9">mechanical</text>
  <line x1="205" y1="70" x2="248" y2="70" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="226" y="65" fill="#fbbf24" font-family="-apple-system, sans-serif" font-size="9">routine</text>
  <line x1="205" y1="90" x2="248" y2="118" stroke="#a78bfa" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="226" y="115" fill="#a78bfa" font-family="-apple-system, sans-serif" font-size="9">complex</text>
  <rect x="252" y="5" width="130" height="40" rx="4" fill="#14181A" stroke="#34d399" stroke-width="1"/>
  <text x="317" y="22" fill="#34d399" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Local</text>
  <text x="317" y="37" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Qwen3-30B · $0</text>
  <rect x="252" y="52" width="130" height="40" rx="4" fill="#14181A" stroke="#fbbf24" stroke-width="1"/>
  <text x="317" y="69" fill="#fbbf24" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">API</text>
  <text x="317" y="84" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">OpenRouter · ~$5/mo</text>
  <rect x="252" y="100" width="130" height="40" rx="4" fill="#14181A" stroke="#a78bfa" stroke-width="1"/>
  <text x="317" y="117" fill="#a78bfa" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Premium</text>
  <text x="317" y="132" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Claude Opus · $20/mo</text>
  <rect x="420" y="30" width="140" height="80" rx="4" fill="none" stroke="#2A2724" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="490" y="52" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Knowledge Backbone</text>
  <text x="490" y="70" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Obsidian vault</text>
  <text x="490" y="86" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Git sync · 2 Macs</text>
  <text x="490" y="102" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Plain markdown</text>
  <rect x="590" y="30" width="120" height="80" rx="4" fill="none" stroke="#2A2724" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="650" y="50" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Daily brief</text>
  <text x="650" y="66" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Session log</text>
  <text x="650" y="82" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Kanban dispatch</text>
  <text x="650" y="98" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Code review</text>
</svg>
</div>

The system classifies every request and sends it to the right tier:

**Local tier — free, zero latency.** Qwen3-30B-A3B running 4-bit quantized on LM Studio. Handles classification, summarization, simple text transforms, and basic scripting. This is where 80%+ of all AI interactions land. Zero API cost. Zero network round trips.

**API tier — pay-per-use.** OpenRouter with DeepSeek and Claude Sonnet as fallbacks. The default for most real work: code generation, content writing, analysis that needs more than 4-bit reasoning. Roughly $5/month in practice.

**Premium tier — flat subscription.** Claude Opus for hard reasoning, multi-file refactors, and planning sessions where quality matters more than speed or cost. Reserved for the work that actually needs deep thought.

## The pieces

<div class="not-prose flex flex-col md:flex-row gap-8 my-10 items-center">
<div class="flex-1">

Everything I write lives in `.md` files. A `.md` file is plain text with light formatting: a hash mark for a heading, a dash for a bullet. No special software needed. My whole workspace is a folder of these files — meetings, decisions, project briefs, research, journal entries.

I use them because they're durable. Small, fast, searchable, and not trapped inside an app the way a Word document or a Notion page is.

</div>
<div class="shrink-0">
<svg width="100%" viewBox="0 0 160 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:160px">
  <rect x="15" y="10" width="105" height="140" rx="5" fill="#14181A" stroke="#2A2724" stroke-width="1"/>
  <path d="M95 10 L125 40 L95 40 Z" fill="#1a1f21" stroke="#2A2724" stroke-width="1"/>
  <line x1="95" y1="10" x2="95" y2="40" stroke="#2A2724" stroke-width="1"/>
  <line x1="95" y1="40" x2="125" y2="40" stroke="#2A2724" stroke-width="1"/>
  <text x="28" y="60" font-family="SF Mono, monospace" font-size="11" fill="#C2703E"># Meeting</text>
  <text x="28" y="78" font-family="SF Mono, monospace" font-size="11" fill="#8B8580">Discussed the</text>
  <text x="28" y="94" font-family="SF Mono, monospace" font-size="11" fill="#8B8580">new ingest</text>
  <text x="28" y="110" font-family="SF Mono, monospace" font-size="11" fill="#8B8580">pipeline.</text>
  <text x="28" y="132" font-family="SF Mono, monospace" font-size="11" fill="#C2703E">## Decisions</text>
  <text x="28" y="150" font-family="SF Mono, monospace" font-size="11" fill="#8B8580">- ship behind flag</text>
  <text x="80" y="167" font-family="-apple-system, sans-serif" font-size="11" fill="#8B8580" text-anchor="middle">notes.md</text>
</svg>
</div>
</div>

<div class="not-prose flex flex-col md:flex-row-reverse gap-8 my-10 items-center">
<div class="flex-1">

The second piece is an AI assistant that runs in the terminal. I type a request in plain English. The AI reads the relevant files in my workspace, answers, and edits files when I ask.

Plain text plus an AI that can read and edit it is the combination that makes the rest of this work.

</div>
<div class="shrink-0">
<svg width="100%" viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:180px">
  <rect x="5" y="10" width="170" height="110" rx="6" fill="#0D1112" stroke="#2A2724" stroke-width="1"/>
  <circle cx="16" cy="22" r="3" fill="#e8624a"/>
  <circle cx="25" cy="22" r="3" fill="#e8b94a"/>
  <circle cx="34" cy="22" r="3" fill="#6cae6c"/>
  <text x="16" y="50" font-family="SF Mono, monospace" font-size="11" fill="#34d399">&gt; summarize arno</text>
  <text x="16" y="68" font-family="SF Mono, monospace" font-size="11" fill="#34d399">  meeting from</text>
  <text x="16" y="86" font-family="SF Mono, monospace" font-size="11" fill="#34d399">  tuesday</text>
  <text x="16" y="108" font-family="SF Mono, monospace" font-size="11" fill="#E6E4E0">Arno raised concerns</text>
  <text x="16" y="122" font-family="SF Mono, monospace" font-size="11" fill="#E6E4E0">about throughput...</text>
</svg>
</div>
</div>

## What it runs

**Daily brief.** Every morning the system scans active workstreams, meeting notes, and the kanban board. Generates a compact briefing in the journal. Takes 30 seconds instead of 15 minutes of tab-switching.

**Session logging.** After a work session, the assistant writes a third-person prose log — what got decided, by whom, what's still open. These accumulate into a searchable history that spans months. No more "what did we agree about that?"

**Kanban dispatch.** Large tasks get decomposed into specialist worker agents with dependency chains. The dispatcher runs them in parallel where possible, serializes where there are gates. I review the outputs; the AI handles the routing.

**Code review delegation.** PRs go to Claude Code with quality gates and project-specific rules. The review comes back with inline comments and a summary. I read the summary and spot-check the diffs.

**Project management.** Builds, deployments, and configuration for personal projects (UXRStudy, coreyhobson.com) run through the assistant. I describe what I want; the system figures out how to ship it.

**Evening recap and weekly review.** At the end of each day, the assistant writes a recap of decisions, progress, and open questions. At the end of the week, it reviews all sessions — identifying patterns, suggesting skills to improve, and sometimes recommending a book or a course. I dump everything in there: what went well, what went badly, directions that didn't work. It finds the signal.

## What I didn't expect

**It built its own knowledge graph.** Without me asking, the AI started organizing everything into datasets — interconnecting references, creating categories, building flows between related topics. I didn't design this. It emerged from the system figuring out that cross-referencing made recall faster.

**The habit is the hard part.** You have to consciously remember to use it. Ad-hoc conversations in meetings don't get captured. I can send voice notes via text for personal work, but I can't do that at work — security and privacy constraints. I need better habits around writing notes while waiting on things, managing agents between meetings. The tool can't fix the discipline problem.

**If someone asked me where to start:** small. Build a couple workflows for daily tasks. Automate research. Use it as a sounding board. Don't try to architect the whole system upfront. Let it grow.

Is this the permanent way of work? I don't know. It's still new. But the emergent behaviors — the dataset organization, the weekly reviews spotting patterns I missed — make me think it might be.

## Why this works

<div class="not-prose flex flex-col md:flex-row gap-8 my-10 items-center">
<div class="flex-1">

**Context persistence.** The AI doesn't reset every session. It knows what I worked on yesterday and what's due this week. Long-running work doesn't have to be re-explained every time.

**Two-Mac continuity.** Same assistant, same memory, synced via git every 5 minutes. Work Mac and personal Mac stay in lockstep without manual synchronization.

**Zero vendor lock-in.** The knowledge graph is plain markdown. If the assistant disappears tomorrow, every decision, note, and dataset is still readable in Obsidian. No vector database. No black-box embedding store. Just files and git.

**Cost efficiency.** 80%+ of AI interactions run on the local model at zero marginal cost. Cloud API spend is reserved for tasks that genuinely need the reasoning depth.

</div>
<div class="shrink-0">
<svg width="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:200px">
  <path d="M15 120 Q55 60 95 120 Q135 60 175 120" stroke="#C2703E" stroke-width="1.5" stroke-dasharray="3 4" opacity="0.6"/>
  <circle cx="15" cy="120" r="7" fill="#14181A" stroke="#C2703E" stroke-width="1"/>
  <circle cx="95" cy="120" r="7" fill="#14181A" stroke="#C2703E" stroke-width="1"/>
  <circle cx="175" cy="120" r="7" fill="#14181A" stroke="#C2703E" stroke-width="1"/>
  <text x="15" y="146" font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle" fill="#8B8580">Mon</text>
  <text x="95" y="146" font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle" fill="#8B8580">Wed</text>
  <text x="175" y="146" font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle" fill="#8B8580">Fri</text>
  <text x="95" y="50" font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle" fill="#8B8580" font-style="italic">memory carries across</text>
  <line x1="95" y1="160" x2="45" y2="192" stroke="#2A2724" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="95" y1="160" x2="145" y2="192" stroke="#2A2724" stroke-width="1" stroke-dasharray="3 3"/>
  <rect x="22" y="182" width="38" height="18" rx="3" fill="#14181A" stroke="#2A2724" stroke-width="1"/>
  <line x1="26" y1="188" x2="56" y2="188" stroke="#8B8580" stroke-width="0.5"/>
  <rect x="125" y="182" width="38" height="18" rx="3" fill="#14181A" stroke="#2A2724" stroke-width="1"/>
  <line x1="129" y1="188" x2="159" y2="188" stroke="#8B8580" stroke-width="0.5"/>
  <text x="41" y="196" font-family="-apple-system, sans-serif" font-size="8" text-anchor="middle" fill="#8B8580">Work</text>
  <text x="144" y="196" font-family="-apple-system, sans-serif" font-size="8" text-anchor="middle" fill="#8B8580">Personal</text>
</svg>
</div>
</div>

## Stack

- **Orchestration:** Hermes Agent with multi-profile routing
- **Local inference:** LM Studio running Qwen3-30B-A3B (4-bit quantized)
- **Knowledge base:** Obsidian vault (CoreyWorkspace) with git-backed sync
- **Task orchestration:** Hermes Kanban with multi-agent dispatch
- **Coding delegation:** Claude Code CLI for complex implementation work
- **Hardware:** Apple M1 Max, 64GB unified memory
