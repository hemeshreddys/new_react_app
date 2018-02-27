import React, { Component } from 'react';
import './App.css';
import Page from './Page';
class App extends Component {
  render() {
    const classFlex ={
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh',
      fontSize:'45px',
      color:'#204E4A',
      backgroundColor:'#9FCC2E'
    }
    return (
      <div style={classFlex}>
        <Page/>
      </div>
    );
  }
}

export default App;
