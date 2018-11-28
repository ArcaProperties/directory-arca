import React from 'react';

var Home = ({home, selectHome}) => {
  return(
    <div>
      <li onClick={() => selectHome(home)}>{home}</li>
    </div>
  )
}

export default Home;