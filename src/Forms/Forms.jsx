import React, { Component } from 'react';

const input = {
  text: 'Form'
}

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h3 className='h3'>{input.text}</h3>
        <input 
        type="text"
        onChange={this.handleChange} 
        />
        <p>{this.state.input}</p>
      </div>
    )
  }
}

