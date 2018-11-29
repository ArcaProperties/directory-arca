import React from 'react';
import styles from './Navbar.css';
import { ReactiveBase, DataSearch} from '@appbaseio/reactivesearch'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKeyword: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    console.log('handleSearch: ', query);
    this.setState({
      searchKeyword: query
    })
  }

  render() {
    return(
      <nav className="nav">
        <div className="title"> ArcaSearch </div>
        <DataSearch
          componentId="SearchSensor"
          dataField="name"
          placeholder="Search here..."
          autosuggest={true}
          URLParams={true}
          iconPosition="left"
          className="search"
          onValueSelected={
            function(value, cause, source) {
              console.log("current value: ", this)
              this.handleSearch(value);
            }
          }
        />
      </nav>
    )
  }
}
export default Navbar;
