import { Address } from "../../entities/Address";
import { IEditAddressRequestDTO } from "../../useCases/Address/EditAddress/EditAddressDTO";
import { IAddressRepository } from "../IAddressRepository";

export class InMemoryAddressRepository implements IAddressRepository {
  public items: Address[] = []

  async save(address: Address): Promise<void> {
    this.items.push(address)
  }
  async findById(id: string): Promise<Address> {
    const finder = this.items.find((item) => {
      return item.id === id
    })

    if (!finder) throw new Error('Endereço não encontrado')
    return finder
  }

  async findAll(): Promise<Address[]> {
    return this.items
  }

  async edit(addressId: string, addressPayload: IEditAddressRequestDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async remove(addressId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}