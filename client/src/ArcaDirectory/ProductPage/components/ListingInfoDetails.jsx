import React from 'react';
import styles from './../styles/ListingInfoDetails.css';

var ListingInfoDetails = (props) => {
  return(
    <div className={ styles.ListingInfoDetails }>
    <p>
      A wonderful home away from home for any student. {props.data.title} is a charming
      {props.data.bedrooms} bedroom {props.data.bathrooms} bathroom {props.data.property_type}. 
      {props.data.title} can accomodate up to {props.data.accommodates}.
    </p>
      This is the ListingInfoDetails. This is the name of the house: 
      {props.data.title}
    </div>
  )
}

export default ListingInfoDetails;
