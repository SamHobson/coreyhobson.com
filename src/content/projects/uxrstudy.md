---
title: "UXR Study"
description: "Storefront for premium Notion UX research templates. 75,000 downloads, zero marketing spend. Built for my wife's consultancy — co-founded, not just coded."
date: 2025-04-20
tags: ["web", "nextjs", "notion", "ecommerce", "sanity"]
draft: false
repo: "https://github.com/SamHobson/uxrstudy"
live_url: "https://uxr-study.vercel.app"
status: "active"
image: "/images/uxr-study.png"
---

## Why this exists

I'm the co-founder of UXR Study. My wife runs the consultancy. We needed a storefront that felt credible to research professionals, not another Gumroad landing page wearing a Shopify skin.

The constraint was simple: keep it cheap, keep it maintainable, keep it on the side. If we had to rebuild infrastructure to update a template description, we'd fail. If we had to manage payment security, we'd fail. The scope had to be small enough that two people could run it alongside full-time jobs.

## The pieces

**Sanity CMS for content.** All product content lives in Sanity Studio. My wife can update descriptions, swap images, add features without touching code. The current live site doesn't have the Figma design implemented yet — that's still coming. But the CMS works.

**Gumroad for payments.** No payment processing, no PCI compliance, no cart management. The site does one thing: showcase templates and route to purchase. Shopify would have been 10x the complexity for 10% of the need.

**Playful branding with a scientific edge.** The visual identity uses rounded shapes to soften what could be a dry subject — UX research methodology. It's hospitable but not unserious. The shapes let us be playful within a discipline that's fundamentally scientific.

## What happened

Workshops sell out whenever we host them. Courses sell a couple a week. **75,000 template downloads, zero marketing spend.**

Our templates are used by researchers at BBC, the UK Ministry of Defence, bold.com, ING, RBO, and Gorilla Games. Rockstar uses some of them. These are people who could build their own — they choose ours because the structure and the thinking are already done.

We built something cheap that scales. We own our analytics instead of paying for an LMS. We can iterate without rebuilding infrastructure. For a side project, that's the whole game.

## Stack

Next.js 16, Sanity v5, Tailwind CSS v4, Vercel, Gumroad, pnpm.
