import  { Component } from 'react'
import style from './InputForm.module.css'
export default class InputForm extends Component {

    checkInput(e){
        const myLabel =  e.target.parentElement.querySelector('.myLabel')
        if(e.target.value !=""){
            myLabel.style.top='0px'
        }else{
            myLabel.style.top='20px'
        }
    }
      
    
  render() {
    const {typleof,placehold} = this.props
    return (
     <>
      <div className="my-3">
      <div className={` ${style.label}  overflow-hidden  `}>
      <label className='position-relative myLabel' htmlFor={placehold}>{placehold}</label>
      </div>
        <input onChange={(e)=>{this.checkInput(e)}}  type={typleof} placeholder={placehold} className={`form-control`} id={placehold} />

      </div>
     
     </>
    )
  }
}
