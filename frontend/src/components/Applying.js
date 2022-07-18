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
        typewriter.typeString("IIIT Lucknow  invites applications from well qualified Ph.D Degree holders for the following faculty position at the level of Assistant Professor in its various Academic Units and System Architect in Computer Services Centre.")
        .start();
      }} ></TypewriterComponent>
      </p>
      
      </motion.div>
      <div className='buttons'>
      <motion.button className='applycomponentbutton b2'>
      <Link className='applycomponentlink b2' to='/advertisment'>Advertisment</Link>
      </motion.button>
      <motion.button className='applycomponentbutton b1'> 
      <Link to='/register' className='applycomponentlink b1 '> Apply now  </Link>
      </motion.button>
       <motion.button className='applycomponentbutton'>
       <Link to='/benefits' className='applycomponentlink'>Benefits </Link>
       </motion.button> <br />
       <motion.button className='gobackbutton'>
       <Link to='/' className='gobacklink'>Go back</Link> 
       </motion.button>
      </div>
      </div>
    </motion.div>
    </>
  )
}
