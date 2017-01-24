import React, {
  Component,
  PropTypes
} from 'react'

import {
  bindActionCreators
} from 'redux'
import {
  connect
} from 'react-redux'
import * as TakesActions from '../../action_creators/take'

import utils from '../../utils'

import AppShell from '../../components/app_shell'
import Button from '../../components/form_button'
import Input from '../../components/form_input'
import Radio from '../../components/form_radio'



class IntroPage extends Component {
  componentDidMount() {
    utils.bind(this)
  }

  render() {
    return (
      <AppShell>
        <h1>SKEEBALL SCORECARD</h1>
      </AppShell>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    takes: state.takes
  }
}
const mapDispatchToProps = function(dispatch) {
  return {
    actions: bindActionCreators(TakesActions, dispatch)
  }
}

IntroPage.propTypes = {

}

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroPage)