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
   git clone <URL-del-tuo-repository>
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

Il progetto include test unitari per tutte le funzioni principali, implementati con [Jest](https://jestjs.io/).

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