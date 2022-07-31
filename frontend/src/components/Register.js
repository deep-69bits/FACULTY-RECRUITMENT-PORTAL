import React,{useState} from 'react'
import '../css/loginregister.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { motion } from "framer-motion"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom'





const Register = () => {
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
  const navigate = useNavigate();

  const [ user, setUser] = useState({
      name: localStorage.getItem('Name'),
      email:localStorage.getItem('email'),
      phonenumber:localStorage.getItem('phonenumber'),
      password:"",
      reEnterPassword: ""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
        localStorage.setItem('Name',user.name);
        localStorage.setItem('email',user.email);
        localStorage.setItem('phonenumber',user.phonenumber);
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
      <motion.div  className="register" initial={{width:0}} 
      animate={{width:"100%"}} 
      exit={{ x: window.innerWidth, transition:{duration:0.1} }}>
       <div id='reg'>
       <h1>SIGN UP</h1>
       <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }  ></input>
       <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
       <input type="text" name="phonenumber" value={user.phonenumber} placeholder="Your phone number" onChange={ handleChange }></input>
       <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
       <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
       <div className="buttons">
       <motion.button className="button" onClick={register}  whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} >Register</motion.button>
       <br />
       <Link id='loginlink' to='/login'>already have an account?</Link>
       <br /> <br />
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

export default Register
