import  { Component } from 'react'
import style from './Photo.module.css'
export default class Photo extends Component {
  render() {

    const {photo} = this.props
    return (
      <>
          <div className="col-md-4 rounded-2  p-0 ">
                        <div className={`${style.photo} m-3 rounded-2 overflow-hidden position-relative `} >
                          <img src={photo} className=' w-100 rounded-2 ' alt="" />
                          <div className={`${style.overLay} overLay  position-absolute top-0 start-0 w-100 h-100  opacity-0 d-flex justify-content-center align-items-center`}>
                          <i className="fa-solid fa-plus fa-5x text-white"></i>
                          </div>
                        </div>
                      </div>
   
      
      
      </>
    )
  }
}
