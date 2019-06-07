import reducer from './moviesReducer'

describe('FETCH_MOVIES_SUCCESS', () => {
  it('should add the first movies', () => {
    const actual = reducer(undefined, {
      type: 'FETCH_MOVIES_SUCCESS',
      payload: { movies: [{ Title: '1' }, { Title: '2' }] }
    })
    const expected = [{ Title: '1' }, { Title: '2' }]
    expect(actual).toEqual(expected)
  })

  it('should append to existing movies', () => {
    const actual = reducer([{ Title: '1' }], {
      type: 'FETCH_MOVIES_SUCCESS',
      payload: { movies: [{ Title: 'a' }, { Title: 'b' }] }
    })
    const expected = [{ Title: '1' }, { Title: 'a' }, { Title: 'b' }]
    expect(actual).toEqual(expected)
  })

  it('should not repeat movies', () => {
    const actual = reducer([{ Title: 'existing' }], {
      type: 'FETCH_MOVIES_SUCCESS',
      payload: { movies: [{ Title: 'existing' }, { Title: 'new' }] }
    })
    const expected = [{ Title: 'existing' }, { Title: 'new' }]
    expect(actual).toEqual(expected)
  })
})

describe('CLEAR_MOVIES', () => {
  it('should remove movies from the list', () => {
    const actual = reducer([{ Title: '1' }], {
      type: 'CLEAR_MOVIES'
    })
    expect(actual).toEqual([])
  })
})