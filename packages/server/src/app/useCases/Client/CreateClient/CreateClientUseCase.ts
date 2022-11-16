import { Address } from "../../../entities/Address";
import { Client } from "../../../entities/Client";
import { IClientRepository } from "../../../repositories/IClientRepository";
import { ICreateClientRequestDTO } from "./CreateClientDTO";

export class CreateClientUseCase {
  constructor(private clientRepo: IClientRepository) {}
  async clientExistsByCpf(cpf: string) {
    await this.clientRepo.findByCpf(cpf);
  }

  async clientExistsByPhone(phone: string) {
    await this.clientRepo.findByPhone(phone);
  }

  async clientExistsByRg(rg: string) {
    await this.clientRepo.findByRg(rg);
  }

  async execute(data: ICreateClientRequestDTO) {
    await this.clientExistsByCpf(data.cpf);
    await this.clientExistsByPhone(data.phone);
    await this.clientExistsByRg(data.rg);

    const client = new Client(data);
    const addresses = data.addresses.map((address) => {
      return new Address(address, client)
    })

    await this.clientRepo.save(client, addresses)
  }
}