import React, { Component } from 'react'

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Web Dev Blog'
    };
  }
  render() {
    return (
      <>
      <div>
      <p>Hello YouTube: {this.state.name}</p>
      </div>
      </>
    )
  }
}
