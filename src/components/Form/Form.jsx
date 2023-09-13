import React, { Component } from 'react'
import style from './Form.module.css'
import InputForm from '../InputForm/InputForm'
export default class Form extends Component {

  render() {
    return (
        <div className="container  w-75">
     <form >
        <InputForm placehold="userName: "  typleof='text' />
        <InputForm placehold="userAge: "  typleof='number' />
        <InputForm placehold="userEmail: "  typleof='email' />
        <InputForm placehold="userPassword: "  typleof='Password'/>
        <button className={`btn ${style.btnMainColor}`}>send Message</button>
     </form>
        </div>
    )
  }
}
