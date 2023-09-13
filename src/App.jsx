import  { Component } from 'react'
import Layout from './components/Layout/Layout'

import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import About from './components/About/About'
import Protofolio from './components/Protofolio/Protofolio'
import Contact from './components/Contact/Contact'




const router = createHashRouter([
  {path:'',element: <Layout/>,children:[
    {path:'',element:<Home/>,},
    {path:'/home',element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/protofolio',element:<Protofolio/>},
    {path:'/contact',element:<Contact/>},
    {path:'*',element:<NotFound/>},
  ]}
])
export default class App extends Component {
  render() {

    
    return (
      <>
        <RouterProvider router={router} />
      </>
    )
    
  }

}
