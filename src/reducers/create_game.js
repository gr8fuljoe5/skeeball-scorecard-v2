import actions from '../actions'
import createReducer from '../utils/create_reducer'

const initialState = {}

const saveRoller = (state = initialState, {payload}) => {
  if (!payload)
    return state

  return {
    ...state,
    rollers: payload
  }
}


const handlers = {
  [actions.SAVE_ROLLER]: saveRoller
}

export default createReducer(initialState, handlers)