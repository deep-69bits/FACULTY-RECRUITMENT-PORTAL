import React,{useState} from 'react'
import '../css/loginregister.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { motion } from "framer-motion"
import "../css/form.css"



const Register = () => {

  
   

  return (
    <div id='form'>
    <h1>Application form</h1>
      <form action="" placeholder='profile pic'>
      <input type="file" />
         <input type="text" placeholder='Post Applied for' />
          <input type="text" placeholder='Depatment'  />
          <input type="text" name="" id="" placeholder='' />

       </form>
    </div>
  )
}

export default Register
