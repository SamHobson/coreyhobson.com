---
title: "Realm & Board"
description: "Browser-based RTS-Chess hybrid. Build your army on a 3D island, then fight it out on the board."
date: 2026-03-12
tags: ["game-dev", "threejs", "chess", "javascript", "web"]
draft: false
repo: "https://github.com/SamHobson/Realm-and-Board"
status: "active"
---

Realm & Board fuses real-time strategy with classical chess. Players spend 90 seconds gathering resources and producing pieces on a 3D island, then face off in a standard chess match with the army they built. Best-of-3 format. The island is preparation; the board is war.

## Stack

- **3D rendering:** Three.js for the RTS island
- **Chess logic:** chess.js v1.4
- **Multiplayer:** Express + Socket.io for 1v1 matches
- **Build tool:** Vite v6.4
- **Language:** JavaScript (ES modules)
- **AI opponent:** Built-in for solo play

## Architecture

The game runs as a single-page browser app split into two rendering layers: a Three.js scene for the RTS island (resource nodes, enemy camps, piece production) and a 2D canvas for the chess board. Socket.io handles real-time multiplayer sync for both phases. The chess engine is pure chess.js. No database, no auth — state lives in the WebSocket session.

Every pawn is a dilemma. Promote it to a queen, or keep it as a worker to feed your economy. The RTS phase doesn't decide the match — it decides what you bring to it.
