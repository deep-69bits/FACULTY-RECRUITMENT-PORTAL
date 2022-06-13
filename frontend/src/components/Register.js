import React,{useState} from 'react'
import '../css/form.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { motion } from "framer-motion"



const Register = () => {

  const navigate = useNavigate();

  const [ user, setUser] = useState({
      name: "",
      email:"",
      phonenumber:"",
      password:"",
      reEnterPassword: ""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const register = () => {
      const { name, email, phonenumber ,password, reEnterPassword } = user
      if( name && email && phonenumber && password && (password === reEnterPassword)){
          axios.post("http://localhost:9000/register", user)
          .then( res => {
              alert(res.data.message)
              navigate("/login")
          })
      } else {
          alert("invlid input")
      }
      
  }

  return (
      <motion.div className="register" initial={{width:0}} 
      animate={{width:"100%"}} 
      exit={{ x: window.innerWidth, transition:{duration:0.1} }}>
          <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
          <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
          <input type="text" name="phonenumber" value={user.phonenumber} placeholder="Your phone number" onChange={ handleChange }></input>
          <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
          <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
          <div className="buttons">
          <button className="button" onClick={register} >Register</button>
          <button className="button" onClick={() => navigate("/login")}>Login</button>
          </div>
      </motion.div>
  )
}

export default Register
