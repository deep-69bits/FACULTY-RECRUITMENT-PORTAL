import React,{useState} from 'react'
import '../css/faculty.css'
import facultypos from '../photos/facultypos.jpg'
import nonacadmic from '../photos/nonacadmic.jpg'
import visiting from '../photos/visiting.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


var xyz="";
export default function Faculty(props) {
     const c ={
       color: "blue"
     }
  return (
      <>
      <motion.div className="cards" initial={{width:0}} 
      animate={{width:"100%"}} 
      exit={{ x: window.innerWidth, transition:{duration:0.1} }}>
      <div class="card">
      <img className='image' src={facultypos} alt="Avatar"/>
      <div class="container">
      <h3><b>Faculty positions</b></h3>
      <motion.button  className='btn-1'  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link   className='link' to={'/apply'}>Apply now</Link>
      </motion.button>
      </div>
      </div> 
      <div class="card">
      <img className='image' src={visiting} alt="Avatar"/>
      <div class="container">
      <h3><b>Project positions</b></h3>
      <motion.button  className='btn-1'  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link   className='link' to={'/apply'}>Apply now</Link>
      </motion.button>

      </div>
      </div> 
      <div class="card">
      <img className='image' src={nonacadmic} alt="Avatar"/>
      <div class="container">
      <h3><b>Non-Academic positions</b></h3>

      <motion.button  className='btn-1'  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link   className='link' to={'/apply'}>Apply now</Link>
      </motion.button>
      
      

      </div>
      </div> 
      </motion.div> 
      </>
  )
}

export {xyz};