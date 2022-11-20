import { App } from './app';
import 'dotenv/config';
import dataSource from './database';

const app = new App();

(async () => {
  const source = await dataSource;
  source
  .initialize()
  .then(() => {
    app.start(3001);
  })
  .catch((err) => {
    console.log(err)
  })
})();


