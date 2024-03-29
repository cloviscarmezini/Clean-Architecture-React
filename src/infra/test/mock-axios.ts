import { faker } from '@faker-js/faker'
import axios from 'axios'

export const mockHttpResponse = (): any => ({
  status: faker.internet.httpStatusCode(),
  data: {
    manufacturer: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    vehicle: faker.vehicle.vehicle()
  }
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockResolvedValue(mockHttpResponse())

  return mockedAxios
}
