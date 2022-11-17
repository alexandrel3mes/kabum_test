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
    const finder = this.items.find((item) => {
      return item.id === addressId
    })

    if (finder) {
      const index = this.items.indexOf(finder)

      if (addressPayload.address) this.items[index].address = addressPayload.address
      if (addressPayload.zipcode) this.items[index].zipcode = addressPayload.zipcode
      if (addressPayload.number) this.items[index].number = addressPayload.number
      if (addressPayload.complement) this.items[index].complement = addressPayload.complement
      if (addressPayload.district) this.items[index].district = addressPayload.district
      if (addressPayload.city) this.items[index].city = addressPayload.city
      if (addressPayload.state) this.items[index].state = addressPayload.state
      if (addressPayload.reference) this.items[index].reference = addressPayload.reference
    }


  }

  async remove(addressId: string): Promise<void> {
    const address = await this.findById(addressId)
    const filter = this.items.filter((item) => item.id !== address.id)
    this.items = filter
  }
}