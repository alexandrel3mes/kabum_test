import { IAddressRepository } from "../../../repositories/IAddressRepository";
import { IEditAddressRequestDTO } from "./EditAddressDTO";

export class EditAddressUseCase {
  constructor(private addressRepo: IAddressRepository) {}
  async execute(id: string, data: IEditAddressRequestDTO) {
    await this.addressRepo.findById(id)
    await this.addressRepo.edit(id, data)
  }
}