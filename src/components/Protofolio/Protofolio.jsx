import { Component } from 'react'
import StarLine from '../StarLine/SratLine'
import photo1 from '../../assets/poert1.png'
import photo2 from '../../assets/port2.png'
import photo3 from '../../assets/port3.png'
import Photo from '../Photo/Photo'
import style from './Protofolio.module.css'


export default class Protofolio extends Component {
  componentDidMount() {
    const layer = document.getElementById('layer');
    const img = layer.querySelector('img');
    document.addEventListener('click', (e) => {
      if ( e.target.classList.contains('overLay') || e.target.classList.contains('fa-plus')){
        layer.classList.remove('d-none');
        const src = e.target.parentElement.querySelector('img').getAttribute('src');
        img.setAttribute('src', src);
        layer.addEventListener('click',(e)=>{
         
          if(e.target.classList.contains("layer")){
            layer.classList.add('d-none')
          }
        })
      } 
    });
  }


  render() {  
    return (
        <>
        <section className='position-relative'>
            <div className="protofolio ">
                <div className="container py-5   d-flex justify-content-center align-items-center flex-column ">
                     <StarLine color='#2c3e50' name='PORTFOLIO COMPONENT'/>
                     <div className="row w-100 g-4 ">
                      <Photo photo={photo1}/>
                      <Photo photo={photo2}/>
                      <Photo photo={photo3}/>
                      <Photo photo={photo1}/>
                      <Photo photo={photo2}/>
                      <Photo photo={photo3}/>
                     </div>
                </div>
            </div>
     <div className={`${style.layer} layer d-flex justify-content-center align-items-center d-none`} id='layer'>

            {/* <div className="container bg-danger  d-flex justify-content-center align-items-center"> */}
              {/* <div className="row bg-danger"> */}
                <div className="col-md-4 p-0   mx-auto  ">
                  <div className="item p-2  overflow-hidden">
             <img src={photo3} className='w-100  rounded-2' alt="" />
                  
                  </div>
                </div>
              {/* </div> */}
            {/* </div> */}
      
          {/* <div className={` row  bg-danger p-0 justify-content-center`}>
            <div className="col-md-2 w-100 ">
            <div className={`${style.imgLayer} w-100 `}>
     <img src={photo3} className='w-100' alt="" />
     </div>
            </div>
          </div> */}
       




      </div>
        </section>
        </>
    )
  }
}
