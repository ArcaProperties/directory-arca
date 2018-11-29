import React from 'react';
import styles from './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className={ styles.Footer }>
        This is the Footer.
      </div>
    )
  }
}

export default Footer;
