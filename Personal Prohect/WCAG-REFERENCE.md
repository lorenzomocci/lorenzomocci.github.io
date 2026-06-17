# WCAG 2.1 — Quick Reference per UI Review

> Usare questo file prima di ogni audit. Scansionare dall'alto verso il basso, verificare ogni sezione.

---

## 1. CONTRASTO COLORE (1.4.3 — AA obbligatorio)

### Soglie minime
| Tipo testo | Ratio minimo | Note |
|-----------|-------------|------|
| Testo normale (< 18px regular / < 14px bold) | **4.5:1** | La maggior parte del body text |
| Testo grande (≥ 18px regular / ≥ 14px bold) | **3:1** | Titoli, heading |
| UI component (bordi input, icone significative) | **3:1** | Checkbox border, icone che veicolano info |
| Testo decorativo / logo | esente | Non si applica |
| Testo disabilitato | esente | Stato disabilitato esplicitamente comunicato |

### Colori progetto su sfondo #100d12
| Valore alpha rgba(255,255,255, X) | Hex approssimativo | Ratio su #100d12 | Pass/Fail |
|----------------------------------|-------------------|-----------------|-----------|
| .20 | #3a3740 | ~1.3:1 | ❌ FAIL tutto |
| .22 | #3d3a44 | ~1.4:1 | ❌ FAIL tutto |
| .25 | #413d48 | ~1.6:1 | ❌ FAIL tutto |
| .28 | #45424c | ~1.8:1 | ❌ FAIL tutto |
| .30 | #48454f | ~1.9:1 | ❌ FAIL tutto |
| .38 | #534f58 | ~2.4:1 | ❌ FAIL tutto |
| .40 | #554f5a | ~2.5:1 | ❌ FAIL tutto |
| .45 | #5b575f | ~2.8:1 | ❌ FAIL tutto |
| .50 | #605c65 | ~3.1:1 | ✅ large text solo |
| .55 | #666168 | ~3.4:1 | ✅ large/UI, ❌ normal |
| .60 | #6b676e | ~3.7:1 | ✅ large/UI, ❌ normal |
| .62 | #6d6971 | ~3.8:1 | ✅ large/UI, ❌ normal |
| .65 | #716d74 | ~4.0:1 | ✅ large/UI, ❌ normal |
| .70 | #777378 | ~4.4:1 | ✅ large/UI, ~❌ normal |
| .72 | #79757a | ~4.5:1 | ✅ tutto (borderline) |
| .75 | #7c787e | ~4.6:1 | ✅ tutto |
| .78 | #7f7b81 | ~4.8:1 | ✅ tutto |
| 1.0 (#f7f6f8) | #f7f6f8 | ~20:1 | ✅ tutto |

### Regola pratica per questo progetto
- **Testo body (13-16px)** → minimo `.75` opacity
- **Testo secondario / label** → minimo `.72` opacity
- **Uppercase label 10-11px bold** → accettabile `.55` (trattato come UI component)
- **Icone decorative** → esenti (aggiungere aria-hidden="true")
- **Icone informative** → minimo `.55` (UI component 3:1)

### Colori speciali
| Colore | Su #100d12 | Pass |
|--------|-----------|------|
| #e8b432 (attention) | ~5.2:1 | ✅ tutto |
| #34d399 (green confirmed) | ~7.8:1 | ✅ tutto |
| #1ed760 (spotify) | ~9.1:1 | ✅ tutto |
| #86efac (price chip) | ~14.7:1 | ✅ tutto |
| #c22b00 (primary-600) | ~2.1:1 | ❌ non usare come testo |
| #942000 (primary-700) | ~1.6:1 | ❌ non usare come testo |

---

## 2. FOCUS VISIBLE (2.4.7 — AA obbligatorio)

### Regola
Ogni elemento interattivo DEVE avere uno stile visibile quando riceve focus da tastiera.

### Pattern da applicare su OGNI button/a/input/[role=button]
```css
.elemento:focus-visible {
  outline: 2px solid rgba(255,255,255,.7);
  outline-offset: 2px;
}
/* Per elementi su sfondo colorato */
.btn-primary:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
/* Per Spotify (verde) */
.btn-spotify:focus-visible {
  outline: 2px solid #1ed760;
  outline-offset: 3px;
}
```

### Elementi che lo richiedono — checklist
- [ ] Tutti i `<button>`
- [ ] Tutti i `<a href>`
- [ ] Tutti gli `<input>`, `<select>`, `<textarea>`
- [ ] Qualsiasi `<div>` o `<span>` con `role="button"`, `role="tab"`, ecc.
- [ ] Elementi con `tabindex="0"`

---

## 3. TASTIERA (2.1.1 — A obbligatorio)

### DIV interattivi — sempre sbagliati senza fix
```html
<!-- ❌ NON accessibile -->
<div onclick="doSomething()">Click me</div>

<!-- ✅ Opzione 1: usa <button> -->
<button onclick="doSomething()">Click me</button>

<!-- ✅ Opzione 2: se deve restare div (es. contiene altri interattivi) -->
<div role="button" tabindex="0" onclick="doSomething()"
     onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();doSomething();}">
```

### Elementi collapsibili
```html
<div role="button" tabindex="0" aria-expanded="false" id="toggle">
<!-- JS: toggle.setAttribute('aria-expanded', isOpen.toString()) -->
```

### Ordine tab
- Deve seguire l'ordine visivo (top → bottom, left → right)
- Non usare `tabindex` positivi (es. tabindex="2") — rompono l'ordine naturale
- `tabindex="-1"` ok per elementi focus-only da JS (es. modali)

---

## 4. ARIA — NAME, ROLE, VALUE (4.1.2 — A obbligatorio)

### Bottoni icona (senza testo visibile)
```html
<!-- ❌ -->
<button><i class="ph ph-heart"></i></button>

<!-- ✅ -->
<button aria-label="Aggiungi ai preferiti">
  <i class="ph ph-heart" aria-hidden="true"></i>
</button>
```

### Toggle buttons
```html
<button aria-pressed="false" aria-label="Aggiungi ai preferiti">
  <i class="ph ph-heart" aria-hidden="true"></i>
</button>
<!-- JS: btn.setAttribute('aria-pressed', isActive.toString()) -->
<!-- JS: btn.setAttribute('aria-label', isActive ? 'Rimuovi' : 'Aggiungi') -->
```

### Iframe (Spotify, Maps, ecc.)
```html
<!-- ❌ -->
<iframe src="..."></iframe>

<!-- ✅ -->
<iframe title="Playlist della serata su Spotify" src="..."></iframe>
```

### Elementi con stato dinamico
```html
<!-- Loading state -->
<button aria-busy="true">...</button>

<!-- Espandibile -->
<div role="button" aria-expanded="false" aria-controls="panel-id">...</div>
<div id="panel-id" aria-hidden="true">...</div>
```

### Icone decorative — SEMPRE aria-hidden
```html
<i class="ph ph-map-pin" aria-hidden="true"></i>
<i class="ph ph-calendar-blank" aria-hidden="true"></i>
```

---

## 5. SEMANTICA HTML (1.3.1 — A obbligatorio)

### Struttura pagina
```html
<body>
  <header>  <!-- status bar, nav top -->
  <main>    <!-- contenuto principale -->
    <nav>   <!-- back button, tab bar -->
    <article> o <section aria-labelledby="id">
    <footer>  <!-- CTA bar -->
```

### Heading hierarchy — una sola H1, poi H2 per sezioni
```html
<h1>Marco's House Party</h1>   <!-- titolo evento -->
<h2>Info serata</h2>            <!-- sezioni -->
<h2>Dove</h2>
<h2>Atmosfera & musica</h2>
<!-- MAI saltare livelli (da H1 a H3 senza H2) -->
```

### Liste di definizioni per coppie label/valore
```html
<!-- ✅ Per info grid (Visibilità, Capienza, ecc.) -->
<dl>
  <div class="info-item">
    <dt class="info-label">Visibilità</dt>
    <dd class="info-val">Amici di amici</dd>
  </div>
</dl>
```

### Sezioni con titolo
```html
<!-- ❌ -->
<div class="sect-title">Info serata</div>
<div>...</div>

<!-- ✅ -->
<section aria-labelledby="sect-info">
  <h2 class="sect-title" id="sect-info">Info serata</h2>
  <div>...</div>
</section>
```

---

## 6. IMMAGINI (1.1.1 — A obbligatorio)

| Tipo immagine | Alt corretto |
|--------------|-------------|
| Informativa (comunica contenuto) | `alt="Descrizione del contenuto"` |
| Decorativa (pura estetica) | `alt=""` |
| Avatar / profilo | `alt="Foto di Marco"` |
| Icona standalone significativa | Usare `aria-label` sul parent button |
| Hero photo (sfondo) | `alt=""` (decorativa) |
| Avatar stack (nomi già in testo) | `alt=""` su ogni img, `aria-hidden="true"` sul container |

---

## 7. TOUCH TARGET SIZE (2.5.5 — AAA / best practice)

### Soglie
- **Minimo consigliato**: 44×44px (Apple HIG, WCAG AAA)
- **Minimo assoluto WCAG 2.2**: 24×24px

### Pattern per target piccoli
```css
/* Se il visuale deve restare 28px ma il tap area 44px */
.small-btn {
  width: 28px;
  height: 28px;
  position: relative;
}
.small-btn::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
}
```

### Bottoni nel progetto
| Elemento | Dimensione | Status |
|----------|-----------|--------|
| `.btn-rsvp` | 50px height | ✅ |
| `.btn-circle` | 50×50px | ✅ |
| `.hero__back` | 44×44px | ✅ |
| `.map-chevron` | 28×28px | ⚠️ piccolo |
| `.btn-open-maps` | 34px height | ⚠️ borderline |
| `.btn-spotify-login` | 32px height | ⚠️ borderline |

---

## 8. ANIMAZIONI (2.3.3 — AAA / best practice)

### Aggiungere SEMPRE questo blocco se ci sono animazioni
```css
@media (prefers-reduced-motion: reduce) {
  /* Animazioni loop (pulse, spin, float) */
  .map-pin__pulse,
  .map-pin__pulse2,
  .spin {
    animation: none;
  }
  /* Transizioni di layout */
  .map-visual-wrap,
  .expand-box,
  .map-chevron {
    transition: none;
  }
  /* Slide transitions di pagina */
  .page-content {
    transition: none !important;
  }
}
```

---

## 9. LINK VS BUTTON

| Caso | Elemento corretto |
|------|------------------|
| Naviga a un URL / nuova pagina | `<a href="...">` |
| Esegue un'azione JS (toggle, submit, modal) | `<button>` |
| Apre link esterno | `<a href="..." target="_blank" rel="noopener noreferrer">` |
| "Apri in Maps" | `<a>` (naviga a URL esterno) ✅ |
| "Condividi su WhatsApp" | `<a>` (apre wa.me URL) ✅ |
| Toggle mappa, RSVP, like | `<button>` ✅ |

---

## 10. FORM (cap. 8 — varie norme)

```html
<!-- ✅ Pattern corretto -->
<div class="field-group">
  <label for="event-title">Nome evento</label>
  <!-- Hint TRA label e input -->
  <span id="hint-title" class="hint">Max 60 caratteri</span>
  <input
    id="event-title"
    type="text"
    aria-describedby="hint-title error-title"
    aria-required="true"
    maxlength="60">
  <span id="error-title" role="alert" aria-live="polite"></span>
</div>
```

### Regole principali
- Label sempre SOPRA l'input (mai solo placeholder)
- Hint tra label e input, non sotto
- `aria-required="true"` su campi obbligatori
- `aria-describedby` lega hint + errori all'input
- Errori: `role="alert"` + `aria-live="polite"` per screen reader
- Non disabilitare il submit — validare on submit + mostrare errori

---

## 11. CHECKLIST RAPIDA PER OGNI NUOVA SCHERMATA

```
CONTRASTO
[ ] Tutti i testi body ≥ .75 opacity su #100d12
[ ] Tutti i testi label/secondari ≥ .72 opacity
[ ] Uppercase label 10px bold: ok da .55
[ ] Icone informative: ok da .55

FOCUS
[ ] :focus-visible su ogni button, a, input, [role=button]

TASTIERA
[ ] Nessun div/span onclick senza role+tabindex+keydown
[ ] Collapsibili hanno aria-expanded
[ ] Toggle hanno aria-pressed

ARIA
[ ] Tutti i bottoni icona hanno aria-label
[ ] Tutti gli iframe hanno title
[ ] Icone decorative hanno aria-hidden="true"
[ ] Immagini decorative hanno alt=""
[ ] Immagini informative hanno alt descrittivo

SEMANTICA
[ ] Una sola H1 per pagina
[ ] Sezioni hanno H2 (non div)
[ ] Info coppie usano dl/dt/dd
[ ] Landmarks: header, main, footer presenti

TOUCH
[ ] Bottoni principali ≥ 44px
[ ] Back button ≥ 44px

MOTION
[ ] @media (prefers-reduced-motion) presente se ci sono animazioni loop
```

---

## 12. ERRORI PIÙ FREQUENTI NEL PROGETTO

| Pattern sbagliato | Fix |
|------------------|-----|
| `color: rgba(255,255,255,.28)` su testo 13px | → `.75` |
| `color: rgba(255,255,255,.4)` su label | → `.72` |
| `<div class="sect-title">` | → `<h2 class="sect-title">` |
| `<div onclick="...">` | → `<button>` o aggiungere role+tabindex+keydown |
| `<button><i class="ph..."></i></button>` | → aggiungere `aria-label` |
| `<iframe src="...">` | → aggiungere `title="..."` |
| `<i class="ph ph-..."></i>` vicino a testo | → `aria-hidden="true"` |
| Nessun `:focus-visible` sui bottoni | → aggiungere per tutti |
| `width:36px;height:36px` su back button | → `44×44px` |
| Animazioni senza `prefers-reduced-motion` | → aggiungere media query |
