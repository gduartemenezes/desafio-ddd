import { createContainer, asValue, asClass } from 'awilix';

import Server from './interfaces/http/server';
import Application from './app/app';

const container = createContainer();

container.register({
  server: asClass(Server).singleton(),
  // Application layer
  app: asClass(Application).singleton(),
});

export default container;
