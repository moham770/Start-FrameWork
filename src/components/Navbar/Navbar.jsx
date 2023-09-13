import  { Component } from 'react'
import  './Navbar.css'
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
 componentDidMount(){
   const nav =document.querySelector('nav')
   const scrollAmount = window.scrollY;
   if(scrollAmount > 0){
     
     nav.style.cssText=" padding: 4px 0px !important;"
   }else{
     nav.style.cssText=" padding: 15px 0px !important;"

   }
   window.addEventListener('scroll', ()=>{
    const scrollAmount = window.scrollY;
    if(scrollAmount > 0){
      nav.style.cssText=" padding: 4px 0px !important;"
    }else{
      nav.style.cssText=" padding: 15px  0px !important;"
    }
  });
 }
  
render() {

    return (
      <>
   <nav className="navbar navbar-expand-lg bg-nav navbar-dark  fixed-top py-2">
        <div className="container">
          <Link  className="navbar-brand text-white fs-2 fw-bold" to="/home">START FRAMEWORK</Link>
          <input id="checkbox2" type="checkbox"/>
<label className="toggle toggle2 navbar-toggler" htmlFor="checkbox2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <div id="bar4" className="bars"></div>
  <div id="bar5" className="bars"></div>
  <div id="bar6" className="bars"></div>
</label>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item fw-bolder mx-1 " >
               <NavLink  to="/about" activeClassName="active" className="nav-link text-white">ABOUT</NavLink>
              </li>
              <li className="nav-item fw-bolder mx-1 ">
               <NavLink  to="/protofolio" activeClassName="active"   className="nav-link text-white">PROTOFOLIO</NavLink>
              </li>
              <li className="nav-item fw-bolder mx-1 " >
               <NavLink  to="/contact" activeClassName="active" className="nav-link text-white">CONTACT</NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      
      
     
      
      </>
    )
  }
}
