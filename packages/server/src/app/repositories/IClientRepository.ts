import { Address } from "../entities/Address";
import { Client } from "../entities/Client";
import { IEditClientRequestDTO } from "../useCases/Client/EditClient/EditClientDTO";

export interface IClientRepository {
  findByCpf(cpf: string): Promise<void>;
  findByRg(rg: string): Promise<void>;
  findByPhone(phone: string): Promise<void>;
  findById(id: string): Promise<Client>;
  findAll(): Promise<Client[]>;
  save(client: Client, addresses: Address[]): Promise<void>;
  edit(userId: string, clientPayload: IEditClientRequestDTO): Promise<void>;
  remove(userId: string): Promise<void>;
} 