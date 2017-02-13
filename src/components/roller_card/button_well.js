
// Dependencies.
import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory, hashHistory } from 'react-router'

import utils from '../../utils'

// CSS.
import './index.css'

// UI Components
import Select from '../form_select'
import RollerCard from '../roller_card'
import Button from '../button'

import * as CreateGameActions from '../../action_creators/create_game'

// Define class.
class ButtonWell extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props)
    utils.bind(this)
  }

  submitRollerName (e) {
    e.preventDefault()
    const users = document.querySelectorAll('.sc-username')
    let userList = []
    users.forEach((user) => {
      userList.push(user.value)
    })
    this.props.actions.saveRoller(userList)
    browserHistory.push('/scorecard')

  }

  clearInput () {

  }

  // Render method.
  render() {
  	const submitRollerName = this.submitRollerName
  	const clearInput = this.clearInput
    // Expose UI.
    return (
      <section>	
        <ul className='sc-roller-card--buttons'>
          <li className='sc-roller-card--buttons__item'>
            <Button onClick={submitRollerName}>Submit</Button>
          </li>
          <li className='sc-roller-card--buttons__item'>
            <Button type='clear' onClick={clearInput}>Clear</Button>
          </li>
        </ul>
      </section>

    )
  }
}

// Validation.
ButtonWell.propTypes = {

}

// Defaults.
ButtonWell.defaultProps = {

}

// Export.
const mapStateToProps = function(state) {
  return {
    takes: state.rollers
  }
}
const mapDispatchToProps = function(dispatch) {
  return {
    actions: bindActionCreators(CreateGameActions, dispatch)
  }
}

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonWell)