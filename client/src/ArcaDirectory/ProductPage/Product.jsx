import React from 'react';
import Navbar from '../Navbar.jsx';
import { ReactiveBase, DataSearch} from '@appbaseio/reactivesearch'
import Main from './components/Main.jsx';
import Footer from '../Footer.jsx';

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <ReactiveBase
          app="arca-housing-list"
          credentials="gyt60WE3T:18fa7784-3c3b-45e5-a1c5-f54b2696506a"
          type="listing"
          theme={{
            //Fix this to what the rest of the styling is later
            primaryColor: '#A9A9A9'
          }}
        >
        <Navbar />
        </ReactiveBase>
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Product;