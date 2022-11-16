import { Request, Response } from "express";
import { EditAddressUseCase } from "./EditAddressUseCase";

export class EditAddressController {
  constructor(private editAddressUseCase: EditAddressUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { zipcode, address, number, complement, district, city, state, reference } = request.body;
    const { id } = request.params;


    await this.editAddressUseCase.execute(id, {
      zipcode,
      address,
      number,
      complement,
      district,
      city,
      state,
      reference,
    })

    return response.status(201).json({message: 'Endereço editado com sucesso!'})

  }
}