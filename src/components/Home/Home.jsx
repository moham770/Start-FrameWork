import  { Component } from 'react'
import style from './Home.module.css'
import StarLine from '../StarLine/SratLine'

export default class Home extends Component {
   
    
    render() {
      const url = `https://routeegy.github.io/startFramework/assets/images/avataaars.svg`
    return (
      <>
        <section >
            <div className={`${style.mainHeight} d-flex justify-content-center align-items-center  flex-column`}>
                <div className={`${style.imgBg}  mb-3`}>
                    <img src={url}  alt="" />
                </div>
                
                    <StarLine color="#fff" name='START FRAMEWORK'/>
            <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </section>
      </>
    )
  }
}
