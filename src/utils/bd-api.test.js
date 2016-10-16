jest.mock('./request')

import { loadProduct } from './bd-api'

it('loads a product from the API', async () => {
  const productResponse = await loadProduct('10089623')
  expect(productResponse).toBeDefined()
  expect(productResponse.success).toBe(true)
  expect(productResponse.data.skuNumber).toBe('10089623')
})