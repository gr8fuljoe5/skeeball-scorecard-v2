// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// UI components.
import Button from '../form_button'
import Input from '../form_input'

// Define class.
class Search extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    utils.bind(this)
  }

  // Submit event.
  handleSubmit(e) {
    utils.stop(e)

    const handleSubmit = this.props.handleSubmit

    // Exit, if no callback.
    if (typeof handleSubmit !== 'function') {
      return
    }

    const el = e.target
    const input = el.querySelector('input[type="search"]')

    let value = input.value
    value = value.trim().replace(/\s+/g, ' ')

    handleSubmit(e, value)
  }

  // Render method.
  render() {
    const buttonText = this.props.buttonText
    const defaultValue = this.props.defaultValue
    const placeholder = this.props.placeholder

    // Events.
    const handleSubmit = this.handleSubmit

    return (
      <form onSubmit={handleSubmit}>
        <table role='presentation' className='t7-search-table'>
          <tbody>
            <tr>
              <td>
                <Input
                  defaultValue={defaultValue}
                  placeholder={placeholder}
                  type='search'
                />
              </td>
              <td>
                <Button
                  mode='primary'
                  text={buttonText}
                  type='submit'
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  }
}

// Validation.
Search.propTypes = {
  buttonText: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  placeholder: React.PropTypes.string,

  // Events.
  handleSubmit: React.PropTypes.func
}

// Prop defaults.
Search.defaultProps = {
  buttonText: 'GO',
  placeholder: 'Search...'
}

// Export.
export default Search
