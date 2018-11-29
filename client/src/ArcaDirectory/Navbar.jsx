import React from 'react';
import styles from './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className={ styles.Navbar }>
        This is the Navbar.
      </div>
    )
  }
}

export default Navbar;
