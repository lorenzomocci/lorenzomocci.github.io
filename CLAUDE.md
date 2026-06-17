# Claude Code Guidelines - Portfolio Project

This is a personal portfolio website built with semantic HTML, vanilla JavaScript, and modern CSS featuring a Swiss/International minimal aesthetic (white background, rigorous grid, Inter grotesque, 1px hairline rules, generous whitespace, a single red accent used sparingly, Fragment Mono for technical labels, realistic 3/4 iPhone device mockups).

## Local Development & Testing

Since this is a static front-end project, there are no build steps. 

### Run Local Server
To view the site locally with auto-reload or standard HTTP server:
```bash
# Option 1: Using Node's standard http-server
npx http-server -p 3000

# Option 2: Using python (built-in on macOS)
python3 -m http.server 3000
```

### Formatting & Linting
There are no automated formatters configured. Follow these style rules:
- Format HTML with 4-space indentation.
- Format CSS and JavaScript with 4-space indentation.

---

## Coding Style & Architecture

### HTML
- Use strict semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Ensure all interactive elements have descriptive `aria-label` attributes where appropriate.
- Headings must follow a logical hierarchy (`h1` -> `h2` -> `h3`).

### CSS
- Maintain styles inside [style.css](file:///Users/lorenzo/Desktop/Portfolio/style.css).
- Use CSS Variables for spacing, colors, borders, and backdrop-filters (glassmorphism details are defined in `:root`).
- Use kebab-case for class names (e.g., `glass-card`, `section-title`, `btn-primary`).
- Ensure animations and transitions have fallback/smooth timing and support `prefers-reduced-motion`.

### JavaScript
- Maintain interactive scripts in [script.js](file:///Users/lorenzo/Desktop/Portfolio/script.js).
- Use camelCase for variables, constants, and function names.
- Keep JavaScript focused on micro-interactions (e.g., mobile hamburger menu, reveal-on-scroll animations).
