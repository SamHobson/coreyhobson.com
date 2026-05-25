---
title: "Realm & Board"
description: "Browser-based RTS-Chess hybrid. Build your army on a 3D island, gather resources, fight beasts — then take what you built to the board. Every pawn is a dilemma."
date: 2026-03-12
tags: ["game-dev", "threejs", "chess", "javascript", "web"]
draft: false
repo: "https://github.com/SamHobson/Realm-and-Board"
status: "active"
---

## What it is

Realm & Board fuses real-time strategy with classical chess. You get 90 seconds on a 3D island to gather resources, produce chess pieces, and clear enemy camps. Then you place your army on the board and play. Best of three rounds. The island is preparation; the board is war.

The question that drove the design: what if the chess match didn't start with a symmetrical board? What if you had to earn your pieces? Every pawn becomes a dilemma — promote it to a queen, or keep it as a worker to feed your economy. The RTS phase doesn't decide the match, but it decides what you can bring to it.

## Architecture

The game runs as a single-page browser app split into two rendering layers:

**3D island (Three.js):** Resource nodes generate wood, gold, and stone. Enemy camps guard deeper regions. Piece production buildings convert resources into chess units. The deeper you go, the richer the rewards and the tougher the enemies. Risk and reward escalate together.

**2D chess board (Canvas):** Standard chess rules enforced by chess.js v1.4. Custom placement phase lets you position produced pieces anywhere on your back two rows. The recall mechanic lets you swap a piece mid-match — but only pieces you produced during the RTS phase.

**Multiplayer (Socket.io + Express):** 1v1 matches sync both phases in real time. Both players see the same island timer. Both place simultaneously during placement phase. An AI opponent handles solo play when no human is available.

**Build stack:** Vite v6.4, vanilla JavaScript ES modules, no TypeScript, no framework. Deliberately kept simple — the complexity is in the game design, not the toolchain.

## Design decisions

**No persistence.** No database, no accounts, no login. State lives in the WebSocket session. A match starts and ends in the browser. This was intentional — removing account friction means anyone can play in 10 seconds.

**Chess-first, RTS-second.** The RTS phase is 90 seconds. The chess phase has no time limit per move (configurable). This weighting reflects the core thesis: the RTS exists to serve the chess, not the other way around. Building a beautiful island management sim that leads to a trivial chess match would miss the point.

**Pixel art for the island, clean vectors for the board.** Two distinct visual languages signal the phase transition. The island feels game-like, playful. The board is serious, precise. When you move from one to the other, the tone shifts.

## What it achieves

- A novel game format that merges two genres without either feeling bolted-on
- Zero-install barrier — browser only, share a link and play
- An architecture simple enough for one person to maintain but deep enough for competitive play
- The dilemma mechanic (worker or fighter?) creates emergent strategy that playtesting didn't fully predict

## Stack

- **3D rendering:** Three.js
- **Chess logic:** chess.js v1.4
- **Multiplayer:** Express + Socket.io
- **Build tool:** Vite v6.4
- **Language:** JavaScript (ES modules)
