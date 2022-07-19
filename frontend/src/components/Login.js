import React,{useState} from 'react'
import '../css/loginregister.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import axios from "axios"
import { useNavigate} from "react-router-dom"
import { GoogleLogin, GoogleLogout } from 'react-google-login';




const Login = ({ setLoginUser}) => {

  const navigate = useNavigate();
  const clientId = "648485481702-ehal33fhakluktvv0bq2tmklnsgd4be7.apps.googleusercontent.com";
  const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

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
      localStorage.setItem('email',user.email);
  }

  const login = () => {
      axios.post("http://localhost:9000/login", user)
      .then(res => {
        alert(res.data.message)
        if(res.data.message==="Login Successfull"){
          navigate("/info")
        }

        })
        
  }

  return (
      <motion.div className="register" initial={{width:0}} 
      animate={{width:"100%"}} 
      exit={{ x: window.innerWidth, transition:{duration:0.1} }}>
      <div id='reg'>
      <h1>Sign In</h1>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
      <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
      <div className="buttons">
      <motion.button className="button"  whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} onClick={login}>Login</motion.button>
      <br />
      <Link id='loginlink' to='/register'>Create an account</Link>
      <br /><br />
      
      </div>
      { showloginButton ?
        <GoogleLogin
        clientId={clientId}
        buttonText="Sign In"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        /> : null}
      </div>
      </motion.div>
  )
}

export default Login




