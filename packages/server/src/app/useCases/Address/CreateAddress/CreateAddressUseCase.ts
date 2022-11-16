import { IClientRepository } from "../../../repositories/IClientRepository";
import { IAddressRepository } from "../../../repositories/IAddressRepository";
import { ICreateAddressRequestDTO } from "./CreateAddressDTO";
import { Address } from "../../../entities/Address";

export class CreateAddressUseCase {
  constructor(
    private addressRepo: IAddressRepository,
    private clientRepo: IClientRepository
  ) {}
  async execute(clientId: string, data: ICreateAddressRequestDTO) {
    const client = await this.clientRepo.findById(clientId)
    const address = new Address(data, client)
    await this.addressRepo.save(address)
  }
}