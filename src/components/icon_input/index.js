import React, { PropTypes } from 'react'

import Input from '../form_input'
import Icon from '../icon'

const IconInput = (props) => {
  const { position } = props

  return (
    <div className={`aam-icon-input ${position || 'left'} ${props.containerClassName}`}>
      <div className='aam-icon-input__icon'>
        <Icon name={props.iconName} />
      </div>
      <Input {...props} />
    </div>
  )
}

IconInput.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
  iconName: PropTypes.string.isRequired,
  containerClassName: PropTypes.string
}

export default IconInput
