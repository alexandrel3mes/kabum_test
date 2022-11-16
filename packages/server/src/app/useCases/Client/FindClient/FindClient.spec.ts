import * as sinon from 'sinon';
import * as chai from 'chai';
import ClientMock from './mocks/ClientMock';
import { findClientUseCase } from './index'
import ClientsMock from './mocks/ClientsMock';

const { expect } = chai;

describe('Finder de Clientes', () => {
  it('findAll', async () => {
    sinon.stub(findClientUseCase, 'findAll').resolves(ClientsMock)

    const result = await findClientUseCase.findAll()
    expect(result).to.be.deep.equal(ClientsMock);
  })

  it('findById', async () => {
    sinon.stub(findClientUseCase, 'findById').resolves(ClientMock)
    const mockId = '10081722-d944-4d96-b4d4-be3e0f38ca06'

    const result = await findClientUseCase.findById(mockId)
    expect(result).to.be.deep.equal(ClientMock);
  })
})