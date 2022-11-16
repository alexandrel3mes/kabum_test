import { Request, Response } from "express";
import { EditClientUseCase } from "./EditClientUseCase";

export class EditClientController {
  constructor(private editClientUseCase: EditClientUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, birthday, rg, phone } = request.body;
    const { id } = request.params;


    await this.editClientUseCase.execute(id, {
      name,
      cpf,
      birthday,
      rg,
      phone,
    })

    return response.status(201).json({message: 'Cliente editado com sucesso!'})

  }
}