import dataSource from "../../../database";
import { EntityManager } from "typeorm";
import { Address } from "../../entities/Address";
import AddressModel from "../../models/Address.entity";
import throwCustomError from "../../error/throwCustomError";
import errorMessages from "../../error/errorMessages";
import { IAddressRepository } from "../IAddressRepository";
import { IEditAddressRequestDTO } from "../../useCases/Address/EditClient/EditAddressDTO";

export class TypeOrmAddressRepository implements IAddressRepository {
  async remove(addressId: string): Promise<void> {
    const source = await dataSource

    await source.getRepository(AddressModel).delete(addressId)
  }

  async edit(addressId: string, clientPayload: IEditAddressRequestDTO): Promise<void> {
    const source = await dataSource
    const updatedAddress: IEditAddressRequestDTO = {}
    if (clientPayload.zipcode) updatedAddress.zipcode = clientPayload.zipcode
    if (clientPayload.address) updatedAddress.address = clientPayload.address
    if (clientPayload.number) updatedAddress.number = clientPayload.number
    if (clientPayload.complement) updatedAddress.complement = clientPayload.complement
    if (clientPayload.district) updatedAddress.district = clientPayload.district
    if (clientPayload.city) updatedAddress.city = clientPayload.city
    if (clientPayload.state) updatedAddress.state = clientPayload.state
    if (clientPayload.reference) updatedAddress.reference = clientPayload.reference

    await source.transaction(async (transaction: EntityManager) => {
      await transaction.getRepository(AddressModel)
      .update(addressId, updatedAddress)
    })
  }
  

  async findById(id: string): Promise<Address> {
    const source = await dataSource

    const address = await source.getRepository(AddressModel).findOne({
      where: { id }
    })

    if (!address) return throwCustomError('notFoundError', errorMessages.NOT_FOUND_ADDRESS);

    return address
  }

  async findAll(): Promise<Address[]> {
    const source = await dataSource
    const addresses = await source.getRepository(AddressModel).find()

    if (addresses.length === 0) return throwCustomError('validationError', errorMessages.NO_ADDRESSES);
    return addresses
  }
}