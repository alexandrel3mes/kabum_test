import { InMemoryUserRepository } from '../../../repositories/in-memory/inMemory.user.repository'
import { describe, expect, it } from 'vitest'
import { CreateUserUseCase } from './CreateUserUseCase' 

describe('Register User', () => {
  it('should be able to create an user', async () => {
    const mockRepo = new InMemoryUserRepository()
    const useCase = new CreateUserUseCase(mockRepo)
    const mockCreate = {
      name: 'Alexandre',
      email: 'alexandre@email.com',
      password: 'senhaMtoBoaMesmo'
    }


    await useCase.execute(mockCreate)

    const find = mockRepo.items.find((item) => item.email === mockCreate.email)

    expect(find).toBeTruthy()
  })
})