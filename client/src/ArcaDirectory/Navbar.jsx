import React from 'react';
import styles from './Navbar.css';
import { Redirect } from 'react-router'
import { ReactiveBase, DataSearch} from '@appbaseio/reactivesearch'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKeyword: '',
      redirect: false
    }
  }

  handleSearch(query) {
    console.log('handleSearch: ', query);
    this.setState({
      searchKeyword: query,
      redirect: true
    })
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to='/listings'/>;
    } 
 
    return(
      <nav className="nav">
        <div className="title"> ArcaSearch </div>
        <ReactiveBase
          app="arca-housing-list"
          credentials="gyt60WE3T:18fa7784-3c3b-45e5-a1c5-f54b2696506a"
          type="listing"
          theme={{
            //Fix this to what the rest of the styling is later
            primaryColor: '#A9A9A9'
          }}
        >
          <DataSearch
            componentId="SearchSensor"
            dataField="name"
            placeholder="Search here..."
            autosuggest={true}
            URLParams={true}
            iconPosition="left"
            className="search"
            onValueSelected={ (value, cause, source) => this.handleSearch(value)}
          />
        </ReactiveBase>
      </nav>
    )
  }
}
export default Navbar;
