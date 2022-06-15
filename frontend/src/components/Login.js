import React,{useState} from 'react'
import '../css/form.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import axios from "axios"
import { useNavigate} from "react-router-dom"


const Login = ({ setLoginUser}) => {

  const navigate = useNavigate();
  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
      axios.post("http://localhost:9000/login", user)
      .then(res => {
        alert(res.data.message)
        if(res.data.message==="Login Successfull"){
          navigate("/form")
        }

        })
        
  }

  return (
      <div className="register">
          <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
          <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
          <div className="buttons">
          <button className="button" onClick={login}>Login</button>
          <button className="button" onClick={() => navigate("/register")}>Register</button>
          </div>
      </div>
  )
}

export default Login




