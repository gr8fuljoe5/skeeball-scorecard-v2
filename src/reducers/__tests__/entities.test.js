import * as actions from '../../actions'
import reducer from '../entities'

describe('entities reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      editableByEntity: {}
    })
  })

  it('should hande GET_ENTITIES', () => {
    expect(reducer([], {
      type: actions.default.GET_ENTITIES
    })).toEqual([])
  })

  // it('should handle ADD_TODO', () => {
  //   expect(
  //     reducer([], {
  //       type: actions.default.ADD_TODO,
  //       text: 'Run the tests'
  //     })
  //   ).toEqual(
  //     [{
  //       text: 'Run the tests',
  //       completed: false,
  //       id: 0
  //     }]
  //   )

  //   expect(
  //     reducer(
  //       [{
  //         text: 'Use Redux',
  //         completed: false,
  //         id: 0
  //       }], {
  //         type: actions.default.ADD_TODO,
  //         text: 'Run the tests'
  //       }
  //     )
  //   ).toEqual(
  //     [{
  //       text: 'Run the tests',
  //       completed: false,
  //       id: 1
  //     }, {
  //       text: 'Use Redux',
  //       completed: false,
  //       id: 0
  //     }]
  //   )
  // })
})