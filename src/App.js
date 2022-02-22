import React, { Component } from 'react';
import Class from "./Class";
import Function from "./Function";

export class App extends Component {
    state = {
        showclass : false,
        showfunc : false
    }

  render() {


    return (
      <div className='box'>
          <h1> Styling of my components</h1>
          <button onClick = {() => this.setState({showclass : !this.state.showclass})} className= "bt1">For Class components</button>
          <button onClick = {() => this.setState({showfunc : !this.state.showfunc})} className= "bt2">For Function components</button>
          {this.state.showclass &&  <Class/>}
          {this.state.showfunc &&  <Function />}


      </div>
    )
  }
}

export default App