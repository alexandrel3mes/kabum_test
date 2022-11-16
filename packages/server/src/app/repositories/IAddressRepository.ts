import { Address } from "../entities/Address";

export interface IAddressRepository {
  findById(id: string): Promise<Address>;
  edit(addressId: string, addressPayload: IEditAddressRequestDTO): Promise<void>;
  remove(addressId: string): Promise<void>;
} 