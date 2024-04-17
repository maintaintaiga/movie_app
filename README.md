# Movie App Project

## Required Environment Vars

- NEXT_PUBLIC_TMDB_API_URL: <path to the tmdb api>
- NEXT_PUBLIC_TMDB_API_KEY: <api key created via tmdb>

## To run on development

```bash
npm ci
npm run dev
```

_navigate to http://localhost:3000_

---

## To build for production

```bash
npm i --production
npm run build
```

---

## Deploy on a server

- Zip project, excluding .vscode, .next, node_modules and .env
- Transfer zip file to server, i.e. filezilla
- In desired location -

```bash
unzip <file_name>
cd <folder>
npm i --production
npm run build
```

- Utilise pm2 to control running of the app
  `see pm2.config.js in project`

```bash
    pm2 start <location>/pm2.config.js
```
