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
import * as CreateGameActions from '../../action_creators/create_game'

import utils from '../../utils'

import AppShell from '../../components/app_shell'
import CreateGameComponent from '../../components/create_game'


class IntroPage extends Component {
  componentDidMount() {
    utils.bind(this)
  }

  render() {
    return (
      <AppShell>
        <h1>SKEEBALL SCORECARD</h1>
        <h2>Welcome!</h2>
        <CreateGameComponent/>
      </AppShell>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    takes: state.game
  }
}
const mapDispatchToProps = function(dispatch) {
  return {
    actions: bindActionCreators(CreateGameActions, dispatch)
  }
}

IntroPage.propTypes = {

}

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroPage)