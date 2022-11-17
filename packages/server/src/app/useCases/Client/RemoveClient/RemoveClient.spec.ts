import { InMemoryClientRepository } from '../../../repositories/in-memory/inMemory.client.repository'
import { describe, expect, it } from 'vitest'
import { CreateClientUseCase } from '../CreateClient/CreateClientUseCase'
import { RemoveClientUseCase } from './RemoveClientUseCase'

describe('Remove Client', () => {
  it('should be able to remove a client', async () => {
    const mockClientRepo = new InMemoryClientRepository()
    const useCase = new CreateClientUseCase(mockClientRepo)
    const removeUseCase = new RemoveClientUseCase(mockClientRepo)

    const mockClientPayload = {
      name: 'Alexandre',
      cpf: '06577789566',
      birthday: '16/06/1999',
      rg: '15889546',
      phone: '87992456785',
      addresses: [{
        zipcode: '29060670',
        address: 'Rua tal',
        number: '110',
        complement: 'La do lado',
        district: 'Bairro X',
        city: 'Sao Paulo',
        state: 'SP',
        reference: 'Perto de não sei aonde',
      }]
    }

    await useCase.execute(mockClientPayload)

    const find = mockClientRepo.items.find((item) => item.cpf === mockClientPayload.cpf)

    if(find && find.id)
    await removeUseCase.execute(find.id)

    const notFound = mockClientRepo.items.find((item) => item.cpf === mockClientPayload.cpf)

    expect(notFound).toBeFalsy()
  })
})