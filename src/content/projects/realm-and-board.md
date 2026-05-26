---
title: "Realm & Board"
description: "Browser-based RTS-Chess hybrid. Build your army on a 3D island, gather resources, fight beasts — then take what you built to the board."
date: 2026-03-12
tags: ["game-dev", "threejs", "chess", "javascript", "web"]
draft: false
repo: "https://github.com/SamHobson/Realm-and-Board"
status: "active"
image: "/images/realm-and-board.png"
---

## Why this exists

Realm & Board is an experiment in how far AI can go building simple games. The entire codebase — Three.js rendering, chess logic, multiplayer networking, AI opponents, pixel art terrain generation — was built with Claude Code. I designed the game and made the decisions. The AI wrote the implementation.

The question wasn't "can AI make a game." It was "how good can the game be when a designer directs and an AI executes?" The answer turned out to be: surprisingly good.

The concept itself is an RTS-chess hybrid. You get 90 seconds on a pixel art island to gather resources, produce pieces, and clear enemy camps. Then you place your army on the board and play. Best of three rounds. The island is preparation; the board is war.

## The pieces

**The island — RTS phase.** Resource nodes generate wood, gold, and stone. Enemy camps guard deeper regions. Piece production buildings convert resources into chess units. The deeper you go, the richer the rewards and the tougher the enemies. Risk and reward escalate together.

**The board — chess phase.** Standard chess rules enforced by chess.js. Custom placement phase lets you position produced pieces anywhere on your back two rows. A recall mechanic lets you swap a piece mid-match — but only pieces you produced during the RTS phase.

**The dilemma.** Every pawn is a decision. Promote it to a queen, or keep it as a worker to feed your economy. The RTS phase doesn't decide the match, but it decides what you can bring to it. This dilemma creates emergent strategy that playtesting didn't fully predict.

**Multiplayer.** 1v1 matches sync both phases in real time via Socket.io. Both players see the same island timer. Both place simultaneously during the placement phase. An AI opponent handles solo play when no human is available.

## In practice

The game runs as a single-page browser app. No install. Share a link and play. Two distinct visual languages signal the phase transition: pixel art for the island (playful, game-like), clean vectors for the board (serious, precise). When you move from one to the other, the tone shifts.

No persistence. No database, no accounts, no login. State lives in the WebSocket session. A match starts and ends in the browser. This was intentional — removing account friction means anyone can play in 10 seconds.

## Why this works

**Chess-first, RTS-second.** The RTS phase is 90 seconds. The chess phase has no time limit per move. This weighting reflects the core thesis: the RTS exists to serve the chess, not the other way around. Building a beautiful island management sim that leads to a trivial chess match would miss the point.

**No framework.** Vanilla JavaScript ES modules, Vite for builds. No TypeScript, no React, no state management library. Deliberately kept simple — the complexity is in the game design, not the toolchain.

**Event-driven architecture.** All systems communicate through an event bus. Each game system (units, resources, camps, chess, AI) has a dedicated manager class. The architecture is simple enough for one person to maintain but deep enough for competitive play.

## What it changes

A novel game format that merges two genres without either feeling bolted-on. Zero-install barrier — browser only, share a link and play. The dilemma mechanic creates emergent strategy that even I didn't fully anticipate during design.

## Stack

Three.js, chess.js v1.4, Express + Socket.io, Vite v6.4, vanilla JavaScript ES modules.
