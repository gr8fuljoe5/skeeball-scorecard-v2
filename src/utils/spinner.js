import * as SpinnerActions from '../action_creators/spinner'

let startSpinning = false;
let pendingRequests = 0;

function startSpinner(dispatch) {
  startSpinning = true;
  window.setTimeout(function() {
    if (startSpinning) {
      dispatch(SpinnerActions.start())
    }
  }, 250);
}

function stopSpinner(dispatch) {
  startSpinning = false;
  window.setTimeout(function() {
    if (!startSpinning) {
      dispatch(SpinnerActions.stop())
    }
  }, 250);
}

export function requestStarted(dispatch) {
  pendingRequests++;
  startSpinner(dispatch)
}

export function requestFinished(dispatch) {
  if (pendingRequests > 0) {
    pendingRequests--;

    if (pendingRequests === 0) {
      stopSpinner(dispatch)
    }
  }
}
