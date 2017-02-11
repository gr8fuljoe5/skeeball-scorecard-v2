// Dependencies.
import React from 'react'
import utils from '../../utils'

// CSS.
import './index.css'

// UI Components
import Input from '../form_input'
import Button from '../button'

// Define class.
class RollerCard extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props)
    utils.bind(this)

  }

  updateName (e, text) {
    const target = e.target
    const name = target.name
    this.setState({
      [name]: text
    })

  }

  submitRollerName (e, text) {  
    e.preventDefault()
  }

  clearInput () {

  }

  // Render method.
  render() {
    const submitRollerName = this.submitRollerName
    const clearInput = this.clearInput
    const updateName = this.updateName

    const cardNum = 'roller' + this.props.card


    // Expose UI.
    return (
      <section className='sc-roller-card'>
        <dl>
          <dt>Name</dt>
          <dd>
            <Input handleChange={updateName} name={cardNum} className='sc-username'/>
          </dd>
        </dl>
      </section>
    )
  }
}

// Validation.
RollerCard.propTypes = {

}

// Defaults.
RollerCard.defaultProps = {

}

// Export.
export default RollerCard
