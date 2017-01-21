import React from 'react'
import Header from '../../components/Header'
import Scorecard from '../../components/Scorecard'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <Scorecard/>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
