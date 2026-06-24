# 📥 _inbox — carica qui le immagini

Questa è la cartella dove **carichi le immagini per Claude**.

## Come funziona

1. Trascina qui dentro l'immagine (qualsiasi nome, qualsiasi formato: png, jpg, screenshot…).
2. Scrivi a Claude cosa farne, in parole tue. Esempi:
   - «la foto che ho messo nell'inbox mettila come cover di Libraccio»
   - «usa l'immagine nuova al posto del render della scansione»
3. Claude la prende da qui, la sistema (converte in `.webp`, rinomina, ottimizza) e la sposta al posto giusto, poi aggiorna l'HTML.

Non serve che tu pensi a nomi o formati: ci pensa Claude.

> Dopo l'uso, l'immagine sorgente in questa cartella viene rimossa: l'inbox resta sempre pulita.

## Dove finiscono le immagini (struttura del sito)

```
assets/
├── _inbox/        ← qui carichi tu
├── libraccio/
│   ├── feat/      cover e immagini grandi
│   ├── render/    schermate dell'app (interfacce)
│   ├── pers/      foto delle personas
│   ├── team/      foto del team
│   └── ui/        screenshot UI singoli
└── nite/          immagini del progetto Nite
```
