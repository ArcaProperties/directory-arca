import React from 'react';
import { Link } from 'react-router-dom';
import {ReactiveBase, DateRange, NumberBox, DynamicRangeSlider, ResultCard, ResultList} from '@appbaseio/reactivesearch';
import styles from './styles/ListingsPage.css';
import Navbar from '../NavBar.jsx';

export default() => (
      <div className="container" >
        <ReactiveBase
          app="arca-housing-list"
          credentials="gyt60WE3T:18fa7784-3c3b-45e5-a1c5-f54b2696506a"
          type="listing"
          theme={{
            //Fix this to what the rest of the styling is later
            primaryColor: '#A9A9A9',
          }}
          
        >
        <Navbar/>
        <div className={styles.leftcol} >
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
            stepValue={5}
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

        {/* <Link to={{pathname:'/product', state: {
          image: data.image,
          title: data.name,
          price: data.price,
          property_type: data.property_type,
          num_bedrooms: data.bedrooms,
          num_bathrooms: data.bathrooms,
          bed_type: data.bed_type,
          accomodates: data.accomodates,
          host_image: data.host_image,
          host_name: data.host_name,
          room_type: data.room_type
        } 
        }}> */}
        <ResultCard
          className={styles.rightcol}
          componentId="ResultCard"
          dataField="name"
          pagination={true}
          paginationAt="bottom"
          size={18}
          
          onData={data=>({
            image: data.image,
            title: data.name,
            description: (
              <Link to={{pathname:'/product', state: {
                image: data.image,
                title: data.name,
                price: data.price,
                property_type: data.property_type,
                num_bedrooms: data.bedrooms,
                num_bathrooms: data.bathrooms,
                bed_type: data.bed_type,
                accomodates: data.accomodates,
                host_image: data.host_image,
                host_name: data.host_name,
                room_type: data.room_type
              } 
              }}>
              <div>
                <div className="price">${data.price}/day</div>
                <p className="info_tag">{data.property_type} · {data.bedrooms} Bedrooms · {data.bathrooms} Baths</p>
              </div>
              </Link>
            ),
            //later link this to the product page
            //url:"localhost:7777/#/product"
            
            
            // containerProps: {
            //   onClick: ()=> <Link to={{pathname:'/product', state: {
            //     image: data.image,
            //     title: data.name,
            //     price: data.price,
            //     property_type: data.property_type,
            //     num_bedrooms: data.bedrooms,
            //     num_bathrooms: data.bathrooms,
            //     bed_type: data.bed_type,
            //     accomodates: data.accomodates,
            //     host_image: data.host_image,
            //     host_name: data.host_name,
            //     room_type: data.room_type
            //   } 
            //   }}></Link>
            // }
 

          })}
          
          react={{
            and: ['SearchSensor', 'search', 'DateRangeSensor', 'DynamicRangeSensor', 'BedroomBoxSensor', 'AccommodateBoxSensor']
          }}

          innerClass={{
            resultStats: styles.resultStats,
            list: styles.list,
            listItem: styles.listItem,
            image: styles.image,
          }} 
        />
        {/* </Link> */}
        </ReactiveBase>
      </div>
    );