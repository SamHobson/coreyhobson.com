---
title: "UXR Study"
description: "Storefront for premium Notion UX research templates. Research templates with structured content modeling, Gumroad payments, and edge-network delivery."
date: 2025-04-20
tags: ["web", "nextjs", "notion", "ecommerce", "sanity"]
draft: false
repo: "https://github.com/SamHobson/uxrstudy"
live_url: "https://uxr-study.vercel.app"
status: "active"
image: "/images/uxr-study.png"
---

## Why this exists

UXR Study sells premium Notion templates for UX researchers. Each template is a complete research workflow — interview scripts, usability test plans, competitive analysis frameworks, synthesis tools — packaged as a duplicatable Notion document.

The site was built for Corey's wife's UX research consultancy. She needed a storefront that felt credible to research professionals: clean, fast, no marketplace bloat. Not another Gumroad landing page wearing a Shopify skin.

## The pieces

**Sanity CMS for content.** All product content — descriptions, pricing, feature lists, changelogs — lives in Sanity Studio. Structured content modeling means every template follows the same schema. No hardcoded product data anywhere in the frontend. For a non-technical owner, Sanity Studio is a friendly editing surface. She can update descriptions, swap images, add features, and publish without touching code.

**Next.js static export for speed.** Every page is pre-built at deploy time and served from Vercel's edge network. No server-side rendering, no database queries at request time. Product pages load in under 500ms from anywhere.

**Gumroad for payments.** The purchase flow is a redirect to Gumroad's checkout. No payment processing, no PCI compliance, no cart management. The site does one thing well: showcase templates and route to purchase.

## In practice

Nine research templates are live: user interview kit, usability testing plan, competitive analysis framework, synthesis workshop, research repository, stakeholder report, participant screener, journey map, and research ops dashboard. Each ships as a Notion duplicatable link with detailed setup instructions.

Content updates trigger a rebuild that completes in under a minute. The site is static HTML — zero server cost, zero cold starts.

## Why this works

**Static over dynamic.** For a site with 9 products that change monthly, static export is the right call. No server to maintain. Pages are just HTML. The tradeoff is that updates need a rebuild, but at under a minute, that's a feature.

**Sanity over Markdown.** Markdown is great for developers. For a non-technical content owner, a visual CMS is the difference between "I can update this myself" and "I need to ask someone."

**No e-commerce platform.** Shopify would have been 10x the complexity for 10% of the need. No inventory, no variants, no cart. A simple Gumroad redirect handles purchases. The site does less and does it better.

## What it changes

A professional storefront that converts better than a Gumroad landing page. Content management for a non-technical owner through Sanity Studio. Zero hosting cost on Vercel and Sanity free tiers. Sub-500ms page loads globally from the edge network.

## Stack

Next.js 16, Sanity v5, Tailwind CSS v4, Vercel, Gumroad, pnpm.
