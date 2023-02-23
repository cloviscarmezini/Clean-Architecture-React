import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from './email-validation'

import { faker } from '@faker-js/faker'

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
