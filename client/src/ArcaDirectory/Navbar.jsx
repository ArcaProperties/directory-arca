import React from 'react';
import styles from './Navbar.css';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { DataSearch} from '@appbaseio/reactivesearch'


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
      <nav className="nav" className={ styles.Navbar }>
        <div className={ styles.title }> 
        <Link to='/'><img src="img/arca-logo-black.png" className={styles.titleicon}></img></Link>
        </div>

        <DataSearch
          componentId="SearchSensor"
          dataField="name"
          placeholder="Search here..."
          autosuggest={true}
          URLParams={true}
          iconPosition="left"
          className= {styles.search}
          onValueSelected={ (value, cause, source) => this.handleSearch(value)}
          
        />
      </nav>
    )
  }
}
export default Navbar;
