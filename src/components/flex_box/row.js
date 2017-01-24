import React, { PropTypes } from 'react'

const Row = props => (
  <div className={`aam-flex-box__row ${props.className || ''}`}>
    {props.children}
  </div>
  )

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Row
