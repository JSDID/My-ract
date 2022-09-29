import React, { Component } from 'react';
const btn = {
  backgroundColor:  'blue',
  padding: 10 + 'px',
  color: 'white',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
}

export default class Medots extends 
Component {
  constructor(props) {
    super(props);
    this.state = {class: "off", label: "Life cycle"};
    this.press = this.press.bind(this);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  press(){
    var className = (this.state.class === "off")?"on":"off";
    this.setState({class: className});
  }
  render() {
    console.log('render');
    return (
      <>
      <button style={btn} onClick={this.press} className={this.state.class}>{this.state.label}</button>
      </>
    )
  }
}
