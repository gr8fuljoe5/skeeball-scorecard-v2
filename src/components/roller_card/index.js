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

  handleClick (e, text) {
    /*
     `e` is the event.

     `text` is from the item clicked.
     */
  }

  // Render method.
  render() {




    // Expose UI.
    return (
      <section className='sc-roller-card'>
        <dl>
          <dt>Name</dt>
          <dd>
            <Input/>
          </dd>
        </dl>
        <ul className='sc-roller-card--buttons'>
          <li className='sc-roller-card--buttons__item'>
            <Button>Submit</Button>
          </li>
          <li className='sc-roller-card--buttons__item'>
            <Button>Clear</Button>
          </li>
        </ul>
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
