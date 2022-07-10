import React, { Component } from 'react'

class MainComponent extends Component {
  render() {
    return (
        <div class="mainContainer">{ this.props.children }</div>
        
    )
  }
}

export default MainComponent
