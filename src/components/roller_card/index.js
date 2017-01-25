// Dependencies.
import React from 'react'
import utils from '../../utils'

// CSS.
import './index.css'

// UI Components
import Select from '../form_select'

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
      <section>
        Card
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
