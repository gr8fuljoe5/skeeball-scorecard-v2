// Dependencies.
import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import utils from '../../utils'

// CSS.
import './index.css'

// UI Components
import Select from '../form_select'
import RollerCard from '../roller_card'

import * as CreateGameActions from '../../action_creators/create_game'

// Define class.
class CreateGame extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props)
    utils.bind(this)
    this.state = {
      rollers: 0
    }

  }

  handleChange (e, value) {
    this.setState({
      rollers: parseInt(value)
    })

  }

  componentDidMount(){

  }

  // Render method.
  render() {
    const handleChange = this.handleChange
    const options = [
      {
        key: 0,
        value: '0',
        name: 'Select...'
      },
      {
        key: 1,
        value: '1',
        name: 'One'
      },
      {
        key: 2,
        value: '2',
        name: 'Two'
      },
      {
        key: 3,
        value: '3',
        name: 'Three'
      }
    ]

    const rollers = this.state.rollers

    const saveRoller = this.props.actions.saveRoller

    // Expose UI.
    return (
      <section>
        <form ref='createCard' name='createCard'>
          How many players?
            <Select
              options={options}
              handleChange={handleChange}
             />
            <div>
              {
                [...Array(rollers)].map((x, i) =>
                  <RollerCard card={i+1} save={saveRoller} key={i}/>
                )
              }
            </div>
        </form>
      </section>
    )
  }
}

// Validation.
CreateGame.propTypes = {

}

// Defaults.
CreateGame.defaultProps = {

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
)(CreateGame)
