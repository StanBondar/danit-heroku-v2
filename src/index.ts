import 'reflect-metadata';

import express, { Request, Response } from 'express';

import { registerRouters } from './api';
import { EnvConfig } from './config';
import { createConnection } from 'typeorm';

const app = express();

console.log(EnvConfig.ENV);

app.get('/', async (req: Request, res: Response) => {
  res.redirect('/api/docs');
});

registerRouters(app);

createConnection().then(() => {
  const a = app.routes;
  console.log(a);
  app.listen(EnvConfig.PORT, () =>
    console.log(`Started on port ${EnvConfig.PORT}`)
  );
  console.log('Connected to DB!');
});
