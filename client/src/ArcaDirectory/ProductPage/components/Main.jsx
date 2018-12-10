import React from 'react';
// import { Link } from 'react-router-dom'
import styles from './../styles/Main.css';
import PhotoGallery from './PhotoGallery.jsx';
import ListingInfo from './ListingInfo.jsx';

{/* <Route path='/:handle' component={ListingInfo}/> */}
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className={ styles.Main }>
        <PhotoGallery data={this.props.data}/>
        <ListingInfo data={this.props.data}/>
        {/* This is the Main. <Link to='/'> Click me to go to Landing Page.</Link> */}
      </div>
    )
  }
}

export default Main;