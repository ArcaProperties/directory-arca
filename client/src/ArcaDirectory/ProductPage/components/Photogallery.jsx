import React from 'react';
import styles from './../styles/PhotoGallery.css';

class PhotoGallery extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {}
  }

  render() {
    return(
      <div className={ styles.PhotoGallery }>
        This is the PhotoGallery.
      </div>
    )
  }
}

export default PhotoGallery;
