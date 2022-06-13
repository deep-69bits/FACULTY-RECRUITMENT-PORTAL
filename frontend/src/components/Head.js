import React from 'react'
import '../css/mystyle.css'
import logo from "../photos/logo.png"
import { motion } from 'framer-motion'
export default function Head() {
  return (
      <>
      <div className='top' ></div>
      <div className='bottomhead'>
      <div>
      <motion.img   id='logo' src={logo} alt="image" />
      </div>
      <div className='headtext'>
        <p>Indian Institute of Information Technology, Lucknow</p><br />
        <p>भारतीय सूचना प्रौद्योगिकी संस्थान, लखनऊ</p><br />
        <p>(An Institute of National Importance by the Act of Parliament)</p>
      </div>

      
      </div>
      </>
  )
}
