import React from 'react';
import Navbar from '../Navbar.jsx';
import { ReactiveBase } from '@appbaseio/reactivesearch'
import Main from './components/Main.jsx';
import Footer from '../Footer.jsx';



class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  

  render() {
    // const Appbase = require("appbase-js");

    // const appbaseRef=Appbase({
    //   url: "https://scalr.api.appbase.io",
    //   app:"arca-housing-list",
    //   credentials:"gyt60WE3T:18fa7784-3c3b-45e5-a1c5-f54b2696506a",
    // })

    // appbaseRef.get({
    //   type: "listing",
    //   id: "AVsUianLtBk7_I4P_XI4"
    // }).then(response => {
    //   console.log("Success: ", JSON.stringify(response, null, '\t'));
    // }).catch(error => {
    //   console.log("Error: ", error);
    // });
    console.log(this.props.location.state)
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
        
        <Main data={this.props.location.state}/>
        <Footer />
      </div>
    )
  }
}

export default Product;