import { Address } from "../entities/Address";
import { IEditAddressRequestDTO } from "../useCases/Address/EditClient/EditAddressDTO";

export interface IAddressRepository {
  findById(id: string): Promise<Address>;
  findAll(): Promise<Address[]>;
  edit(addressId: string, addressPayload: IEditAddressRequestDTO): Promise<void>;
  remove(addressId: string): Promise<void>;
} 