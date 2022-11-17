import { InMemoryClientRepository } from '../../../repositories/in-memory/inMemory.client.repository'
import { describe, expect, it } from 'vitest'
import { InMemoryAddressRepository } from '../../../repositories/in-memory/inMemory.address.repository'
import { Client } from '../../../entities/Client'
import { CreateAddressUseCase } from '../CreateAddress/CreateAddressUseCase'
import { EditAddressUseCase } from './EditAddressUseCase'

describe('Edit Address', () => {
  it('should be able to edit an address', async () => {
    const mockRepo = new InMemoryAddressRepository()
    const mockClientRepo = new InMemoryClientRepository()
    const createUseCase = new CreateAddressUseCase(mockRepo, mockClientRepo)
    const editUseCase = new EditAddressUseCase(mockRepo)
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

    const mockEditPayload = {
      district: 'Bairro Y',
      city: 'Rio Branco',
      state: 'AC',
    }

    const clientMock = new Client(mockClientPayload)

    mockClientRepo.items.push(clientMock)

    if (clientMock.id)
    await createUseCase.execute(clientMock.id, mockPayload)

    const find = mockRepo.items.find((item) => item.zipcode === mockPayload.zipcode)

    if(find && find.id)
    await editUseCase.execute(find.id, mockEditPayload)

    expect(find?.district).toEqual('Bairro Y')
    expect(find?.city).toEqual('Rio Branco')
    expect(find?.state).toEqual('AC')
  })
})