import React,{useState} from 'react'
import '../css/faculty.css'
import facultypos from '../photos/facultypos.jpg'
import nonacadmic from '../photos/nonacadmic.jpg'
import visiting from '../photos/visiting.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


var xyz="";
export default function Faculty(props) {
    
  return (
      <>
      <motion.div className="cards" initial={{width:0}} 
      animate={{width:"100%"}} 
      exit={{ x: window.innerWidth, transition:{duration:0.1} }}>
      <div class="card">
      <img className='image' src={facultypos} alt="Avatar"/>
      <div class="container">
      <h3><b>Faculty positions</b></h3>
      <Link to={'/apply'} ><button oncli  className='btnoncard' >Assistant Professors</button></Link>
      <Link to={'/apply'}><button  className='btnoncard' >Assistant Professors</button></Link>
      
      </div>
      </div> 
      <div class="card">
      <img className='image' src={visiting} alt="Avatar"/>
      <div class="container">
      <h3><b>Visiting Faculty positions</b></h3>
      <Link to={'/apply'}><button onClick={()=>{xyz="Visiting Faculty positions: Visiting Faculty positions"}} className='btnoncard' >Assistant Professors</button></Link>
      <Link to={'/apply'}><button  className='btnoncard' >Assistant Professors</button></Link>

      

      </div>
      </div> 
      <div class="card">
      <img className='image' src={nonacadmic} alt="Avatar"/>
      <div class="container">
      <h3><b>Non-Acadmic positions</b></h3>
      <Link to={'/apply'}><button  className='btnoncard' >Assistant Professors</button></Link>
      <Link to={'/apply'}><button  className='btnoncard' >Assistant Professors</button></Link>
      

      </div>
      </div> 
      </motion.div>
      </>
  )
}

export {xyz};