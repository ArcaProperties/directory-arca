import { ReactiveBase, DateRange} from '@appbaseio/reactivesearch'
import React from 'react'

class dateRange extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }
    
    render(){
        return(
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
                dataField="date_from"
                title="Dates"
                numberOfMonths={2}
                queryFormat="basic_date"
                initialMonth={new Date('12-01-2018')}
                URLParams={false}
            />
          </ReactiveBase>
        )
    }
}
export default dateRange