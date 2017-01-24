import React, { PropTypes } from 'react'

const Icon = (props) => {
  const { name, size, className } = props
  return (
    <i className={`fa fa-${name} ${size ? `fa-${size}` : ''} ${className || ''}`} />
  )
}

Icon.propTypes = {
  name: React.PropTypes.string,
  size: React.PropTypes.string,
  className: React.PropTypes.string
}

export default Icon
