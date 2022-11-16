import { App } from './app';
import 'dotenv/config';
import dataSource from './database';

const PORT = process.env.APP_PORT || 3001;

const app = new App();

(async () => {
  const source = await dataSource;
  source
  .initialize()
  .then(() => {
    app.start(PORT);
  })
  .catch((err) => {
    console.log(err)
  })
})();


