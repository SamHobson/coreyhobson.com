     1|---
     2|title: "Personal AI Workflow"
     3|description: "Always-on AI assistant running on an M1 Max. Route tasks by complexity across local and cloud models — 80% on a free local model, premium reserved for what matters."
     4|date: 2025-01-10
     5|tags: ["ai", "llm", "local-ml", "automation", "personal-tools"]
     6|draft: false
     7|repo: "https://github.com/SamHobson/hermes-config"
     8|status: "active"
     9|image: "/images/ai-workflow.png"
    10|---
    11|
    12|## How it works
    13|
    14|My work runs through a setup that combines plain text files, an AI assistant in the terminal, and a tagged structure that connects everything. The core idea is routing: not every task needs Claude Opus. Most don't.
    15|
    16|<div class="not-prose flex justify-center my-8">
    17|<svg width="100%" viewBox="0 0 720 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    18|  <!-- User -->
    19|  <rect x="10" y="45" width="70" height="50" rx="4" fill="#14181A" stroke="#2A2724" stroke-width="1"/>
    20|  <text x="45" y="66" fill="#E6E4E0" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Request</text>
    21|  <text x="45" y="83" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="10" text-anchor="middle">Plain English</text>
    22|
    23|  <!-- Arrow -->
    24|  <line x1="80" y1="70" x2="112" y2="70" stroke="#C2703E" stroke-width="1.5" marker-end="url(#arrow)"/>
    25|  <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#C2703E"/></marker></defs>
    26|
    27|  <!-- Classifier -->
    28|  <rect x="115" y="40" width="90" height="60" rx="4" fill="#14181A" stroke="#C2703E" stroke-width="1"/>
    29|  <text x="160" y="62" fill="#E6E4E0" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Classifier</text>
    30|  <text x="160" y="80" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="10" text-anchor="middle">Qwen 4-bit</text>
    31|  <text x="160" y="93" fill="#C2703E" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">localhost:1234</text>
    32|
    33|  <!-- Branch arrows -->
    34|  <line x1="205" y1="50" x2="248" y2="22" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrow)"/>
    35|  <text x="226" y="32" fill="#34d399" font-family="-apple-system, sans-serif" font-size="9">mechanical</text>
    36|
    37|  <line x1="205" y1="70" x2="248" y2="70" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrow)"/>
    38|  <text x="226" y="65" fill="#fbbf24" font-family="-apple-system, sans-serif" font-size="9">routine</text>
    39|
    40|  <line x1="205" y1="90" x2="248" y2="118" stroke="#a78bfa" stroke-width="1.5" marker-end="url(#arrow)"/>
    41|  <text x="226" y="115" fill="#a78bfa" font-family="-apple-system, sans-serif" font-size="9">complex</text>
    42|
    43|  <!-- Local -->
    44|  <rect x="252" y="5" width="130" height="40" rx="4" fill="#14181A" stroke="#34d399" stroke-width="1"/>
    45|  <text x="317" y="22" fill="#34d399" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Local</text>
    46|  <text x="317" y="37" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Qwen3-30B · $0</text>
    47|
    48|  <!-- API -->
    49|  <rect x="252" y="52" width="130" height="40" rx="4" fill="#14181A" stroke="#fbbf24" stroke-width="1"/>
    50|  <text x="317" y="69" fill="#fbbf24" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">API</text>
    51|  <text x="317" y="84" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">OpenRouter · ~$5/mo</text>
    52|
    53|  <!-- Premium -->
    54|  <rect x="252" y="100" width="130" height="40" rx="4" fill="#14181A" stroke="#a78bfa" stroke-width="1"/>
    55|  <text x="317" y="117" fill="#a78bfa" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Premium</text>
    56|  <text x="317" y="132" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Claude Opus · $20/mo</text>
    57|
    58|  <!-- Knowledge backbone -->
    59|  <rect x="420" y="30" width="140" height="80" rx="4" fill="none" stroke="#2A2724" stroke-width="1" stroke-dasharray="4,3"/>
    60|  <text x="490" y="52" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Knowledge Backbone</text>
    61|  <text x="490" y="70" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Obsidian vault</text>
    62|  <text x="490" y="86" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Git sync · 2 Macs</text>
    63|  <text x="490" y="102" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Plain markdown</text>
    64|
    65|  <!-- Workflows -->
    66|  <rect x="590" y="30" width="120" height="80" rx="4" fill="none" stroke="#2A2724" stroke-width="1" stroke-dasharray="4,3"/>
    67|  <text x="650" y="50" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Daily brief</text>
    68|  <text x="650" y="66" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Session log</text>
    69|  <text x="650" y="82" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Kanban dispatch</text>
    70|  <text x="650" y="98" fill="#8B8580" font-family="-apple-system, sans-serif" font-size="9" text-anchor="middle">Code review</text>
    71|</svg>
    72|</div>
    73|
    74|The system classifies every request and sends it to the right tier:
    75|
    76|**Local tier — free, zero latency.** Qwen3-30B-A3B running 4-bit quantized on LM Studio. Handles classification, summarization, simple text transforms, and basic scripting. This is where 80%+ of all AI interactions land. Zero API cost. Zero network round trips.
    77|
    78|**API tier — pay-per-use.** OpenRouter with DeepSeek and Claude Sonnet as fallbacks. The default for most real work: code generation, content writing, analysis that needs more than 4-bit reasoning. Roughly $5/month in practice.
    79|
    80|**Premium tier — flat subscription.** Claude Opus for hard reasoning, multi-file refactors, and planning sessions where quality matters more than speed or cost. Reserved for the work that actually needs deep thought.
    81|
    82|## The pieces
    83|
    84|<div class="not-prose flex flex-col md:flex-row gap-8 my-10 items-center">
    85|<div class="flex-1">
    86|
    87|Everything I write lives in `.md` files. A `.md` file is plain text with light formatting: a hash mark for a heading, a dash for a bullet. No special software needed. My whole workspace is a folder of these files — meetings, decisions, project briefs, research, journal entries.
    88|
    89|I use them because they're durable. Small, fast, searchable, and not trapped inside an app the way a Word document or a Notion page is.
    90|
    91|</div>
    92|<div class="shrink-0">
    93|<svg width="100%" viewBox="0 0 160 170" fill="none" xmlns="http://www.w3.org/2000/svg">
    94|  <rect x="15" y="10" width="105" height="140" rx="5" fill="#14181A" stroke="#2A2724" stroke-width="1"/>
    95|  <path d="M95 10 L125 40 L95 40 Z" fill="#1a1f21" stroke="#2A2724" stroke-width="1"/>
    96|  <line x1="95" y1="10" x2="95" y2="40" stroke="#2A2724" stroke-width="1"/>
    97|  <line x1="95" y1="40" x2="125" y2="40" stroke="#2A2724" stroke-width="1"/>
    98|  <text x="28" y="60" font-family="SF Mono, monospace" font-size="10" fill="#C2703E"># Meeting</text>
    99|  <text x="28" y="76" font-family="SF Mono, monospace" font-size="10" fill="#8B8580">Discussed the</text>
   100|  <text x="28" y="90" font-family="SF Mono, monospace" font-size="10" fill="#8B8580">new ingest</text>
   101|  <text x="28" y="104" font-family="SF Mono, monospace" font-size="10" fill="#8B8580">pipeline.</text>
   102|  <text x="28" y="124" font-family="SF Mono, monospace" font-size="10" fill="#C2703E">## Decisions</text>
   103|  <text x="28" y="140" font-family="SF Mono, monospace" font-size="10" fill="#8B8580">- ship behind flag</text>
   104|  <text x="80" y="164" font-family="-apple-system, sans-serif" font-size="10" fill="#8B8580" text-anchor="middle">notes.md</text>
   105|</svg>
   106|</div>
   107|</div>
   108|
   109|<div class="flex flex-col md:flex-row-reverse gap-8 my-10 items-center">
   110|<div class="flex-1">
   111|
   112|The second piece is an AI assistant that runs in the terminal. I type a request in plain English. The AI reads the relevant files in my workspace, answers, and edits files when I ask.
   113|
   114|Plain text plus an AI that can read and edit it is the combination that makes the rest of this work.
   115|
   116|</div>
   117|<div class="shrink-0">
   118|<svg width="100%" viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg">
   119|  <rect x="5" y="10" width="170" height="110" rx="6" fill="#0D1112" stroke="#2A2724" stroke-width="1"/>
   120|  <circle cx="16" cy="22" r="3" fill="#e8624a"/>
   121|  <circle cx="25" cy="22" r="3" fill="#e8b94a"/>
   122|  <circle cx="34" cy="22" r="3" fill="#6cae6c"/>
   123|  <text x="16" y="50" font-family="SF Mono, monospace" font-size="10" fill="#34d399">&gt; summarize arno</text>
   124|  <text x="16" y="66" font-family="SF Mono, monospace" font-size="10" fill="#34d399">  meeting from</text>
   125|  <text x="16" y="82" font-family="SF Mono, monospace" font-size="10" fill="#34d399">  tuesday</text>
   126|  <text x="16" y="104" font-family="SF Mono, monospace" font-size="10" fill="#E6E4E0">Arno raised concerns</text>
   127|  <text x="16" y="116" font-family="SF Mono, monospace" font-size="10" fill="#E6E4E0">about throughput...</text>
   128|</svg>
   129|</div>
   130|</div>
   131|
   132|## What it runs
   133|
   134|**Daily brief.** Every morning the system scans active workstreams, meeting notes, and the kanban board. Generates a compact briefing in the journal. Takes 30 seconds instead of 15 minutes of tab-switching.
   135|
   136|**Session logging.** After a work session, the assistant writes a third-person prose log — what got decided, by whom, what's still open. These accumulate into a searchable history that spans months. No more "what did we agree about that?"
   137|
   138|**Kanban dispatch.** Large tasks get decomposed into specialist worker agents with dependency chains. The dispatcher runs them in parallel where possible, serializes where there are gates. I review the outputs; the AI handles the routing.
   139|
   140|**Code review delegation.** PRs go to Claude Code with quality gates and project-specific rules. The review comes back with inline comments and a summary. I read the summary and spot-check the diffs.
   141|
   142|**Project management.** Builds, deployments, and configuration for personal projects (UXRStudy, coreyhobson.com) run through the assistant. I describe what I want; the system figures out how to ship it.
   143|
   144|## Why this works
   145|
   146|<div class="not-prose flex flex-col md:flex-row gap-8 my-10 items-center">
   147|<div class="flex-1">
   148|
   149|**Context persistence.** The AI doesn't reset every session. It knows what I worked on yesterday and what's due this week. Long-running work doesn't have to be re-explained every time.
   150|
   151|**Two-Mac continuity.** Same assistant, same memory, synced via git every 5 minutes. Work Mac and personal Mac stay in lockstep without manual synchronization.
   152|
   153|**Zero vendor lock-in.** The knowledge graph is plain markdown. If the assistant disappears tomorrow, every decision, note, and dataset is still readable in Obsidian. No vector database. No black-box embedding store. Just files and git.
   154|
   155|**Cost efficiency.** 80%+ of AI interactions run on the local model at zero marginal cost. Cloud API spend is reserved for tasks that genuinely need the reasoning depth.
   156|
   157|</div>
   158|<div class="shrink-0">
   159|<svg width="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
   160|  <!-- Memory curve -->
   161|  <path d="M15 120 Q55 60 95 120 Q135 60 175 120" stroke="#C2703E" stroke-width="1.5" stroke-dasharray="3 4" opacity="0.6"/>
   162|  <circle cx="15" cy="120" r="7" fill="#14181A" stroke="#C2703E" stroke-width="1"/>
   163|  <circle cx="95" cy="120" r="7" fill="#14181A" stroke="#C2703E" stroke-width="1"/>
   164|  <circle cx="175" cy="120" r="7" fill="#14181A" stroke="#C2703E" stroke-width="1"/>
   165|  <text x="15" y="146" font-family="-apple-system, sans-serif" font-size="10" fill="#8B8580" text-anchor="middle">Mon</text>
   166|  <text x="95" y="146" font-family="-apple-system, sans-serif" font-size="10" fill="#8B8580" text-anchor="middle">Wed</text>
   167|  <text x="175" y="146" font-family="-apple-system, sans-serif" font-size="10" fill="#8B8580" text-anchor="middle">Fri</text>
   168|  <text x="95" y="50" font-family="-apple-system, sans-serif" font-size="10" fill="#8B8580" text-anchor="middle" font-style="italic">memory carries across</text>
   169|
   170|  <!-- Devices -->
   171|  <line x1="95" y1="160" x2="45" y2="192" stroke="#2A2724" stroke-width="1" stroke-dasharray="3 3"/>
   172|  <line x1="95" y1="160" x2="145" y2="192" stroke="#2A2724" stroke-width="1" stroke-dasharray="3 3"/>
   173|  <rect x="22" y="182" width="38" height="18" rx="3" fill="#14181A" stroke="#2A2724" stroke-width="1"/>
   174|  <line x1="26" y1="188" x2="56" y2="188" stroke="#8B8580" stroke-width="0.5"/>
   175|  <rect x="125" y="182" width="38" height="18" rx="3" fill="#14181A" stroke="#2A2724" stroke-width="1"/>
   176|  <line x1="129" y1="188" x2="159" y2="188" stroke="#8B8580" stroke-width="0.5"/>
   177|  <text x="41" y="196" font-family="-apple-system, sans-serif" font-size="7" fill="#8B8580" text-anchor="middle">Work</text>
   178|  <text x="144" y="196" font-family="-apple-system, sans-serif" font-size="7" fill="#8B8580" text-anchor="middle">Personal</text>
   179|</svg>
   180|</div>
   181|</div>
   182|
   183|## Stack
   184|
   185|- **Orchestration:** Hermes Agent with multi-profile routing
   186|- **Local inference:** LM Studio running Qwen3-30B-A3B (4-bit quantized)
   187|- **Knowledge base:** Obsidian vault (CoreyWorkspace) with git-backed sync
   188|- **Task orchestration:** Hermes Kanban with multi-agent dispatch
   189|- **Coding delegation:** Claude Code CLI for complex implementation work
   190|- **Hardware:** Apple M1 Max, 64GB unified memory
   191|