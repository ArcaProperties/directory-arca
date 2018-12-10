import React from 'react';
// import {ReactiveBase, ReactiveMap} from '@appbaseio/reactivesearch'
import MapContainer from './Map.jsx';
import styles from './../styles/ListingInfoDetails.css';
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN = 'pk.eyJ1IjoiZGF2aWRsZWU1MDAiLCJhIjoiY2pwaG5vN3Y3MHliYTN2b2J1MThkajZ5NCJ9.6FTd4cecdYRsWYrsn4y2zQ'

var ListingInfoDetails = (props) => {
  return(
    // <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js'></script>
    // <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css' rel='stylesheet' />

    <div className={ styles.ListingInfoDetails }>
      <h1 className={styles.title}>{props.data.name} </h1>
      <h4 className={styles.subtitle}>{props.data.bedrooms} Bedroom · {props.data.bathrooms} Bath · {props.data.accommodates} Person </h4>
      
      <div className={ styles.about }>
        <h2>About this property</h2>
        <p>
          A wonderful home away from home for any student. {props.data.name} is a charming 
           · {props.data.bedrooms} bedroom · {props.data.bathrooms} bathroom · {props.data.property_type}. 
          {props.data.name} can accomodate up to {props.data.accommodates}. Each room is furnished
          with a · {props.data.bed_type} Located near the University of Washington, this property is perfect 
          for any college student. 
        </p>
      </div>

      <div className = {styles.location}>
        <h2>Location</h2>
        <MapContainer data={props.data}/>
      </div>

      <div className = {styles.owner}>
        <img src={props.data.host_image}></img>
        <h2 className={styles.hostHeader}>Owners</h2>
        <p>
          The owners of this beautiful home is/are {props.data.host_name}. If you rent
          this home you'll get to meet them in person! Further information regarding the 
          booking of this property can be found with {props.data.host_name}. 
        </p>
      </div>
    </div>
  )
}

export default ListingInfoDetails;
