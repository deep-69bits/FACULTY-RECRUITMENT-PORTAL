import React from 'react'
import '../css/applying.css'
import TypewriterComponent from 'typewriter-effect'
import { motion } from "framer-motion"
import interview from '../photos/interview.jpg'
import { Link } from 'react-router-dom'
import Login from './Login'
import Faculty,{xyz} from './Faculty'



export default function Applying(props) {
  return (
    <>
    <motion.div className="body" initial={{width:0}} 
    animate={{width:"100%"}} 
    exit={{ x: window.innerWidth, transition:{duration:2} }}>
      <div className='apply' >
        <img id='interview' src={interview} alt="" />
    <motion.div className='textrun'>
      <p className='runningtext'>
      <TypewriterComponent onInit={(typewriter) =>{
        typewriter.typeString("IITL Lucknow  invites applications from well qualified Ph.D Degree holders for the following faculty position at the level of Assistant Professor in its various Academic Units and System Architect in Computer Services Centre.")
        .start();
      }} ></TypewriterComponent>
      </p>
      <p id='position'>{xyz}</p>
      </motion.div>
      <div className='buttons'>
      <Link to='/'><button className='btn-1'>Advertisment</button> </Link>
      <Link to='/register'> <button className='btn-1'>Apply now</button></Link>
      <Link to='/'><button className='btn-1'>Benifits </button> </Link>
       <Link to='/'><button className='btn-2'>Go back </button></Link> 
      </div>
      </div>
    </motion.div>
    </>
  )
}
