import { Address } from "../../entities/Address"
import { Client } from "../../entities/Client"
import { IEditClientRequestDTO } from "../../useCases/Client/EditClient/EditClientDTO"
import { IClientRepository } from "../IClientRepository"

export class InMemoryClientRepository implements IClientRepository {
  public items: Client[] = []

  async findByCpf(cpf: string): Promise<void> {
    const finder = this.items.find((item) => {
      return item.cpf === cpf
    })

    if (finder) throw new Error('Dados já usados')
  }

  async findByRg(rg: string): Promise<void> {
    const finder = this.items.find((item) => {
      return item.rg === rg
    })

    if (finder) throw new Error('Dados já usados')
  }

  async findByPhone(phone: string): Promise<void> {
    const finder = this.items.find((item) => {
      return item.phone === phone
    })

    if (finder) throw new Error('Dados já usados')
  }

  async findById(id: string): Promise<Client> {
    const finder = this.items.find((item) => {
      return item.id === id
    })

    if (!finder) throw new Error('Cliente não encontrado')
    return finder
  }

  async findAll(): Promise<Client[]> {
    return this.items
  }

  async save(client: Client, addresses: Address[]): Promise<void> {
    client.addresses = addresses
    this.items.push(client)
  }

  async edit(userId: string, clientPayload: IEditClientRequestDTO): Promise<void> {
    const finder = this.items.find((item) => {
      return item.id === userId
    })

    if (finder) {
      const index = this.items.indexOf(finder)

      if (clientPayload.name) this.items[index].name = clientPayload.name
      if (clientPayload.cpf) this.items[index].cpf = clientPayload.cpf
      if (clientPayload.birthday) this.items[index].birthday = clientPayload.birthday
      if (clientPayload.rg) this.items[index].rg = clientPayload.rg
      if (clientPayload.phone) this.items[index].phone = clientPayload.phone
    }
  }

  async remove(userId: string): Promise<void> {
    const user = await this.findById(userId)
    const filter = this.items.filter((item) => item.id !== user.id)
    this.items = filter
  }
}