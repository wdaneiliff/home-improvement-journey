export default (url = '', options = {}) => {
  return fetch(url, {
    headers: {
      ...options.headers
    },
    method: options.method || 'GET',
    mode: 'cors',
    ...options
  })
}
