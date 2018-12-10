import React from 'react';
import styles from './../styles/PhotoGallery.css';
import ImageGallery from 'react-image-gallery';
import "../../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class PhotoGallery extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {}
  }

  render() {

    return(
      <div className={ styles.PhotoGallery }>
        <img className={ styles.image } src={this.props.data.image}></img>
      </div>
    )
  }
}

export default PhotoGallery;
