# Nudge — One match. Every evening.

Landing page for Nudge, a daily matchmaking experience starting in Bangalore.

## Tech Stack

- **React 19** + **TypeScript 6**
- **Vite 8** (build tool)
- **Tailwind CSS 3** with custom HSL design tokens
- **shadcn/ui** components and utilities

## Getting Started

```bash
npm install
npm run dev
```

## Design System

| Token | Value |
|-------|-------|
| Display font | Fredoka (Google Fonts) |
| Body font | Inter (Google Fonts) |
| Primary | `#65001E` (burgundy) |
| Secondary | `#FFBACF` (soft pink) |
| Background | `#FFE9EC` (cream blush) |

## Project Structure

```
src/
├── components/
│   ├── Header.tsx       # Glassmorphic navigation bar
│   └── HeroSection.tsx  # Hero with video background and email capture
├── lib/
│   └── utils.ts         # shadcn/ui cn() utility
├── index.css            # Tailwind directives + CSS variables + keyframes
├── App.tsx              # Root layout with video background
└── main.tsx             # Entry point
```
