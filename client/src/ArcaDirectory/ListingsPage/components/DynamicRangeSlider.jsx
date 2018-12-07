import { DynamicRangeSlider, ReactiveBase} from '@appbaseio/reactivesearch'
import React from 'react'

class dynamicRangeSlider extends React.Component {
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
          </ReactiveBase>
        )
    }
}
export default dynamicRangeSlider