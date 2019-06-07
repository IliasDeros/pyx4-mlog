export default {
  api: '/api',
  fetch: window.fetch.bind(window),
  get,
  post
}

function get(url, options) {
  return this.fetch(this.api + url, options)
}

function post(url, body = {}, options = {}) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...options
  }
  
  return this.fetch(this.api + url, requestOptions)
}
