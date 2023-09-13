import  { Component } from 'react';
import style from './StarLine.module.css';

export default class StarLine extends Component {

    
    render() {
        // eslint-disable-next-line react/prop-types
        const {name,color} = this.props
     
    return (
      <>
       <h2 className={`fw-bold  fs-1`} style={{"--color":color}}>{name}</h2>
        <div className={` ${style.star}  mb-2`} style={{"--color":color}}>
        <i className={`fa-solid fa-star `}> </i>
        </div>



      </>
    );
  }
}
