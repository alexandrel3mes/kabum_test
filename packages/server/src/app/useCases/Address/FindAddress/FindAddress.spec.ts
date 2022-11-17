import * as sinon from 'sinon';
import * as chai from 'chai';
import { findAddressUseCase } from './index'
import AddressMock from './mocks/AddressMock';
import AddressesMock from './mocks/AddressesMock';

const { expect } = chai;

describe('Finder de Endereços', () => {
  it('findAll', async () => {
    sinon.stub(findAddressUseCase, 'findAll').resolves(AddressesMock)

    const result = await findAddressUseCase.findAll()
    expect(result).to.be.deep.equal(AddressesMock);
  })

  it('findById', async () => {
    sinon.stub(findAddressUseCase, 'findById').resolves(AddressMock)
    const mockId = '10081722-d944-4d96-b4d4-be3e0f38ca06'

    const result = await findAddressUseCase.findById(mockId)
    expect(result).to.be.deep.equal(AddressMock);
  })
})