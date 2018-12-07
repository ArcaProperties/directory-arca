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
      </nav>
    )
  }
}
export default Navbar;
