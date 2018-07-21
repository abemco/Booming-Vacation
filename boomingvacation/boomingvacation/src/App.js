import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
// import { Nav, Jumbotron, Button, Carousel } from 'reactstrap';
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Footer from "./components/Footer";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Carousel /> 
        <Card />
        <Footer />
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
      </div>
      
    );
  }
}

export default App;


