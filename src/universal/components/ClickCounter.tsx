import React, {Component} from 'react'
import {createContainer} from 'react-meteor-data'
import {Meteor} from 'meteor/meteor'


interface State {
  counter: number,
}

class ClickCounter extends Component<{}, State> {

  state: State = {
    counter: 0,
  }

  increment = () => {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <div>
        <h2>Manual counter</h2>
        Current value: {this.state.counter}<br />
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default ClickCounter
