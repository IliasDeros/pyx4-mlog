import requestHelper from './requestHelper'

let fetch

beforeEach(() => {
  requestHelper.api = 'api'
  requestHelper.fetch = fetch = jest.fn()
})

describe('GET', () => {
  it('request a custom url', () => {
    requestHelper.get('/custom url')
    const [url] = fetch.mock.calls[0]
    expect(url).toBe('api/custom url')
  })

  it('sends custom params', () => {
    requestHelper.get('/url', { param1: 'value1', param2: 'value2' })
    const [url] = fetch.mock.calls[0]
    expect(url).toEqual('api/url?param1=value1&param2=value2')
  })

  it('sends custom option', () => {
    requestHelper.get('', null, { custom: 'option' })
    const [_, options] = fetch.mock.calls[0]
    expect(options).toEqual(expect.objectContaining({ custom: 'option' }))
  })
})

describe('POST', () => {
  it('request a custom url', () => {
    requestHelper.post('/custom url')
    const [url] = fetch.mock.calls[0]
    expect(url).toBe('api/custom url')
  })

  it('sends a POST request', () => {
    requestHelper.post()
    const [_, options] = fetch.mock.calls[0]
    expect(options.method).toBe('POST')
  })

  it('sets content type to JSON even with custom options', () => {
    requestHelper.post('', {}, { custom: 'option' })
    const [_, options] = fetch.mock.calls[0]
    expect(options.headers).toEqual(expect.objectContaining({ 'Content-Type': 'application/json' }))
  })

  it('stringifies body', () => {
    requestHelper.post('', { key: 'value' })
    const [_, options] = fetch.mock.calls[0]
    expect(options.body).toBe('{"key":"value"}')
  })

  it('sends custom options', () => {
    requestHelper.post('', {}, { custom: 'option' })
    const [_, options] = fetch.mock.calls[0]
    expect(options).toEqual(expect.objectContaining({ custom: 'option' }))
  })
})