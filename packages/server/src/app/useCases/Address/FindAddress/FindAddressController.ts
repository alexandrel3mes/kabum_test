import { Request, Response } from "express";
import { FindAddressUseCase } from "./FindAddressUseCase";

export class FindAddressController {
  constructor(private findAddressUseCase: FindAddressUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    if (id) {
      const address = await this.findAddressUseCase.findById(id)
      return response.status(201).json(address)
    }

    const addresses = await this.findAddressUseCase.findAll()


    return response.status(201).json(addresses)

  }
}