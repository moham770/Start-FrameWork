import  { Component } from 'react'
import style from './About.module.css'
import StarLine from '../StarLine/SratLine'
export default class About extends Component {
  render() {
    return (
      <>
        <section>
            <div className={` ${style.mainHeight} d-flex justify-content-center align-items-center  flex-column`}>
                    <StarLine color="#fff"  name='ABOUT COMPONENT'/>
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-6">
                  <div className={`${style.item}`}>
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                  </div>
                  </div>
                  <div className="col-md-6">
                  <div className={`${style.item}`}>
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      
      
      </>
    )
  }
}
