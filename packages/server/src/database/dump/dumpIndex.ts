import { EntityManager } from 'typeorm';
import dataSource from '..';
import DumpUser from './DumpUser';

async function Dump(): Promise<void> {
  try {
    const source = await dataSource();
    source.initialize();
    source.transaction(async (transaction: EntityManager) => {
      await DumpUser.toSave(transaction);
    });
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
}

Dump();
