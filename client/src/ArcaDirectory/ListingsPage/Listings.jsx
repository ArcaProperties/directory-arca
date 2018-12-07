import React from 'react';
import ResultCard from '@appbaseio/reactivesearch';
import styles from './styles/ListingsPage.css';
import Navbar from '../NavBar.jsx';
import DateRange from './components/DateRange.jsx';
import DynamicRangeSlider from './components/DynamicRangeSlider.jsx';
import NumberBoxBedroom from './components/NumberBoxBedroom.jsx';
import NumberBoxAccomodates from './components/NumberBoxAccomodates.jsx';

class Listings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div className="container">


        <Navbar/>

        <div className="left-col">
          <DateRange/>
          <DynamicRangeSlider/>
          <NumberBoxBedroom/>
          <NumberBoxAccomodates/>
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
      </div>
    )
  }
}

export default Listings;