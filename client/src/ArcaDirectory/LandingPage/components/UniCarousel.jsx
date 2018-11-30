import React from 'react';
import Carousel from 'nuka-carousel';
import styles from './../styles/UniCarousel.css';
import { Link } from 'react-router-dom'
 
const unis = ["Bocconi", "Naba", "Politecnico", "Catolica", "Brera", "Milano"];

export default class UniCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slidesToShow: 5,
    }
  }

  handleClick(value) {
    console.log('handleClick: ', value);
  }

  render() {

    var renderedOutput = unis.map(uni => 
      <Link to="/listings">
      <div onClick={() => this.handleClick(uni)} className={ styles.container }>
        <img className={ styles.background }src="https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d444ded281ab624819b6e13a5c048450&auto=format&fit=crop&w=1950&q=80"/>
        <div className={ styles.centered } >{uni}</div>
      </div>
      </Link>)

    return (
      <Carousel slidesToShow={5}
      >
        {renderedOutput}
      </Carousel>
    );
  }
}
