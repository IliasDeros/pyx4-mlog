export default {
  redirectTo,
  toQuery
}

function redirectTo(url) {
  window.location.href = url
}

function toQuery(params) {
  if (!params) {
    return ''
  }

  const paramStrings = Object.keys(params).map((p) => `${p}=${params[p]}`)
  return `?${paramStrings.join('&')}`
}