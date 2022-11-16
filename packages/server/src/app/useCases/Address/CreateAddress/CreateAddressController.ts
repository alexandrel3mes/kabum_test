import { Request, Response } from "express";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

export class CreateAddressController {
  constructor(private createAddressUseCase: CreateAddressUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { zipcode, address, number, complement, district, city, state, reference } = request.body;
    const { id } = request.params;


    await this.createAddressUseCase.execute(id, {
      zipcode,
      address,
      number,
      complement,
      district,
      city,
      state,
      reference,
    })

    return response.status(201).json({message: 'Endereço criado com sucesso!'})

  }
}