import React from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import { DataSearch } from '@appbaseio/reactivesearch';
import styles from './styles/ListingsPage.css';

class Listings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div className="container">
        <ReactiveBase
          app="arca-housing-list"
          credentials="gyt60WE3T:18fa7784-3c3b-45e5-a1c5-f54b2696506a"
          type="listing"
          theme={{
            //Fix this to what the rest of the styling is later
            primaryColor: '#A9A9A9'
          }}
        >

        <DateRange
          componentId="DateRangeSensor"
          dateField="date_from"
          title="Dates"
          numberOfMonths={2}
          queryFormat="basic-date"
          initialMonth={new Date('12-01-2018')}
        />

        
        </ReactiveBase>
      </div>
    )
  }
}

export default Listings;