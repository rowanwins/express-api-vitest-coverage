import app from './app';
import { type Express } from 'express';

function startupServer(): Promise<Express> {
  return new Promise((resolve) => {
    const port = process.env.PORT || 1234;
    app.listen(port, () => {
      /* eslint-disable no-console */
      console.log(`Listening: http://localhost:${port}`);
      /* eslint-enable no-console */
      resolve(app);
    });  
  });
}

if (process.env.NODE_ENV !== 'test') {
  startupServer().then(() => {
    console.log('Server Running');
  }).catch(err => console.log(err));
}

export async function startupTestServer() {
  const server = await startupServer();
  return server;
}