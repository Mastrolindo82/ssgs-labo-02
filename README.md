# Labo-String

**Labo-String** è una Command-Line Interface (CLI) sviluppata in Node.js che offre utilità per la manipolazione di stringhe. Il progetto è pensato come esercizio pratico per consolidare le best practice di sviluppo, testing e gestione della configurazione in ambiente Node.js.

## Funzionalità

La CLI mette a disposizione le seguenti operazioni:

- **Inversione di una stringa**  
  Restituisce la stringa di input invertita.
- **Verifica se una stringa è palindroma**  
  Indica se la stringa fornita è palindroma (uguale letta da sinistra a destra e viceversa).
- **Troncamento di una stringa**  
  Tronca la stringa a una lunghezza massima specificata.
- **Conteggio delle occorrenze di ciascun carattere**  
  Restituisce un oggetto con il conteggio di ogni carattere presente nella stringa.

## Installazione

1. **Clona il repository**
   ```sh
   git clone https://github.com/Mastrolindo82/ssgs-labo-02
   cd ssgs-labo-02
   ```

2. **Installa le dipendenze**
   ```sh
   npm install
   ```

## Utilizzo

Esegui la CLI tramite Node.js passando i parametri richiesti:

```sh
node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```

### Mappatura delle funzioni

| Numero | Funzione                | Parametri aggiuntivi         | Esempio di utilizzo                                 |
|--------|------------------------|------------------------------|-----------------------------------------------------|
| 1      | Inverti Stringa        | Nessuno                      | `node index.js 1 "ciao"`                            |
| 2      | Controlla Palindromo   | Nessuno                      | `node index.js 2 "anna"`                            |
| 3      | Tronca Stringa         | lunghezza_massima (numero)   | `node index.js 3 "abcdef" 4`                        |
| 4      | Conta Caratteri        | Nessuno                      | `node index.js 4 "banana"`                          |

## Script disponibili

Nel file `package.json` sono definiti i seguenti script utili:

- `npm start`  
  Avvia la CLI (puoi modificare lo script per passare i parametri desiderati).
- `npm test`  
  Esegue i test unitari.
- `npm run coverage`  
  Genera un report di copertura del codice (se configurato con Jest).

## Testing

Il progetto include test unitari per tutte le funzioni principali, implementati con [Jest].

Per eseguire i test:
```sh
npm test
```

Per generare il report di copertura:
```sh
npm run coverage
```

## Struttura del progetto

```
ssgs-labo-02/
├── src/
│   └── stringUtils.js      # Funzioni di utilità sulle stringhe
├── test/
│   └── stringUtils.test.js # Test unitari
├── index.js                # Entry point della CLI
├── package.json
├── .gitignore
└── README.md
```

## Best Practice e CI/CD

- Il progetto segue un flusso Git professionale: ogni modifica significativa viene sviluppata su branch dedicati e integrata tramite Pull Request.
- È consigliato configurare GitHub Actions per automatizzare i test e la generazione dei report di copertura.
- Il file `.gitignore` è stato aggiornato per escludere file e cartelle non rilevanti dal versionamento.

## Autore

[Leander-Sebastian Lange]

---

> **Nota:** Questo progetto nasce come esercizio didattico per consolidare le competenze su Node.js, testing, Git e CI/CD.

## aggiornamenti 
### [fix/initial-setup]
- Aggiornato il README.md con descrizione dettagliata del progetto, istruzioni di installazione e utilizzo, mappatura delle funzioni e struttura delle cartelle.
- Aggiornato il file `package.json`:
  - Migliorata la descrizione.
  - Impostato `main` su `index.js`.
  - Aggiunti script: `start`, `test` (Jest), `coverage`.
  - Aggiunte parole chiave (`keywords`).
  - Valorizzato il campo `author`.
  - Aggiunta la dipendenza di sviluppo `jest`.
- Aggiornato `.gitignore` per includere:
  - Cartella `node_modules/`
  - File di log e lock tipici di Node.js
  - File di ambiente `.env*`
  - Cartelle di coverage dei test
  - Configurazioni di VS Code
  - File temporanei e di sistema (es. `.DS_Store`)

### [feature/add-tests]
- Creato il branch dedicato per i test unitari.
- Integrato e configurato Jest per l'esecuzione dei test e la generazione del report di code coverage.
- Implementati test unitari esaustivi per tutte le funzioni di `stringUtils.js`, coprendo casi standard e casi limite.
- Ottenuta una copertura del codice (code coverage) del 100% su statements, branches, functions e lines.
- Aggiornata la documentazione per includere istruzioni sull'esecuzione dei test e sulla coverage.

### [ci-workflow-coverage]
- Aggiunto il file `.github/workflows/ci.yml` per automatizzare l’esecuzione dei test unitari e la generazione del report di code coverage tramite GitHub Actions.
- Il workflow viene eseguito automaticamente ad ogni push e pull request verso il branch `main`.
- Il job esegue le seguenti operazioni in sequenza:
  1. Checkout del repository.
  2. Setup dell’ambiente Node.js (versione 20).
  3. Installazione delle dipendenze tramite `npm install`.
  4. Esecuzione dei test e generazione del report di coverage (`npm run coverage`).
  5. Upload della cartella `coverage/` come artefatto scaricabile dai risultati del workflow.
- Il report HTML di code coverage è ora accessibile come artefatto direttamente dalla sezione "Actions" di GitHub.

---
