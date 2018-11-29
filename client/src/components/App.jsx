import React from 'react';
import HomesList from './HomesList.jsx'
import Route from './Route.jsx';

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
      <div>
        current home: { this.state.home }
        <HomesList list={ this.state.listOfHomes} selectHome={ this.handleClick }/>
        <Route />
      </div>
    )
  }
}

export default App;