import { IClientRepository } from "../IClientRepository";
import dataSource from "../../../database";
import { EntityManager } from "typeorm";
import { Client } from "../../entities/Client";
import { Address } from "../../entities/Address";
import ClientModel from "../../models/Client.entity";
import AddressModel from "../../models/Address.entity";
import throwCustomError from "../../../utils/throwCustomError";
import errorMessages from "../../error/errorMessages";
import { IEditClientRequestDTO } from "../../useCases/EditClient/EditClientDTO";

export class TypeOrmClientRepository implements IClientRepository {
  async remove(userId: string): Promise<void> {
    const source = await dataSource

    await source.getRepository(ClientModel).delete(userId)
  }

  async edit(userId: string, clientPayload: IEditClientRequestDTO): Promise<void> {
    const source = await dataSource
    const updatedClient: IEditClientRequestDTO = {}
    if (clientPayload.birthday) updatedClient.birthday = clientPayload.birthday
    if (clientPayload.name) updatedClient.name = clientPayload.name
    if (clientPayload.cpf) updatedClient.cpf = clientPayload.cpf
    if (clientPayload.rg) updatedClient.rg = clientPayload.rg
    if (clientPayload.phone) updatedClient.phone = clientPayload.phone

    await source.transaction(async (transaction: EntityManager) => {
      await transaction.getRepository(ClientModel)
      .update(userId, updatedClient)
    })
  }
  

  async findById(id: string): Promise<Client> {
    const source = await dataSource

    const client = await source.getRepository(ClientModel).findOne({
      where: { id },
      relations: {
        addresses: true
      }
    })

    if (!client) return throwCustomError('notFoundError', errorMessages.NOT_FOUND_CLIENT);

    return client
  }

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

  async findAll(): Promise<Client[]> {
    const source = await dataSource
    const clients = await source.getRepository(ClientModel).find({
      relations: {
        addresses: true
      }
    })

    if (clients.length === 0) return throwCustomError('validationError', errorMessages.NO_CLIENTS);
    return clients
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