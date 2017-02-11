/**
 * Created by joe on 1/25/17.
 */
import actions from '../actions'
import fetchWrapper from '../utils/fetch_wrapper'

import {
  statusMap
} from '../utils/constants'

export function saveRollerSuccess(payload) {
  return {
    type: actions.SAVE_ROLLER,
    payload
  }
}

export function saveRoller(rollers) {
	console.log('saveRoller', rollers)
	return (dispatch) => {
		dispatch(saveRollerSuccess(rollers))
	}
}

export function createGame() {

}