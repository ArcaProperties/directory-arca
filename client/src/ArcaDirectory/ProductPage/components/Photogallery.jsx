import React from 'react';
import styles from './../styles/Photogallery.css';

class Photogallery extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {}
  }

  render() {
    return(
      <div className={ styles.Photogallery }>
        This is the PhotoGallery.
      </div>
    )
  }
}

export default Photogallery;
