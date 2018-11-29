import React from 'react';
import Navbar from '../Navbar.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Product;