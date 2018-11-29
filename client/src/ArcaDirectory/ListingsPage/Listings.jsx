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
        <Navbar/>

        <div className="left-col">
          <DateRange
            componentId="DateRangeSensor"
            dataField="date_from"
            title="Dates"
            numberOfMonths={2}
            queryFormat="basic_date"
            initialMonth={new Date('12-01-2018')}
            URLParams={false}
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
            URLParams={false}
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
            componentId="AccommodateBoxSensor"
            dataField="accommodates"
            defaultSelected={2}
            label="left"
            queryFormat="gte"
            
            URLParams={false}
            data={{"label":"Accommodates", "start":1, "end":15}}
          />
        </div>
        
        <ResultCard
          className="right-col"
          componentId="ResultCard"
          dataField="name"
          pagination={true}
          paginationAt="bottom"
          size={20}
          onData={data=>({
            image: data.image,
            title: data.name,
            description: (
              <div>
                <div className="price">${data.price}/day</div>
                <p className="info_tag">{data.property_type} · {data.bedrooms} Bedrooms · {data.bathrooms} Baths</p>
              </div>
            ),
            //later link this to the product page
            url:"localhost:7777/#/product"
          })}

          react={{
            and: ['SearchSensor', 'search', 'DateRangeSensor', 'DynamicRangeSensor', 'BedroomBoxSensor', 'AccommodateBoxSensor']
          }}

          // innerClass={{
          //   resultStats: 'result-stats',
          //   list: 'list',
          //   listItem: 'list-item',
          //   image: 'image',
          // }}
        />
        </ReactiveBase>
      </div>
    )
  }
}

export default Listings;