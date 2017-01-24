import React, { PropTypes } from 'react'

const Col = props => (
  <div className={`aam-flex-box__column ${props.className || ''}`} style={{flex: props.flex || 1}}>
    {props.children}
  </div>
  )

Col.propTypes = {
  className: PropTypes.string,
  flex: PropTypes.number,
  children: PropTypes.node
}

export default Col
