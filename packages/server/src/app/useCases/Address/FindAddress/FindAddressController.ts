import { Request, Response } from "express";
import { FindClientUseCase } from "./FindClientUseCase";

export class FindAddressController {
  constructor(private findClientUseCase: FindClientUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    if (id) {
      const client = await this.findClientUseCase.findById(id)
      return response.status(201).json(client)
    }

    const clients = await this.findClientUseCase.findAll()


    return response.status(201).json(clients)

  }
}