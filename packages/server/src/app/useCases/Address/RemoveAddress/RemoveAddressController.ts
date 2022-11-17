import { Request, Response } from "express";
import { RemoveAddressUseCase } from "./RemoveAddressUseCase";

export class RemoveAddressController {
  constructor(private removeAddressUseCase: RemoveAddressUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.removeAddressUseCase.execute(id)

    return response.status(201).json({message: 'Endereço removido com sucesso!'})

  }
}