import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Nav, Jumbotron, Button, Carousel } from 'reactstrap';
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
// import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Booming Vacation Rentals</h1>
        </header> */}
        <Nav />
        <Carousel /> 
        <Card />
        {/* <Footer /> */}
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
      </div>
    );
  }
}

export default App;
