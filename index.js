// index.js
import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  });
  
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const { render } = await vite.ssrLoadModule('/src/entry-server.js');
      const html = render();

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
  });
}

createServer();
