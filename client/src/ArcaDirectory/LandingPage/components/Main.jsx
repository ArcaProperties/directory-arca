import React from 'react';
import { Link } from 'react-router-dom'
import styles from './../styles/Main.css';
import UniCarousel from './UniCarousel.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className={ styles.Main }>
        <UniCarousel />
      </div>
    )
  }
}

export default Main;
