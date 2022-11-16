import { IClientRepository } from "../../../repositories/IClientRepository";
import { IEditClientRequestDTO } from "./EditClientDTO";

export class EditClientUseCase {
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

  async execute(id: string, data: IEditClientRequestDTO) {
    if (data.cpf) await this.clientExistsByCpf(data.cpf);
    if (data.phone) await this.clientExistsByPhone(data.phone);
    if (data.rg) await this.clientExistsByRg(data.rg);

    await this.clientRepo.edit(id, data)
  }
}