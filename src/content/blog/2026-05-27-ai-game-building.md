---
title: "What I Learned Building a Game with AI in a Weekend"
description: "I'm a game designer who can't code. With Claude, I built an RTS-chess hybrid in four hours. Here's what worked, what didn't, and what surprised me."
date: 2026-05-27
tags: ["game-dev", "ai", "coding", "experiments", "web"]
draft: false
---

I spent a weekend building a game. Four hours of actual sat-down work. The rest was designing documents and picking stacks.

The idea: what if you took chess and let players bring any pieces they wanted? But how do you decide what pieces people are allowed? So I threw an RTS phase in front of it. 90 seconds on a pixel art island to gather resources and produce your army. Then the board.

I have a game design background. I know the principles behind pathfinding, AI behavior, vision systems. I understand architecture. But I cannot implement any of it. I am not a developer.

The AI wrote every line of code.

## What AI is good at

**The obvious stuff.** Web code, Three.js rendering, chess.js integration, Socket.io multiplayer setup. This is the surface area you'd expect — the stack is common, the patterns are well-documented, the training data is abundant.

**Following architecture.** When I could explain the principles — "use raycasting for the pathfinding, recalculate when the terrain changes, expose vision areas as a radius from each unit" — the AI could research and implement the specifics. I provided the direction. It wrote the implementation.

**The thing that shouldn't have worked.** Pathfinding was broken. The AI tried multiple approaches and none of them produced the behavior I wanted. Then on a hunch, I found ancient Age of Empires documentation — might have been AoE 1, I'm not sure — and fed it to Claude.

It reverse-engineered a pathfinding system from 25-year-old game documentation and implemented it. That was the moment I realized this wasn't just an autocomplete on steroids. This was something that could synthesize from sources and apply the pattern to a completely different codebase.

## What AI is bad at

**Multiplayer with real constraints.** Single-player, local, browser-based? AI crushes it. Competitive multiplayer with anti-cheat? The infrastructure is too complex, too security-critical, too dependent on server architecture decisions that require human judgment. You hit a wall.

**Design judgment.** The AI can implement the thing you ask for. It can't tell you whether the thing is fun. Playtesting with real humans revealed issues the AI never would have caught — timing, balance, the feel of the recall mechanic. The AI is the implementer. The designer is still the designer.

**Architecture at scale.** For a weekend prototype, the event-driven architecture (one manager class per system, everything communicating through an event bus) is clean. For a production game with hundreds of systems, it would become spaghetti. The AI doesn't know when the architecture needs to level up.

## What this means

The barrier to building games has collapsed for anyone who can think in systems. You don't need to write code. You need to understand how games work, what makes them fun, and how to communicate that to something that can.

That last part — communicating design intent to AI — is its own skill. It's not prompting. It's closer to writing a game design document that gets executed in real time. The clearer your thinking, the better the output.

I'm not done with Realm & Board. I might rebuild it in Godot or Three.js from a 3D perspective. The current engine has constraints I've hit. But the experiment answered the question I started with: four hours, one designer, zero lines of hand-written code, and something genuinely fun came out of it.

The tools have changed. The design thinking hasn't.
