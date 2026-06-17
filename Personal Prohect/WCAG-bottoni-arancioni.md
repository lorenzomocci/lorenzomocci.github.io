# Test WCAG 2.1 — Bottoni arancioni con testo bianco

**Data:** 2026-06-11
**Ambito:** bottoni primari arancioni dell'app Nite (`.cta-btn.active`, `.btn-continue`, `.btn-primary`, `.btn-cta`, `.city-edit-btn`).
**Metodo:** rapporto di contrasto WCAG 2.1 (luminanza relativa sRGB, formula ufficiale W3C).
**Colori rilevati dal codice:**

| Stato | Sfondo | Bordo | Testo | Dove |
|-------|--------|-------|-------|------|
| Default | `#c24c00` | `#943a00` | `#edeced` · 16px peso 500–600 | tutti i CTA |
| Hover | `#d45500` | `#b53700` | `#edeced` | tutti i CTA |
| Pressed | `#943a00` | `#6b1800` | `#edeced` | tutti i CTA |
| Variante | `#c24c00` | `#943a00` | `#ffffff` · 12px peso 600 | `city-edit-btn` (home) |

> Nota: a 16px con peso 500–600 il testo è "normale" per WCAG (il criterio "large text"
> richiede ≥ 24px, oppure ≥ 18,66px in grassetto ≥ 700). Si applicano quindi le soglie
> piene: **AA 4,5:1 · AAA 7:1** (large: AA 3:1 · AAA 4,5:1).

---

## 1 · Contrasto del testo (SC 1.4.3 / 1.4.6)

| Combinazione | Rapporto | AA (4,5:1) | AA large (3:1) | AAA (7:1) |
|--------------|---------:|:----------:|:--------------:|:---------:|
| `#edeced` su Default `#c24c00` | **4,12:1** | ❌ | ✅ | ❌ |
| `#edeced` su Hover `#d45500` | **3,50:1** | ❌ | ✅ | ❌ |
| `#edeced` su Pressed `#943a00` | **6,22:1** | ✅ | ✅ | ❌ |
| `#ffffff` su Default `#c24c00` | **4,85:1** | ✅ | ✅ | ❌ |
| `#ffffff` su Hover `#d45500` | **4,12:1** | ❌ | ✅ | ❌ |

## 2 · Contrasto non testuale (SC 1.4.11, soglia 3:1)

Il bottone deve essere distinguibile dallo sfondo dell'app (`#100d12`).

| Componente | Rapporto | Esito |
|------------|---------:|:-----:|
| Default `#c24c00` vs sfondo `#100d12` | **3,98:1** | ✅ |
| Hover `#d45500` vs sfondo `#100d12` | **4,68:1** | ✅ |
| Pressed `#943a00` vs sfondo `#100d12` | **2,63:1** | ⚠️ sotto soglia |
| Bordo `#943a00` vs riempimento `#c24c00` | 1,51:1 | n/a (decorativo) |

⚠️ Lo stato Pressed da solo non raggiunge 3:1 sullo sfondo, ma è uno stato transitorio
(< 1 s sotto il dito) e il bottone resta identificabile dal contesto: rischio basso.

---

## 3 · Sintesi

- **Pressed** è l'unico stato che passa l'AA per il testo (6,22:1).
- **Default** fallisce l'AA per un soffio (4,12 vs 4,5) — colpa del testo `#edeced`,
  che non è bianco puro: con `#ffffff` lo stesso bottone **passa** (4,85:1).
- **Hover** fallisce in entrambi i casi: lo schiarimento del fondo (`#d45500`)
  peggiora il contrasto proprio nello stato in cui l'utente sta per agire.
- Nessuna combinazione raggiunge l'AAA (7:1) — atteso per arancioni saturi: per
  l'AAA servirebbe testo scuro su fondo chiaro o un arancione molto più scuro.

## 4 · Raccomandazioni (in ordine di impatto/sforzo)

1. **Testo dei CTA da `#edeced` a `#ffffff`** — una riga di CSS, il Default passa
   l'AA (4,85:1). È la correzione con il miglior rapporto costo/beneficio.
2. **Hover più scuro invece che più chiaro** — candidati verificati con testo bianco:
   - `#c44e00` → 4,73:1 ✅ (quasi indistinguibile dall'attuale, vira appena più scuro)
   - `#b54500` → 5,50:1 ✅ (più marcato, massimo margine)
   In alternativa, mantenere il fondo `#c24c00` e segnalare l'hover con bordo/glow.
3. *(Opzionale)* Pressed: già oggi il migliore per il testo; se si vuole rispettare
   1.4.11 anche lì, aggiungere un bordo chiaro (es. `1px rgba(255,255,255,.35)`)
   nello stato attivo.

**Con le correzioni 1 + 2:** tutti e tre gli stati ≥ 4,5:1 → **AA pieno** sul testo,
e 1.4.11 resta soddisfatto per Default e Hover.

---

## 5 · Correzioni applicate (2026-06-11)

Le raccomandazioni 1 e 2 sono state applicate a tutto il prototipo e pubblicate:

- Testo dei bottoni arancioni: `#edeced` / `var(--text-sec)` → **`#ffffff`** (31 regole).
- Hover: `#d45500` → **`#c44e00`** (35 occorrenze).

| Stato | Combinazione finale | Rapporto | AA |
|-------|---------------------|---------:|:--:|
| Default | `#fff` su `#c24c00` | 4,85:1 | ✅ |
| Hover | `#fff` su `#c44e00` | 4,73:1 | ✅ |
| Pressed | `#fff` su `#943a00` | 7,33:1 | ✅ (anche AAA) |

**Esito: AA superato in tutti gli stati dei bottoni primari.**
