import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
     <>
      <h1 className="info">{this.state.count}</h1>
       <div className="buttons">
        <button onClick={() => this.setState({count: this.state.count - 1})}>
          Минус
        </button>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Плюс
        </button>
        
       </div>
     </>
    )
  }
}




