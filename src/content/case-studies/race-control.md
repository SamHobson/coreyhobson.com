---
title: "Race Control"
description: "Online sim racing platform and matchmaking service for rFactor 2. Led UX through a complete rewrite — Angular 0 to React, number-chasing to bracket-based ranking, and research that changed how we thought about player burnout."
client: "Motorsport Games"
role: "Lead UX"
date: 2023-09-01
tags: ["gaming", "sim-racing", "web-app", "ux"]
draft: false
image: "/images/race-control-championship.jpg"
website: "https://studio-397.com"
---

Race Control is the online competition platform for rFactor 2: matchmaking, championships, co-op sessions, and driver ratings. But when I joined, it was an Angular 0 frontend with no real multiplayer — and we had Le Mans Ultimate coming, a product that would be entirely online.

## The problem we were actually solving

We knew LMU was going to be online-first with endurance racing. The RF2 engine had never had proper multiplayer or a competition system. And we didn't actually know what users needed to make a decision about joining a race. So we used the older game as a proving ground.

We ran surveys and card sorting exercises to get sim racers to rank the information they needed before committing to a race. What turned out to matter: race type, session times, track, car class, driver requirements. What didn't: most of the chrome we'd assumed was important.

![The rFactor 2 Online Beta — the starting point. An Angular 0 frontend with a popup announcing the new competition system, powered by RaceControl.](/images/race-control-beta.jpg)

![Championship overview screen showing race series, standings, and upcoming events](/images/race-control-championship.jpg)

## The React decision

The existing frontend was Angular 0. I made the call to rebuild it in React — not because Angular was bad, but because we knew these components would carry forward into Le Mans Ultimate. Building on Angular 0 was building throwaway work. Building in React meant every component was an investment in the next product.

This was my call as Lead UX. I was going to be Head of UX for the next product, and I needed the foundation to be portable.

![Circuit selection screen with track previews and session details](/images/race-control-circuit.jpg)

## What we built

### Ranking without the rage

The biggest piece of research we ran was around driver ratings. In sim racing, people chase numbers. Losing one point from your safety rating could ruin someone's night. We saw the same burnout patterns you see in MMOs — players power through for two months then disappear.

Our solution: brackets, not numbers. Silver, Gold, Platinum — safety rating tiers that were percentage-based and sticky enough to reduce anxiety. You could stay in your bracket. You still had impact. But you weren't watching a number tick down after one bad corner. It also gave us room to tune the system without players feeling every single tweak.

![Car selection screen with vehicle stats and class filters](/images/race-control-car-select.jpg)

### Spontaneous game modes

Research showed players burned out by locking into one genre and grinding it to exhaustion. So we added low-risk, spontaneous game modes — quick sessions with lower stakes. The serious sim racer could jump into something casual without feeling like they were damaging their rating. It kept people in the ecosystem longer.

![Daily Races tiered structure — Beginner, Intermediate, and Advanced events. Safety rating gates unlock higher tiers, giving players a visible progression path without the anxiety of a live number.](/images/race-control-daily-races.jpg)

## Constraints

You're working in a legacy tool with horrible UX. You know you're going to abandon it. But you also can't remake the entire experience — that makes maintenance impossible, and a completely different UX in an old product would be jarring for existing players.

The constraint forced discipline: build what matters, make it sustainable, ship it. Everything else is noise.

![Co-op session lobby with driver list and session configuration](/images/race-control-coop.jpg)

![The Daily Race event screen — BMW M2 Cup at Lime Rock Park. Session breakdown, driver ratings, fastest lap leaderboard. The competition system in its mature form.](/images/race-control-bmw-m2.jpg)

## What carried forward

The entire React component library, the ranking philosophy, and the user research moved directly into Le Mans Ultimate. Race Control wasn't a side project — it was the prototype for the UX strategy of the next product. The launch was well received, and the foundation held.

## Tools

Figma, Illustrator, Photoshop, React.
