import React, { Component } from 'react'
import style from './Contact.module.css'
import StarLine from '../StarLine/SratLine'
import Form from '../Form/Form'

export default class Contact extends Component {
  render() {
    return (
     <>
     
     <section>
            <div className="protofolio ">
                <div className="container py-5   d-flex justify-content-center align-items-center flex-column ">
                     <StarLine color='#2c3e50' name='CONATCT SECTION'/>
                        <Form />
                </div>

            </div>
        </section>
     
     
     </>
    )
  }
}
