import actions from '../actions'

export function start() {
  return (dispatch) => {
    dispatch({type: actions.START_SPINNER});
  }
}
export function stop() {
  return (dispatch) => {
    dispatch({type: actions.STOP_SPINNER});
  }
}
