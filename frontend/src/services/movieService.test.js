import movieService from './movieService'
import requestHelper from '../helpers/requestHelper'

let fetch

beforeEach(() => {
  requestHelper.api = 'api'
  movieService.apiKey = 'testKey'
  requestHelper.fetch = fetch = jest.fn()
})

describe('fetchMovies', () => {
  it('queries the movie api', () => {
    movieService.fetchMovies('search')
    const [url] = fetch.mock.calls[0]
    expect(url).toBe('http://www.omdbapi.com/?s=search&apiKey=testKey&type=movie')
  })

  it('fetches only once for a search term', () => {
    const r1 = movieService.fetchMovies('memoized')
    const r2 = movieService.fetchMovies('memoized')
    const r3 = movieService.fetchMovies('memoized')
    expect(fetch.mock.calls.length).toBe(1)
    expect(r1).toBe(r2)
    expect(r2).toBe(r3)
  })
})

describe('fetchLogs', () => {
  it('queries user logs', () => {
    movieService.fetchLogs()
    const [url] = fetch.mock.calls[0]
    expect(url).toBe('api/logs')
  })
})

describe('logMovie', () => {
  it('adds log', () => {
    movieService.logMovie({ Title: 't', Poster: 'p' })
    const [url, options] = fetch.mock.calls[0]
    expect(url).toBe('api/log')
    expect(options.method).toBe('POST')
    expect(options.body).toBe('{"title":"t","poster_url":"p"}')
  })
})