import React from 'react';
import styles from './Navbar.css';
import { ReactiveBase, DataSearch} from '@appbaseio/reactivesearch'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <nav className={ styles.Navbar }>
        <div className="title"> ArcaSearch </div>
        <DataSearch
          componentId="SearchSensor"
          dataField="name"
          placeholder="Search here..."
          autosuggest="true"
          iconPosition="left"
        />
      </nav>
    )
  }
}
export default Navbar;
