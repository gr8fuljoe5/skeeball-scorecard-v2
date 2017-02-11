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
import * as TakesActions from '../../action_creators/create_game'

import utils from '../../utils'

import AppShell from '../../components/app_shell'
import Scorecard from '../../components/scorecard'

class IntroPage extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    utils.bind(this)
  }

  render() {
    return (
      <AppShell>
        <h1>SKEEBALL SCORECARD</h1>
        <Scorecard />
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