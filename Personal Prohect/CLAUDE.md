# Design System — Instructions for Claude

## Token efficiency rules
- **Never re-fetch** Figma nodes whose values are already documented here. Use the tables below directly.
- Only call `get_design_context` when implementing a **new** node not listed here.
- Only call `get_variable_defs` when adding a **new** page or component to the file.
- Only call `search_design_system` when looking for a component whose node ID is unknown.
- Prefer editing existing files over creating new ones.
- Never re-read a file you just wrote.

---

## Figma file
| Key | Value |
|-----|-------|
| File key | `w9n0F0gWi8xrmgdP4R6zn2` |
| File name | Prototype |
| Page | Cover (`2:15`) |

---

## Design tokens

### Colors
| Token name | Hex | Usage |
|-----------|-----|-------|
| `Primary/600` | `#c22b00` | Gradient start, overlays |
| `Primary/700` | `#942000` | Date pill background, CTA button hover |
| `Primary/850` | `#4d1100` | Gradient mid |
| `brandPrimary/brandPrimary` | `#7b1b00` | Gradient end |
| `brandSecondary/brandSecondary` | `#7a3000` | Button bg (Primary Default), card gradient |
| `brandSecondary/brandSecondaryHover` | `#c24c00` | Button hover |
| `brandSecondary/brandSecondaryFocused` | `#943a00` | Button active/pressed |
| `brandPrimary/brandPrimaryPressed` | `#6b1800` | Content gradient end |
| `Neutral/900` | `#100d12` | App background |
| `border/borderPrimary` | `#231f26` | Card borders |
| `text/textPrimaryInverse` | `#f7f6f8` | Primary text on dark |
| `text/textSecondaryInverse` | `#edeced` | Secondary text, button label |
| `text/textTertiaryInverse` | `#c4c2c7` | Muted text (e.g. "Good evening ,") |
| `attention/attentionPrimary` | `#e8b432` | Notification dot, amber chip tint |
| `disabled/textDisabled` | `#737077` | Disabled state text |

### Spacing & radius
| Token | Value |
|-------|-------|
| `Roles/radiusCard` | `12px` |
| `Roles/radiusChips` | `20px` |
| `General/radiusFull` | `9999px` |
| `Numbers/8` | `8px` |
| `Numbers/12` | `12px` |
| `Numbers/16` | `16px` |
| `Numbers/22` | `22px` (line-height body) |
| `Numbers/128` | `128px` (avatar border-radius) |

### Typography
| Style token | Family | Weight | Size | Line-height |
|------------|--------|--------|------|-------------|
| `Display/displayLg` | DM Serif Display | 400 | 83px | 100px |
| `Heading/headingSm` | DM Serif Display | 400 | 23px | 28px |
| `Body/bodyMdSemiBold` | Plus Jakarta Sans | 600 | 16px | 22px |
| `Body/bodyMd` | Plus Jakarta Sans | 400 | 16px | 22px |
| `Caption/captionMedium` | Plus Jakarta Sans | 500 | 11px | 15px |

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## Component specs

### Buttons (node `45:343`)
| Property | Value |
|----------|-------|
| Height | `38px` |
| Border-radius | `20px` (radiusChips) |
| Padding | `8px 12px` |
| Font | Plus Jakarta Sans 400, 16px |
| **Primary Default** bg | `#c24c00` |
| **Primary Default** border | `1px solid #943a00` |
| **Primary Default** text | `#edeced` |
| Primary Hover bg | `#d45500` |
| Primary Pressed bg | `#943a00` |
| **Secondary Default** border | `1px solid #7a3000` |
| **Secondary Default** text | `#7a3000` |
| **Tertiary Default** | Underlined text, `#7a3000` |

### Tags / Chips (from EventCard node `43:2`)
| Variant | Background | Border |
|---------|-----------|--------|
| Genre / info (default) | `rgba(255,255,255,0.15)` | none |
| Crowd / amber | `rgba(255,178,26,0.22)` | none |
| Event type | `rgba(255,178,26,0.18)` | none |

Common properties: `border-radius: 99px`, `padding: 4px 10px`, Inter/Plus Jakarta Sans Medium 11px, color `#fff`.

### Event card gradient (node `41:3` / `43:2`)
```css
/* Main card gradient */
background: linear-gradient(-52.83deg, #000 38.375%, #4d1100 73.689%, #7b1b00 98.203%);
/* Content section gradient */
background: linear-gradient(to bottom, #c22b00, #6b1800);
/* Image overlay */
background: linear-gradient(to bottom, rgba(194,43,0,0) 0%, rgba(194,43,0,0.5) 50%, #c22b00 100%);
```

### Profile pics (node `49:350`)
- Size: `32px` circle, `border-radius: 128px`
- Overlap: `margin-right: -4px`
- Shadow: `1px 0 4px rgba(0,0,0,0.25)`
- Header avatar glow: `box-shadow: 0 0 16.9px #ff6b2e`

---

## File assets (Figma CDN — valid ~7 days from fetch)
> Re-fetch with `get_design_context` on the relevant node if expired.

| Asset | Node | URL |
|-------|------|-----|
| Profile 1 | `I49:384;48:287` | `https://www.figma.com/api/mcp/asset/042a454b-975e-4ac2-b171-c0abc593a5fa` |
| Profile 2 | `I49:384;49:288` | `https://www.figma.com/api/mcp/asset/c08fdc84-628a-41db-b884-b61ab49b0e81` |
| Profile 3 | `I49:384;49:289` | `https://www.figma.com/api/mcp/asset/ae12e70c-d27b-4057-a06f-21d16332cc61` |
| Event BG photo | `41:3` | `https://www.figma.com/api/mcp/asset/8a923260-def2-4045-8df8-2d0bd62f7c8c` |
| Bell icon | `49:433` | `https://www.figma.com/api/mcp/asset/e34f0f34-74e2-454c-8aa8-b0c9409cc7fb` |
| Cellular | status bar | `https://www.figma.com/api/mcp/asset/e10e2d43-ad8c-4601-8ace-b2e720b7845d` |
| Wifi | status bar | `https://www.figma.com/api/mcp/asset/6dcdd22e-6ec4-47be-8e23-1d2320db8a52` |
| Battery | status bar | `https://www.figma.com/api/mcp/asset/f984ae4a-027d-4d19-9089-a54da9ffd248` |

---

## Output files
| File | Purpose |
|------|---------|
| `event-card.html` | Main prototype — single self-contained HTML file, no build step |

---

## Design rules
1. **Always use tokens** — never hardcode a color that exists in the table above.
2. **Fonts** — DM Serif Display for headings, Plus Jakarta Sans for everything else.
3. **No borders on chips** — Figma spec has none; don't add them.
4. **Card border** — always `1px solid #231f26` on event cards.
5. **Button states** — implement at minimum Default + Hover + Active from the Buttons spec.
6. **Language** — all UI copy in English.
7. **Phone shell** — `390px` wide, `border-radius: 44px`, `background: #100d12`.
8. **Liked/active accent** — use `Primary/700` (`#942000`), not generic red.
