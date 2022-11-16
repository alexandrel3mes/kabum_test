import { IAddressRepository } from "../../../repositories/IAddressRepository";

export class FindAddressUseCase {
  constructor(private addressRepo: IAddressRepository) {}
  async findAll() {
    const addresses = await this.addressRepo.findAll()
    return addresses;
  }

  async findById(id: string) {
    const address = await this.addressRepo.findById(id)
    return address;
  }
}