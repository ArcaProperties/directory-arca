import React from 'react';
import { ReactiveBase, DataSearch, DateRange, NumberBox, DynamicRangeSlider, ResultCard} from '@appbaseio/reactivesearch';
import navBar from '../NavBar.jsx';
import styles from './styles/ListingsPage.css';
import Navbar from '../NavBar.jsx';

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
        {/* Nav bar goes here */}
        <Navbar/>
        <DateRange
          componentId="DateRangeSensor"
          dataField="date_from"
          title="Dates"
          numberOfMonths={2}
          queryFormat="basic_date"
          initialMonth={new Date('12-01-2018')}
        />

        <DynamicRangeSlider
          componentId="DynamicRangeSensor"
          dataField="price"
          title="Price"
          defaultSelected={(min, max) => (
            {
              "start": min,
              "end": Math.min(min + 50, max)
            }
          )}
          rangeLabels={(min, max) => (
            {
              "start": "$" + min,
              "end": "$" + max
            }
          )}
          stepValue={1}
          showHistogram={true}
          showFilter={true}
          URLParams={true}
        />

        <NumberBox
          componentId="BedroomBoxSensor"
          dataField="bedrooms"
          defaultSelected={2}
          label="left"
          queryFormat="gte"
          URLParams={false}
          data={{"label":"Bedrooms", "start":1, "end":15}}
        />
        
        <NumberBox
          componentId="AccomodateBoxSensor"
          dataField="accomodates"
          defaultSelected={2}
          label="left"
          queryFormat="gte"
          URLParams={false}
          data={{"label":"Accomodates", "start":1, "end":15}}
        />

        <ResultCard
          componentId="ResultCard"
          dataField="name"
          pagination={true}
          paginationAt="bottom"
          onData={
            function(data){
              return{
                image: data.image,
                title: data.name,
                description: (
                  <div>
                    <div className="price">${data.price}</div>
                    <p className="info_tag">{data.property_type} · {data.bedrooms} Bedrooms · {data.bathrooms} Bathrooms</p>
                  </div>
                ),
                //later link this to the product page
                url:data.listing_url
          }}}

          react={{
            and: ['DateRangeSensor', 'DynamicRangeSensor', 'BedroomBoxSensor', 'AccomodateBoxSensor', 'SearchSensor']
          }}

          innerClass={{
            resultStats: 'result-stats',
            list: 'list',
            listItem: 'list-item',
            image: 'image',
          }}
        />
        </ReactiveBase>
      </div>
    )
  }
}

export default Listings;