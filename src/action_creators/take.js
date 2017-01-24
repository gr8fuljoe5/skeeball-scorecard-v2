import actions from '../actions'
import fetchWrapper from '../utils/fetch_wrapper'
import appSettings from '../app.settings'
import {
  statusMap
} from '../utils/constants'

function getTakesSuccess(payload) {
  return {
    type: actions.GET_TAKES,
    payload
  }
}

export function generateTakeSucess(payload) {
  return {
    type: actions.GENERATE_TAKE,
    payload
  }
}

export function saveTakeSucess(payload) {
  return {
    type: actions.SAVE_TAKE,
    payload
  }
}

export function startTestSuccess(payload) {
  return {
    type: actions.START_TEST,
    payload
  }
}

export function finishTake(payload) {
  return {
    type: actions.FINISH_TEST,
    payload
  }
}

export function startTest(takeId){
  console.log(takeId)
  return (dispatch) => {
    dispatch(startTestSuccess(takeId))  
  }
  
}

export function getTakes() {
  const sampleJSON = [{
    "name": "John Jenson",
    "takeId": "1F50DE4E1",
    "startTime": "2017-01-18T19:37:12.947Z",
    "lastModified": "2017-01-18T19:37:24.030Z",
    "endTime": "2017-01-18T19:37:24.030Z"
  }, {
    "name": "Joe Kanakaraj",
    "takeId": "2D3F4G4H",
    "startTime": "2017-01-18T19:37:12.947Z",
    "lastModified": "2017-01-18T19:37:24.030Z",
    "endTime": "2017-01-18T19:37:24.030Z"
  }, {
    "name": "Damien Scott",
    "takeId": "98758DHF",
    "startTime": "2017-01-18T19:37:12.947Z",
    "lastModified": "2017-01-18T19:37:24.030Z",
    "endTime": "2017-01-18T19:37:24.030Z"
  }]

  return dispatch => fetchWrapper(dispatch, appSettings.urls.takes, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then((responseJson) => {

      dispatch(getTakesSuccess(responseJson))
    })
}

export function generateTake() {
  return (dispatch) => {
    dispatch(generateTakeSucess(json))
  }
}

export function saveTake() {
  return (dispatch) => {
    dispatch(saveTakeSucess(json))
  }
}