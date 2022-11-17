import { InMemoryClientRepository } from '../../../repositories/in-memory/inMemory.client.repository'
import { describe, expect, it } from 'vitest'
import { InMemoryAddressRepository } from '../../../repositories/in-memory/inMemory.address.repository'
import { Client } from '../../../entities/Client'
import { CreateAddressUseCase } from '../CreateAddress/CreateAddressUseCase'
import { FindAddressUseCase } from './FindAddressUseCase'

describe('Find Address', () => {
  it('should be able to find an address by id', async () => {
    const mockRepo = new InMemoryAddressRepository()
    const mockClientRepo = new InMemoryClientRepository()
    const createUseCase = new CreateAddressUseCase(mockRepo, mockClientRepo)
    const findUseCase = new FindAddressUseCase(mockRepo)
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
    expect(findUseCase.findById(find.id)).resolves.toStrictEqual(find)
  })

  it('should be able to find all addresses', async () => {
    const mockRepo = new InMemoryAddressRepository()
    const mockClientRepo = new InMemoryClientRepository()
    const createUseCase = new CreateAddressUseCase(mockRepo, mockClientRepo)
    const findUseCase = new FindAddressUseCase(mockRepo)
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

    const itemsLength = mockRepo.items.length
    const mocksLength = await findUseCase.findAll()

    expect(mocksLength.length).toEqual(itemsLength)
  })
})