import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'

import { faker } from '@faker-js/faker'

const makeSut = (minLength: number = 5): MinLengthValidation => new MinLengthValidation(faker.database.column(), minLength)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = makeSut()

    const error = sut.validate(faker.random.numeric(3))

    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if value is valid', () => {
    const sut = makeSut()

    const error = sut.validate(faker.random.numeric(5))

    expect(error).toBeFalsy()
  })
})
