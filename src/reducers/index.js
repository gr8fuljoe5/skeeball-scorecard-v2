import { combineReducers } from 'redux'

import spinner from './spinner'
import create_game from './create_game'

const rootReducer = combineReducers({
  spinner,
  create_game
})

export default rootReducer
