import { Address } from "../entities/Address";
import { Client } from "../entities/Client";

export interface IClientRepository {
  findByCpf(cpf: string): Promise<void>;
  findByRg(rg: string): Promise<void>;
  findByPhone(phone: string): Promise<void>;
  save(client: Client, addresses: Address[]): Promise<void>;
} 