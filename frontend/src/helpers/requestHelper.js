import urlHelper from '../helpers/urlHelper'

export default {
  api: '/api',
  fetch: window.fetch.bind(window),
  get,
  post,
  withAPI
}

function withAPI(apiUrl) {
  return {
    ...this,
    api: apiUrl
  }
}

function get(url, params, options) {
  const queryUrl = this.api + url + urlHelper.toQuery(params)
  return this.fetch(queryUrl, options)
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
