import { InMemoryClientRepository } from '../../../repositories/in-memory/inMemory.client.repository'
import { describe, expect, it } from 'vitest'
import { InMemoryAddressRepository } from '../../../repositories/in-memory/inMemory.address.repository'
import { Client } from '../../../entities/Client'
import { CreateAddressUseCase } from '../CreateAddress/CreateAddressUseCase'
import { RemoveAddressUseCase } from './RemoveAddressUseCase'

describe('Remove Address', () => {
  it('should be able to remove an address', async () => {
    const mockRepo = new InMemoryAddressRepository()
    const mockClientRepo = new InMemoryClientRepository()
    const createUseCase = new CreateAddressUseCase(mockRepo, mockClientRepo)
    const removeUseCase = new RemoveAddressUseCase(mockRepo)
    const mockPayload = {
      zipcode: '29060670',
      address: 'Rua tal',
      number: '110',
      complement: 'La do lado',
      district: 'Bairro X',
      city: 'Sao Paulo',
      state: 'SP',
      reference: 'Perto de não sei aonde',
    }

    const mockClientPayload = {
      name: 'Alexandre',
      cpf: '06577789566',
      birthday: '16/06/1999',
      rg: '15889546',
      phone: '87992456785',
      addresses: [mockPayload]
    }

    const clientMock = new Client(mockClientPayload)

    mockClientRepo.items.push(clientMock)

    if (clientMock.id)
    await createUseCase.execute(clientMock.id, mockPayload)

    const find = mockRepo.items.find((item) => item.zipcode === mockPayload.zipcode)

    if(find && find.id)
    await removeUseCase.execute(find.id)

    const notFound = mockRepo.items.find((item) => item.zipcode === mockPayload.zipcode)

    expect(notFound).toBeFalsy()
  })
})