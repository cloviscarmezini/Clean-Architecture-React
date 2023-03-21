import { faker } from '@faker-js/faker'
import { type HttpPostParams } from '../protocols/http'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {
    manufacturer: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    vehicle: faker.vehicle.vehicle()
  }
})
