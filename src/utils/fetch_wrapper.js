import _ from 'lodash'

//import {saveFailure} from '../action_creators/errors'
import * as Spinner from './spinner'

function fetchWrapper(dispatch, url, options, itemId) {
  const args = Object.keys(arguments).map(key=>arguments[key])  //[].concat(arguments); // make this into a real array so that I can call slice on it.
  Spinner.requestStarted(dispatch)
  return fetch.apply(this, [url, options]) // eslint-disable-line no-undef
    .then(
      (response) => {
        Spinner.requestFinished(dispatch)
        let json = null
        const status = response.status
        const contentType = response.headers.get("content-type")
        const isJson = contentType && contentType.indexOf("application/json") !== -1
        const isHtml = contentType && contentType.indexOf("text/html") !== -1
        const isText = contentType && contentType.indexOf("text/plain") !== -1
        const errorNotificationOpts = {
          // uid: 'once-please', // you can specify your own uid if required
          title: 'Error',
          message: 'Something went wrong',
          position: 'tc',
          autoDismiss: 3
          // action: {
          //   label: 'Click me!!',
          //   callback: () => alert('clicked!')
          // }
        }
        const successNotificationOpts = {
          // uid: 'once-please', // you can specify your own uid if required
          title: 'Success',
          message: 'The request went through',
          position: 'tc',
          autoDismiss: 3
          // action: {
          //   label: 'Click me!!',
          //   callback: () => alert('clicked!')
          // }
        }
        if (status >= 400) {
          //throw {message: 'Something went wrong. (this message sucks)'}
        }
        //this needs to check if the payload IS NOT application/json -> meaning it is plain string
        //in this case the json payload gets constructed from the whole response
        else if (isJson) {
          json = response.json()
        }
        else if (isHtml) {
          json = {}
          //throw contentType
        }
        else {
          json = response
          if (options.method.indexOf('POST') !== -1) {
            dispatch(successNotificationOpts)
          }
        }
        return json
      }
    )
    .catch((error) => {
      Spinner.requestFinished(dispatch)
      //dispatch(addError(error))
      if (error) {
        dispatch(error)
        console.error(error) // eslint-disable-line no-console
      }
    })
}

export default fetchWrapper
