// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// Define class.
class Checkbox extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    utils.bind(this)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState() {
    let checked = this.props.checked

    // Ensure a real boolean.
    if (!utils.exists(checked)) {
      checked = this.props.defaultChecked || false
    }

    this.state = {
      checked,
      id: this.props.id || utils.unique()
    }
  }

  // Force state change.
  componentWillReceiveProps(nextProps) {
    const newChecked = nextProps.checked
    const oldChecked = this.props.checked

    const isValid =
      utils.exists(newChecked) &&
      newChecked !== oldChecked

    if (isValid) {
      this.setState({
        checked: newChecked
      })
    }
  }

  handleChange(e) {
    const el = e.target
    const checked = el.checked
    const value = utils.trim(el.value)
    const handleChange = this.props.handleChange

    this.setState({
      checked
    })

    // Exit, if no callback.
    if (typeof handleChange === 'function') {
      handleChange(e, checked, value)
    }
  }

  // Render method.
  render() {
    // State driven.
    const checked = this.state.checked
    const id = this.state.id

    // Props driven.
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const label = this.props.label
    const name = this.props.name || id
    const required = this.props.required
    const value = this.props.value || label

    // Events.
    const handleChange = this.handleChange

    return (
      /*eslint jsx-a11y/label-has-for:0*/
      <label className='aam-form__label aam-form__label--checkbox'>
        <input
          autoFocus={autofocus}
          className='t7-form__checkbox'
          disabled={disabled}
          id={id}
          name={name}
          required={required}
          type='checkbox'
          value={value}

          checked={checked}
          onChange={handleChange}
        />
        {label || this.props.children}
      </label>
    )
  }
}

// Validation.
Checkbox.propTypes = {
  autofocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  required: React.PropTypes.bool,

  // Alphanumeric.
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),

  // Control checked state.
  defaultChecked: React.PropTypes.bool,
  checked: React.PropTypes.bool,

  // Events.
  handleChange: React.PropTypes.func,
  children: React.PropTypes.node
}

// Prop defaults.
Checkbox.defaultProps = {
  label: 'Individual checkbox label'
}

// Export.
export default Checkbox