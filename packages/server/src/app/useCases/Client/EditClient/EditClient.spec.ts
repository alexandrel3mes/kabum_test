import { InMemoryClientRepository } from '../../../repositories/in-memory/inMemory.client.repository'
import { describe, expect, it } from 'vitest'
import { CreateClientUseCase } from '../CreateClient/CreateClientUseCase'
import { EditClientUseCase } from './EditClientUseCase'

describe('Create Client', () => {
  it('should be able to create a client', async () => {
    const mockClientRepo = new InMemoryClientRepository()
    const createUseCase = new CreateClientUseCase(mockClientRepo)
    const editUseCase = new EditClientUseCase(mockClientRepo)

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

    const mockEditPayload = {
      name: 'Alexandre Lemes'
    }

    await createUseCase.execute(mockClientPayload)

    const find = mockClientRepo.items.find((item) => item.cpf === mockClientPayload.cpf)

    if (find && find.id)
    await editUseCase.execute(find?.id, mockEditPayload)

    expect(find?.name).toEqual(mockEditPayload.name)
  })
})