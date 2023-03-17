import { FieldValidationSpy } from '../test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]

  const sut = ValidationComposite.build(fieldValidationsSpy)

  return {
    sut,
    fieldValidationsSpy
  }
}

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const [fieldName, value, firstErrorMessage, secondErrorMessage] = [
      faker.database.column(),
      faker.random.words(),
      faker.random.words(),
      faker.random.words()
    ]

    const { sut, fieldValidationsSpy } = makeSut(fieldName)

    fieldValidationsSpy[0].error = new Error(firstErrorMessage)
    fieldValidationsSpy[1].error = new Error(secondErrorMessage)

    const error = sut.validate(fieldName, value)
    expect(error).toBe(firstErrorMessage)
  })

  test('Should return falsy if any validation fails', () => {
    const [fieldName, errorMessage] = [
      faker.database.column(),
      faker.random.words()
    ]

    const { sut } = makeSut(fieldName)

    const error = sut.validate(fieldName, errorMessage)
    expect(error).toBeFalsy()
  })
})
