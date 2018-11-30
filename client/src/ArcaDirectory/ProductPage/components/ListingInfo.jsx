import React from 'react';
import styles from './../styles/ListingInfo.css';
import ListingInfoDetails from './ListingInfoDetails.jsx';
import ListingInfoPanel from './ListingInfoPanel.jsx';

var ListingInfo = (props) => {
  return(
    <div className={ styles.ListingInfo }>
      <ListingInfoDetails />
      <ListingInfoPanel />
    </div>
  )
}

export default ListingInfo;