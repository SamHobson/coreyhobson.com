---
title: "Realm & Board"
description: "RTS-chess hybrid built in a weekend with AI. What happens when a game designer who can't code directs an AI that can."
date: 2026-03-12
tags: ["game-dev", "threejs", "chess", "javascript", "web"]
draft: false
repo: "https://github.com/SamHobson/Realm-and-Board"
status: "active"
image: "/images/realm-and-board.png"
---

## Why this exists

Realm & Board was an experiment: how fast can you make something to test if it's fun? Four hours of actual sat-down work over a weekend. Most of that time was designing the documents — game rules, stack selection, what the actual experience would be. The AI wrote the code.

The idea: what if you took chess and let players bring any pieces they wanted? But how do you decide what pieces people are allowed? So I threw an RTS into the mix and watched what happened.

## The pieces

**The island — RTS phase.** 90 seconds. Gather resources, produce pieces, clear enemy camps. Pixel art terrain. The deeper you go, the richer the rewards and the tougher the enemies. Risk and reward escalate together.

**The board — chess phase.** Standard chess rules. Custom placement lets you position produced pieces anywhere on your back two rows. A recall mechanic lets you swap a piece mid-match — but only if you produced it during the RTS phase.

**The dilemma.** Every pawn is a decision. Promote it to a queen, or keep it as a worker to feed your economy. The RTS phase doesn't decide the match, but it decides what you can bring to it.

## What surprised me

I come from a game design background. I've worked on games. But I am not a game developer — I can't implement pathfinding. What I do have is the principles: raycasting, when to recalculate, vision areas, architecture. Because I could guide the AI in the right direction and let it do its own research on implementation, it could follow through.

The most interesting moment: pathfinding wasn't working. The AI couldn't get it to do what I wanted. Then I found ancient Age of Empires documentation — might have been AoE 1 — and sent it to Claude. It reverse-engineered the pathfinding approach from 25-year-old game docs and used it.

## Constraints

The barrier has come down for building games with AI. Web code is abundant, so AI is very good at it. But you hit a wall with multiplayer. Real multiplayer with anti-cheat requires infrastructure that AI can't just generate. Single-player, local, browser-based? AI crushes it. Real competitive multiplayer? Different problem entirely.

I playtested with buddies and we had genuine fun. But I hit the constraints of the engine I chose. If I had another month, I'd try Godot or rebuild in Three.js from a 3D perspective — something that could actually become a real game engine.

This is set aside, not abandoned. Personal projects are for weird ideas, rapid iteration, and seeing what emerges.

## Stack

Three.js, chess.js v1.4, Express + Socket.io, Vite v6.4, vanilla JavaScript ES modules.
