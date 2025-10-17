# SathiLove

A small React + Express app (Vite dev) serving a client and API from a single Express server.

Quick start

1. Install Node.js (20+) and npm. Using nvm is recommended.

2. Install dependencies:

```bash
npm install
```

3. Run the development server (serves client + API on one port):

```bash
npm run dev
# open http://localhost:5000
```

Build & run production:

```bash
npm run build
PORT=5000 npm start
```

Notes
- The server uses the `PORT` environment variable (defaults to 5000).
- If you get asset-resolve errors, ensure files in `attached_assets/generated_images` match the imports in `client/src/components`.
