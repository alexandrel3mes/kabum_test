import { InMemoryClientRepository } from '../../../repositories/in-memory/inMemory.client.repository'
import { describe, expect, it } from 'vitest'
import { CreateClientUseCase } from '../CreateClient/CreateClientUseCase'
import { FindClientUseCase } from './FindClientUseCase'

describe('Find Client', () => {
  it('should be able to find a client by id', async () => {
    const mockClientRepo = new InMemoryClientRepository()
    const createUseCase = new CreateClientUseCase(mockClientRepo)
    const findUseCase = new FindClientUseCase(mockClientRepo)

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

    await createUseCase.execute(mockClientPayload)

    const find = mockClientRepo.items.find((item) => item.cpf === mockClientPayload.cpf)

    if (find && find.id)
    expect(findUseCase.findById(find.id)).resolves.toEqual(find)
  })

  it('should be able to find all clients', async () => {
    const mockClientRepo = new InMemoryClientRepository()
    const createUseCase = new CreateClientUseCase(mockClientRepo)
    const findUseCase = new FindClientUseCase(mockClientRepo)

    const mockfirstClientPayload = {
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

    const mockSecondClientPayload = {
      name: 'Alexandre',
      cpf: '2988856455',
      birthday: '16/06/1999',
      rg: '15889547',
      phone: '87992456786',
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

    await createUseCase.execute(mockfirstClientPayload)
    await createUseCase.execute(mockSecondClientPayload)

    const items = mockClientRepo.items
    const useCase = await findUseCase.findAll()

    expect(items.length).toEqual(useCase.length)

  })
})