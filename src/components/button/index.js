import React, { PropTypes } from 'react'

const Button = (props) => {
  const {type, disabled} = props
  return (
    <button
      {...props}
      className={`sc-button--${type || 'primary'} ${disabled ? 'sc-button--disabled' : ''}`}
      disabled={disabled}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node
}

export default Button
