import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Landing from './LandingPage/Landing.jsx';
import Listings from './ListingsPage/Listings.jsx';
import Product from './ProductPage/Product.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing}/>
          <Route path="/listings" component={Listings} />
          <Route path="/product/" component={Product} />
        </div>
      </Router>
    )
  }
}

export default App;