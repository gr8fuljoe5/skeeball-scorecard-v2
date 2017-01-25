// Dependencies.
import React from 'react'
import utils from '../../utils'

// CSS.
import './index.css'

// UI Components
import Select from '../form_select'
import RollerCard from '../roller_card'

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

  // Render method.
  render() {
    const handleChange = this.handleChange
    const options = [
      {
        value: '0',
        name: 'Select...'
      },
      {
        value: '1',
        name: 'Uno'
      },
      {
        value: '2',
        name: 'Dos'
      },
      {
        value: '3',
        name: 'Tres'
      }
    ]


    // Expose UI.
    return (
      <section>

        How many players?
        <Select
          options={options}
          handleChange={handleChange}
         />
        <div>
          {
            [...Array(this.state.rollers)].map((x, i) =>
                <RollerCard/>
            )
          }

        </div>
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
export default CreateGame
