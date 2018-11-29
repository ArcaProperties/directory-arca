import React from 'react';
import HomesList from './HomesList.jsx';
import { ReactiveBase } from '@appbaseio/reactivesearch';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listOfHomes: ['1140 W 27th', '12 W Adams blvd' , 'Wadas place'],
      home: '1140 W 27th'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.setState({
      home: '12 W Adams blvd'
    })
  }

  handleClick(clickedHome) {
    console.log(clickedHome);
    this.setState({
      home: clickedHome
    })
  }

  render(){
    return(
      <section className="container">
        <ReactiveBase
          app="arca-housing-list"
          credentials="gyt60WE3T:18fa7784-3c3b-45e5-a1c5-f54b2696506a"
          type="listing"
        ></ReactiveBase>
      </section>
      // <div>
      //   current home: { this.state.home }
      //   <HomesList list={ this.state.listOfHomes} selectHome={ this.handleClick }/>
      // </div>
    )
  }
}

export default App;