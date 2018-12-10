import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import styles from './../styles/Main.css';

export class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

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
            lat: this.props.data.lat,
            lng: this.props.data.lon
            }}
            zoom={15}
            onClick={this.onMapClicked}
        >
        <Marker
            position={{lat: this.props.data.lat, lng: this.props.data.lon}} />
        <Marker />
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyB3pwglRJJovKBOlzyu73Sf7BqF6V-_o1w")
  })(MapContainer)