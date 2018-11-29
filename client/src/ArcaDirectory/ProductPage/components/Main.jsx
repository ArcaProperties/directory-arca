import React from 'react';
import { Link } from 'react-router-dom'
import styles from './../styles/Main.css';
import Photogallery from './Photogallery.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className={ styles.Main }>
        <Photogallery />
        This is the Main. <Link to='/'> Click me to go to Landing Page.</Link>
      </div>
    )
  }
}

export default Main;
