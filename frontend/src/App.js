import React, { Component } from 'react';
import Routes from './routes';
import Api from './utils/api';
import './App.css';

class App extends Component {
  
  constructor(props) {
  		super(props);
  		this.onAuthentication = this.onAuthentication.bind(this)
 	}	

  render() {
  	console.log(new Api().doLogin());
    return (
       <Routes /> 
    );
  }
  onAuthentication(){
  	console.log("does it come here");
  }
  handleSignIn(){
  	console.log()
  }
}

export default App;
