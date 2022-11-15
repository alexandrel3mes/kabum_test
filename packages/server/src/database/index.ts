import 'dotenv/config';
import 'reflect-metadata';
import Address from '../app/models/Address.entity';
import Client from '../app/models/Client.entity';
import User from '../app/models/User.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import createUser1663799908372 from './migration/1663799908372-createUser';
import createClient1663799908373 from './migration/1663799908373-createClient';
import createAddress1663799908374 from './migration/1663799908374-createAddress';
import { createDatabase } from 'typeorm-extension';

const PORT = Number(process.env.DB_PORT) || 3306 

const dataSource = async () => {
  const options: DataSourceOptions = {
    type: 'mysql',
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: PORT,
    username: process.env.DB_USER,
    synchronize: false,
    logging: false,
    migrationsRun: true,
    entities: [
      User,
      Client,
      Address,
    ],
    subscribers: [],
    migrations: [
      createUser1663799908372,
      createClient1663799908373,
      createAddress1663799908374,
    ],
    timezone: '-03:00',
  }

  await createDatabase({ options, ifNotExist: true });
 
  return new DataSource(options);
}

export default dataSource;
