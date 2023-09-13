import  { Component } from 'react'
import style from './FooterDescription.module.css'

export default class FooterDescription extends Component {
  render() {
    return (
      <>
        <footer>
            <div className={style.footeBg+` text-white text-center p-4`}>
                <p className='m-0'>Copyright © Your Website 2021</p>
            </div>
        </footer>
      
      </>
    )
  }
}
