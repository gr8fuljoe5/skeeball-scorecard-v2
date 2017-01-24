import React, { Component, PropTypes } from 'react'

export default class AppShell extends Component {
  render() {
    return (
      <div>
        <div id="app-shell">
          <main className="app-shell__main">
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
}

AppShell.propTypes = {
  children: PropTypes.node
}
