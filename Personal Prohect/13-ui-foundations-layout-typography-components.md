# UI Design: Foundations, Layout, Typography, and Components

This file collects principles of UI design, differences between UI/UX/CX, screens and density, layout grids, typography, buttons, cards, and images.

## UI, UX, and CX

Customer Experience (`CX`) is a high-level strategic discipline. User Experience (`UX`) is an integral part of it. User Interface (`UI`) is a component of the UX process.

UI is the visual and interactive point of contact between user and product, digital system, or service. It is the link between physical entity and functionality.

It includes:

- layout and grid;
- typography;
- color palette;
- icons;
- visual components;
- buttons;
- animations;
- microinteractions;
- feedback;
- states;
- every element that makes interaction possible and intuitive.

UI is not only aesthetics: it is choice, context, and intention.

## UI designer and graphic designer

The role of UI designer does not coincide with "making it beautiful". UI requires skills and rules related to constraints, functionality, coherence, and interaction. Excessive artistic freedom can move away from functional specifications.

## Screens, pixel density, and logical units

Pixel density indicates how many pixels are contained in a physical area of the screen, measured in PPI.

The evolution of screens has made designing in real pixels insufficient:

- devices with different physical sizes;
- different densities;
- 1x, 2x, 3x ratios and many Android densities;
- different interaction modes.

For this reason, design is done in a vector-based way, independent of density and scalable.

## Point, dp, and sp

| System | Unit | Meaning |
| --- | --- | --- |
| iOS | `pt` | Abstract density-independent unit; 1 pt corresponds to 1 pre-Retina pixel and to 2 or 3 pixels per side on Retina. |
| Android | `dp` / `sp` | Logical units that describe perceived dimensions, not physical pixels. |

A good practice is to design on a coherent scale, often 1x or logical units, and export assets at the necessary densities.

## Designing today

Main directions:

- responsive design: fluid layouts;
- adaptive layout: structural changes for breakpoints or contexts;
- design system: shared components, rules, and principles;
- user-centered design: real needs, research, testing, iteration;
- data-driven design: data-led decisions and optimization;
- accessibility / inclusive design: accessibility as a standard, not a nice-to-have;
- AI-driven / generative interfaces: dynamic layouts, content, and interactions;
- ecosystem thinking: coherent touchpoint systems;
- conversational and multimodal interfaces: voice, text, gesture, AI assistant.

## Resolutions and presets

Modern UI/prototyping tools offer presets for devices and 1x resolutions.

Dimensions cited as relevant in 2026:

- 1920×1080 for monitors and laptops;
- 360px and 390px as mobile-first bases;
- 768×1024 for iPad and portrait tablets.

## Layout grid

A layout grid is an alignment system that organizes elements in space. It is not only used to hold the layout together: it builds visual relationships, clear hierarchies, readability, coherence, scalability, and adaptability.

It should be set at the beginning of the project to increase coherence and implementation speed.

## Horizontal and vertical layout

| Type | Components | Function |
| --- | --- | --- |
| Horizontal layout | Vertical columns and gutters | Horizontal alignment and layout base. |
| Vertical layout | Horizontal rows | Align heights, sections, and white spaces; improve scanning and rhythm. |

## 8-point grid

The 8-point grid is a spacing system based on multiples of 8: 8, 16, 24, 32, etc.

Value:

- reduces arbitrary decisions;
- improves alignment;
- maintains coherent proportions;
- scales predictably;
- creates shared language between design and development.

For designers: fewer useless decisions, more rhythm.  
For the team: clear rules.  
For users: coherent interface and less noise.

It is not mandatory, but it is a useful constraint.

## 12-column grid and mobile

The most common mobile layouts are based on 4 columns, as a simplification of the 12-column grid while maintaining its proportion and flexibility.

Warnings:

- in a 12-column grid, the column can be too small for one-column elements;
- 2, 4, or 8 columns can be used;
- pay attention to the placement of an odd number of elements in a row.

## Margins and gutters

After the number of columns, define margins and gutters.

iOS and Android systems suggest minimum margins of 16pt. Gutters must not be too large: on narrow screens they risk breaking the rhythm.

It is useful to proportion gutters and margins to manage elements that exit the layout, such as carousels.

## Hard grid and soft grid

| Approach | Description |
| --- | --- |
| Hard grid | Elements arranged rigidly on an 8pt or 4pt grid: icons, typography, spacing, margins, padding. |
| Soft grid | Mainly defines spacing between elements, without a rigid grid always active. |

## Red Square Method

Soft grid approach that turns the grid into recognizable space modules:

- 8pt and 16pt for internal component spacing;
- 24pt for components and layout structure;
- 48pt and 64pt to separate main sections.

It helps designers, developers, and stakeholders discuss layouts using the same language.

## Interface typography

Typography is central in UI: it gives clarity, hierarchy, and effectiveness.

Terms:

| Term | Definition |
| --- | --- |
| Typeface | Typographic family, for example Helvetica. |
| Font | Specific variant of a typeface: weight, style, size. |
| Line length | Length of a line of text. |
| Line height / spacing | Vertical space between lines. |
| Kerning | Space between specific pairs of letters. |
| Tracking / letter spacing | Spacing between letters in a block of text. |

## Typographic scale

A typographic scale is a system of sizes based on proportional ratios, not random values.

It is used to:

- create visual hierarchy;
- guide reading;
- maintain coherence across screens and components;
- make the design scalable.

Practical rules:

- typeface: 1 or 2 maximum;
- font weight: 2 or 3 maximum;
- font size: 3-5 maximum;
- mobile body text: about 16-17pt;
- large headings: contrast with the body, but avoid 4-5 lines with 1-2 words per line;
- mobile line length: 30-50 characters;
- line length on large screens: 6-9 words per line.

## Headings and screen readers

H1-H6 headings were created to structure content semantically, not to define visual style.

Rules:

- use only one H1 per page;
- use multiple H2s for sections;
- make the structure navigable for blind people;
- do not use headings only for visual size.

## Whitespace

White space is the empty space between letters, words, lines, and layout elements. It influences readability and hierarchy. Letter spacing and line-height are fundamental tools.

## Buttons and CTAs

Buttons communicate actions the user can perform. The distinction between button and link is important:

- `link`: navigates to another section or resource;
- `button`: performs an action, for example send, cancel, create, upload.

## Button states

| State | Meaning |
| --- | --- |
| Normal | Interactive and enabled component. |
| Focus | Element highlighted by keyboard or alternative input. |
| Hover | Cursor over the CTA. |
| Active / pressed | User has clicked or tapped. |
| Progress / loading | Action is not immediate; communicates completion in progress. |
| Disabled | Currently non-interactive, but potentially able to be enabled. |

States must be distinct but not drastically alter the component or create visual noise.

## Action hierarchy

Styles differentiate more and less important actions:

- primary;
- secondary;
- tertiary.

Usually there is a single primary button and multiple secondary or tertiary actions. Coherence improves speed, accuracy, and sense of control.

## Minimum touch size

Mobile interactive elements should start from 44×44pt. Width can be equal to or greater than height. On mobile, CTAs often occupy the full width of the layout.

## Gestures

Gestures are touch methods alternative to classic CTAs:

- swipe for contextual actions;
- double tap for like;
- long press for secondary actions.

Good practice: use them as alternatives, not as the only way to perform essential actions.

## Cards

Cards show content such as products, information, people, or actions. They act as a preview or excerpt of a detail page.

Typical anatomy:

- image or video;
- title;
- short summary;
- optional actions.

Patterns:

- horizontal: catalogs or highly data-rich elements;
- vertical: basis for side carousels;
- grid: news or e-commerce;
- stack: simple ordering or specific actions such as swipe away.

Cards group information, make content scannable, and allow clear actions on a content unit.

## Images and aspect ratio

Aspect ratio is the proportion between width and height. Recommended ratios: 16:9, 3:2, 4:3, 1:1, 3:4, 2:3, 9:16.

It is used to:

- maintain balanced proportions;
- build harmonious and readable products;
- guarantee visual coherence.

Responsive cropping:

- maintain the same aspect ratio;
- adapt to different ratios;
- maintain fixed height.

## Images and accessibility

First question: is the image essential to understanding the product or service?

- If yes, it should be carefully described with meaningful textual `alt`.
- If no, it should be declared decorative, for example `alt=""`.

Image accessibility must be designed intentionally, not added at the end.

## Mobile touch, range, and reach

Smartphones are touch devices, often used with one hand. The thumb does much of the work. A casually assembled interface can become frustrating.

Patterns such as hamburger menus can be less visible and less reachable; in many contexts, the bottom bar makes primary navigation more visible and accessible.

## Source

Based on `01 - Visual & UI Design.pdf`, with connections to `14-ui-colori-icone-immagini-mood.md`.
