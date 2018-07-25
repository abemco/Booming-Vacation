import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import './index.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Footer from "./components/Footer";
import Contact from "./components/Contact";



const App = () => (
  <div>
  <Nav />
    <div>
      <Router>
        
          <switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/properties/:id" component={Properties} /> 
          </switch>
              

      </Router>
    </div>
   <Contact />
   <Footer />
  </div>
  );

export default App;



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Nav />
//         <Carousel /> 
//         <Card />
//         <Contact />
//         <Footer />
//         <p className="App-intro">
//           {/* To get started, edit <code>src/App.js</code> and save to reload. */}
//         </p>
//       </div>
      
//     );
//   }
// }

// export default App;


