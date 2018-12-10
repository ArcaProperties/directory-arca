import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import styles from './../styles/Main.css';

export class MapContainer extends Component {
    
    

    render() {
        const style = {
            width: '58%',
            height: '500px',
            display: 'inline-block !important',
            overflow:'hidden'
        }
      return (
        <Map
            google={this.props.google}
            style={style}
            initialCenter={{
            lat: 40.854885,
            lng: -88.081807
            }}
            zoom={15}
            onClick={this.onMapClicked}
        >
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyB3pwglRJJovKBOlzyu73Sf7BqF6V-_o1w")
  })(MapContainer)