import { Address } from "../../entities/Address"
import { Client } from "../../entities/Client"
import { IEditClientRequestDTO } from "../../useCases/Client/EditClient/EditClientDTO"
import { IClientRepository } from "../IClientRepository"

export class InMemoryClientRepository implements IClientRepository {
  public items: Client[] = []

  findByCpf(cpf: string): Promise<void> {
    throw new Error("Method not implemented.")
  }
  findByRg(rg: string): Promise<void> {
    throw new Error("Method not implemented.")
  }
  findByPhone(phone: string): Promise<void> {
    throw new Error("Method not implemented.")
  }
  async findById(id: string): Promise<Client> {
    const finder = this.items.find((item) => {
      return item.id === id
    })

    if (!finder) throw new Error('Cliente não encontrado')
    return finder
  }
  findAll(): Promise<Client[]> {
    throw new Error("Method not implemented.")
  }
  save(client: Client, addresses: Address[]): Promise<void> {
    throw new Error("Method not implemented.")
  }
  edit(userId: string, clientPayload: IEditClientRequestDTO): Promise<void> {
    throw new Error("Method not implemented.")
  }
  remove(userId: string): Promise<void> {
    throw new Error("Method not implemented.")
  }
}