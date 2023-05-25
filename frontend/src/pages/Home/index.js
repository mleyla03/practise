import React from 'react'
import { Link } from 'react-router-dom'
import About from '../About'
import Blog from '../Blog'
import {Helmet} from "react-helmet";
import Style  from "./index.module.css"
const Home = () => {
  return (
    <>
     <Helmet>
    
                <title>Home</title>
        
            </Helmet>
    <div className={Style.home}>
        <div className={Style.homep}>
            <h1>Hello We're BizPro</h1>
            <p>Sub Head.Moto or mission subtitle</p>
            <Link to="#" className={Style.button}><span>See Our Project</span></Link>
        </div>
      
    </div>
    <About/>

    <Blog/>
    
    </>
  )
}

export default Home