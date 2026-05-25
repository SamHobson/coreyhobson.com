---
title: "UXR Study"
description: "Storefront for premium Notion UX research templates. Research templates with structured content modeling, Gumroad payments, and edge-network delivery. Built for Corey's wife's UX research consultancy."
date: 2025-04-20
tags: ["web", "nextjs", "notion", "ecommerce", "sanity"]
draft: false
repo: "https://github.com/SamHobson/uxrstudy"
live_url: "https://uxr-study.vercel.app"
status: "active"
---

## What it is

UXR Study sells premium Notion templates for UX researchers. Each template is a complete research workflow — interview scripts, usability test plans, competitive analysis frameworks, synthesis tools — packaged as a duplicatable Notion document with setup instructions.

The site is built for Corey's wife's UX research consultancy. She needed a storefront that felt credible to research professionals: clean, fast, no marketplace bloat. Not another Gumroad landing page wearing a Shopify skin.

## Architecture

The site runs on a Jamstack architecture with static export for maximum performance:

**Sanity CMS (backend):** All product content — descriptions, pricing, feature lists, changelogs — lives in Sanity Studio. Structured content modeling means each template follows the same schema: title, description, features, preview images, pricing tier, Gumroad link. No hardcoded product data anywhere in the frontend.

**Next.js 16 (frontend):** App Router with static export. Every page is pre-built at deploy time and served from Vercel's edge network. No server-side rendering, no database queries at request time. Product pages load in under 500ms from anywhere.

**Styling:** Tailwind CSS v4 with a navy palette (#112236 to #061843) and Poppins typography. The aesthetic is deliberately understated — let the templates sell themselves.

**Payments:** Gumroad integration. Purchase flow is a redirect to Gumroad's checkout. No payment processing, no PCI compliance, no cart management. The site does one thing well: showcase templates and route to purchase.

## Design decisions

**Static over dynamic.** For a site with 9 products that change monthly, static export is the right call. Zero server cost. Zero cold starts. Pages are just HTML. The tradeoff is that content updates require a rebuild, but with 9 products building in under a minute on Vercel, that's a feature not a bug.

**Sanity over Markdown.** For a non-technical content owner (Corey's wife), Sanity Studio is a friendly editing surface. She can update product descriptions, swap images, add features, and publish without touching code. The structured schema enforces consistency across all product pages.

**No e-commerce platform.** Shopify would have been 10x the complexity for 10% of the need. No inventory, no variants, no cart, no checkout. A simple Gumroad redirect handles purchases. The site does less and does it better.

## Products

Nine research templates are live: user interview kit, usability testing plan, competitive analysis framework, synthesis workshop, research repository, stakeholder report, participant screener, journey map, and research ops dashboard. Each ships as a Notion duplicatable link with detailed setup instructions.

## What it achieves

- A professional storefront that converts better than a Gumroad landing page
- Content management for a non-technical owner through Sanity Studio
- Zero hosting cost (Vercel free tier, Sanity free tier)
- Edge-network delivery — sub-500ms page loads globally

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **CMS:** Sanity v5 with structured content modeling
- **Styling:** Tailwind CSS v4, Poppins typography
- **Hosting:** Vercel (edge network)
- **Payments:** Gumroad integration
- **Package manager:** pnpm
