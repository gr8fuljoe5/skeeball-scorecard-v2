import React, { PropTypes } from 'react'

const Button = (props) => {
  const {type, disabled} = props
  return (
    <button
      {...props}
      className={`aam-button--${type || 'primary'} ${disabled ? 'aam-button--disabled' : ''}`} disabled={disabled}
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
