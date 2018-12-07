import { ReactiveBase, NumberBox} from '@appbaseio/reactivesearch'
import React from 'react'

class numberBoxBedroom extends React.Component {
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
            <NumberBox
                componentId="BedroomBoxSensor"
                dataField="bedrooms"
                defaultSelected={2}
                label="left"
                queryFormat="gte"

                URLParams={false}
                data={{"label":"Bedrooms", "start":1, "end":15}}
            />
          </ReactiveBase>
        )
    }
}
export default numberBoxBedroom