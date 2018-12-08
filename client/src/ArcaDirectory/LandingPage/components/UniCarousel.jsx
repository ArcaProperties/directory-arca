import React from 'react';
import Carousel from 'nuka-carousel';
import styles from './../styles/UniCarousel.css';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
 
const unis = [
  {name: "Bocconi", img: "aleximg/uni-01.jpg"},
  {name: "Naba", img: "aleximg/uni-02.jpg"},
  {name: "Politecnico", img: "aleximg/uni-03.jpg"},
  {name: "Catolica", img: "aleximg/uni-04.jpg"},
  {name: "Brera", img: "aleximg/uni-05.jpg"},
  {name: "Milano", img: "aleximg/uni-06.jpg"},
  {name: "Universita", img: "aleximg/uni-07.jpg"},
  {name: "Torino", img: "aleximg/uni-08.jpg"},
  {name: "Venezia", img: "aleximg/uni-09.jpg"},
];

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
        <img className={ styles.background } src={uni.img}/>
        <div className={ styles.centered } >{uni.name}</div>
      </div>
      </Link>)

    return (
      <Carousel slidesToShow={5} wrapAround={true} cellSpacing={10}
        renderBottomCenterControls={() => {}}
        renderCenterLeftControls={({ previousSlide }) => (
          <button className={classNames({[styles.testimonials__arrow]: true, [styles.testimonials__arrow__left]: true, [styles.testimonials__arrow__05]: true, [styles.testimonials__arrow__05__left]: true})} onClick={previousSlide}></button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button className={classNames({[styles.testimonials__arrow]: true, [styles.testimonials__arrow__right]: true, [styles.testimonials__arrow__05]: true, [styles.testimonials__arrow__05__right]: true})} onClick={nextSlide}></button>
        )}
      >
        {renderedOutput}
      </Carousel>
    );
  }
}
