import React from 'react';
import styles from './../styles/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className={ styles.Main }>
        This is the Main.
      </div>
    )
  }
}

export default Main;
