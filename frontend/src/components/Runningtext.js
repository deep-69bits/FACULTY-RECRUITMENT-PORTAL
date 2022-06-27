import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import '../css/runningtext.css'
import { motion } from "framer-motion"


export default function Runningtext() {
  return (
      <>
      <motion.div className='text' initial={{y: -500}} animate={{y:-10}} transition={{delay: 0.3,type: "spring",stiffness: 200}}  >
      <p>
      <TypewriterComponent onInit={(typewriter) =>{
        typewriter.typeString("Welcome to our new careers section")
        .pauseFor(2)
        .deleteAll()
        .typeString("At IIIT Lucknow, we provide the opportunities, challenges and support to live the future of your work now. Explore where we work and opportunities that await you.")
        .pauseFor(3)
        .deleteAll()
        .typeString("We wish you a smooth experience ahead!")
        .start();
      }} ></TypewriterComponent>
      </p>
      </motion.div>
      </>
  )
}
