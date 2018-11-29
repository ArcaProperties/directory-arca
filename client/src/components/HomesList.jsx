import React from 'react';
import Home from './Home.jsx';

var HomesList = ({ list, selectHome }) => {
  return(
    <div>
      Here is the list of homes:
      {
        list.map( home => 
          <Home selectHome={selectHome} home={home} />
        )
      }
      Random Test for Git push
    </div>
  )
}

export default HomesList;

