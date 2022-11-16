import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, birthday, rg, phone, addresses } = request.body;


    console.log('aqui foi')
    console.log(this.createClientUseCase)

    await this.createClientUseCase.execute({
      name,
      cpf,
      birthday,
      rg,
      phone,
      addresses
    })

    return response.status(201).json({message: 'Cliente cadastrado com sucesso!'})

  }
}