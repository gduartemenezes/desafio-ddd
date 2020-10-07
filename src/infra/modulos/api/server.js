import express from 'express';
import http from 'http';
import { loadControllers, scopePerRequest } from 'awilix-express';

class Server {
  constructor({ config, logger }) {
    this.config = config;
    this.logger = logger;
    this.app = new express();
  }

  async create(container) {
    this.app
      .use(scopePerRequest(container))
      .use(loadControllers('./routes/*.js'))
      .use(express.json());

    const appServer = http.createServer(this.app.callback());

    return appServer;
  }

  async start(container) {
    const appServer = await this.create(container).catch((error) => {
      this.logger.error('Erro ao tentar iniciar o servidor', error);
      process.exit(1);
    });
    appServer &&
      appServer.listen(this.config.server.port, () => {
        this.logger.info('App is running');
      });
  }
}

export default new Server();
