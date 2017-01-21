import React, { Component } from 'react'
import './Scorecard.scss'

class Scorecard extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            {[...Array(10)].map((x, i) =>
                <td>{ i + 1 }</td>
            )}
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Joe</td>
            {[...Array(10)].map((x, i) =>
                <td><input/></td>
            )}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Scorecard
