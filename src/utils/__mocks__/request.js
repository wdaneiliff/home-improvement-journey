import sku10089623 from './sku-10089623.json'

const makeRequest = (url = '', options = {}) => {
  return new Promise((resolve, reject) => {
    if (url.endsWith('products/10089623')) {
      resolve({
        // To mock the fetch() response object
        json: () => sku10089623
      })
    }
  })
}

export default makeRequest