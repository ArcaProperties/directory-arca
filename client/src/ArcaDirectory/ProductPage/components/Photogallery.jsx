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
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
    return(
      <div className={ styles.PhotoGallery }>
        This is the PhotoGallery.
        <div className={ styles.imageGallery }>
          <ImageGallery items={images} />
        </div>
      </div>
    )
  }
}

export default PhotoGallery;
