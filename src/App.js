import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    const classFlex ={
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh',
      fontSize:'45px'
    }
    return (
      <div style={classFlex}>
          <h1>Coming Soon...</h1>
      </div>
    );
  }
}

export default App;
