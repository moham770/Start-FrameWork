import  { Component } from 'react'
import style from './Footer.module.css'
import FooterDescription from '../FooterDesc/FooterDescription'
export default class Footer extends Component {
  render() {
    return (
    <>
        <section>
            <div className={`footer ${style.mainBg}`}>
                <div className="container text-light py-5">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="item text-center">
                                <h3>Location</h3>
                                <p className='m-1'>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item text-center">
                                <h3>AROUND THE WEB</h3>
                               <div className="d-flex mb-3 justify-content-center">
                                <div className={style.icon}>
                                <i className="fa-brands fa-facebook"></i>
                                </div>
                                <div className={style.icon}>
                                <i className="fa-brands fa-twitter"></i>
                                </div>
                                <div className={style.icon}>
                                <i className="fa-brands fa-linkedin"></i>
                                </div>
                                <div className={style.icon}>
                                <i className="fa-solid fa-globe"></i>
                                </div>
                               </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item text-center">
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                               

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterDescription/>
    
    </>
    )
  }
}
