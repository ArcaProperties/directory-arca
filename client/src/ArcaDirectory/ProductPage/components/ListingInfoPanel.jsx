import React from 'react';
import styles from './../styles/ListingInfoPanel.css';
import { ReactiveBase, DateRange } from '@appbaseio/reactivesearch'

var ListingInfoPanel = (props) => {
  return(
    <div className={ styles.ListingInfoPanel }>
      <h2>Pricing</h2>
      <p><span className={styles.price}>${props.data.price*30}.00</span> per month</p>
      
      <div className={ styles.listingActionItems }>
        <ReactiveBase
            app="arca-housing-list"
            credentials="gyt60WE3T:18fa7784-3c3b-45e5-a1c5-f54b2696506a"
            type="listing"
            theme={{
              //Fix this to what the rest of the styling is later
              primaryColor: '#A9A9A9',
            }}
            
          >
          <DateRange
            className={ styles.dateRange }
            componentId="DateRangeSensor"
            dataField="date_from"
            title="Dates"
            numberOfMonths={1}
            queryFormat="basic_date"
            initialMonth={new Date('7-01-2017')}
            URLParams={false}
          />
        </ReactiveBase>

        <button type="button" className={ styles.button }><span className={styles.buttonContent}>Request more information</span></button>
      </div>
    </div>
  )
}

export default ListingInfoPanel;
