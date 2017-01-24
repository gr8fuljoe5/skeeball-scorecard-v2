import actions from '../actions'
import createReducer from '../utils/create_reducer'

const initialState = {show: false}

const startSpinner = () => ({show: true})

const stopSpinner = () => ({show: false})

const handlers = {
  [actions.START_SPINNER]: startSpinner,
  [actions.STOP_SPINNER]: stopSpinner
}

export default createReducer(initialState, handlers)
