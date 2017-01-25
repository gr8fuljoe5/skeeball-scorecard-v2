import React, { PropTypes } from 'react'

import Input from '../form_input'

import './index.css'

const Scorecard = (props) => {
  const topRows = () => {
     return [...Array(10)].map((x, i) =>
        <th className='sc-scorecard--th'>{ i + 1 }</th>
    )
  }

  const inputRows = () => {
    return [...Array(10)].map((x, i) =>
        <td className='sc-scorecard--td'>
          <Input/>
        </td>
    )
  }

  return (
    <table className='sc-scorecard'>
      <thead>
        <tr>
          <th>Name</th>
          {topRows()}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TEST</td>
          {inputRows()}
        </tr>
      </tbody>
    </table>
  )
}

Scorecard.propTypes = {

}

export default Scorecard
