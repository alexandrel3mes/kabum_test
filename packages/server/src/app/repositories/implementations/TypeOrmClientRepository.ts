import { IClientRepository } from "../IClientRepository";
import dataSource from "../../../database";
import { EntityManager } from "typeorm";
import { Client } from "../../entities/Client";
import { Address } from "../../entities/Address";
import ClientModel from "../../models/Client.entity";
import AddressModel from "../../models/Address.entity";
import throwCustomError from "../../../utils/throwCustomError";
import errorMessages from "../../error/errorMessages";

export class TypeOrmClientRepository implements IClientRepository {
  async findByCpf(cpf: string): Promise<void> {
    const source = await dataSource

    const client = await source.getRepository(ClientModel).findOne({
      where: { cpf }
    })

    if (client) return throwCustomError('validationError', errorMessages.CLIENT_ALREADY_EXIST);
  }

  async findByRg(rg: string): Promise<void> {
    const source = await dataSource

    const client = await source.getRepository(ClientModel).findOne({
      where: { rg }
    })

    if (client) return throwCustomError('validationError', errorMessages.CLIENT_ALREADY_EXIST);
  }

  async findByPhone(phone: string): Promise<void> {
    const source = await dataSource

    const client = await source.getRepository(ClientModel).findOne({
      where: { phone }
    })

    if (client) return throwCustomError('validationError', errorMessages.CLIENT_ALREADY_EXIST);
  }

  async save(client: Client, addresses: Address[]): Promise<void> {
    const source = await dataSource

    await source.transaction(async (transaction: EntityManager) => {
      await transaction
        .getRepository(ClientModel)
        .save(client);

      await Promise.all(addresses.map(async (address) => {
        await transaction
        .getRepository(AddressModel)
        .save(address)
      }))
    });
  }
  
}