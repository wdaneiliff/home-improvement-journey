import makeRequest from './request'

const API_BASE_URL = 'https://api.builddirect.io'
const API_PRODUCTS_URL = `${API_BASE_URL}/products`

const headers = {
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': 'cafa4a2e1b6a4cdfadf3412a3ff21965'
}

export const loadProduct = (sku) => {
  return makeRequest(`${API_PRODUCTS_URL}/${sku}`, {headers})
    .then((response) => response.json())
}