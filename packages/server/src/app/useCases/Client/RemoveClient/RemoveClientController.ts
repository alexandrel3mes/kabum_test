import { Request, Response } from "express";
import { RemoveClientUseCase } from "./RemoveClientUseCase";

export class RemoveClientController {
  constructor(private removeClientUseCase: RemoveClientUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.removeClientUseCase.execute(id)

    return response.status(201).json({message: 'Cliente removido com sucesso!'})

  }
}