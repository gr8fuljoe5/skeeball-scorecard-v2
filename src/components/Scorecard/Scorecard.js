import React, { Component } from 'react'
import './Scorecard.scss'

class Scorecard extends Component {
  constructor(){
    super()
    this.state = {
      totals: 0
    }

  }
  shouldComponentUpdate () {
    return false
  }

  getTotals() {
    const frames = document.querySelectorAll('.sc-frame')
    let totalsArr = [];
    frames.forEach(function(input){
      if(!input.value){
        input.value = 0;
      }
      totalsArr.push(parseInt(input.value));
    })

    let sum = totalsArr.reduce((a, b) => a + b, 0);
    this.setState({
      totals: sum
    })
  }

  render () {
    console.log('render')
    const getTotals = this.getTotals.bind(this)
    return (
      <table className='sc-table'>
        <thead>
          <tr>
            <td>Name</td>
            {
              [...Array(10)].map((x, i) =>
                <td>{ i + 1 }</td>
              )
            }
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Joe</td>
            {
              [...Array(10)].map((x, i) =>
                <td>
                  <input type='text' className='sc-frame' onChange={getTotals} />
                </td>
              )
            }
            <td>{this.state.totals}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Scorecard
