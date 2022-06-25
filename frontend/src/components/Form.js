import React,{useState} from 'react'
import '../css/loginregister.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { motion } from "framer-motion"
import "../css/form.css"



const Register = () => {
  const [ userdata, setUserdata] = useState({
    name: localStorage.getItem('Name'),
    email:localStorage.getItem('email'),
    phonenumber:localStorage.getItem('phonenumber'),
    address:localStorage.getItem('address'),
    pincode:localStorage.getItem('pincode')
    
})
const handleChange = e => {
  const { name, value } = e.target
  setUserdata({
      ...userdata,
      [name]: value
  })
    localStorage.setItem('Name',userdata.name);
    localStorage.setItem('email',userdata.email);
    localStorage.setItem('phonenumber',userdata.phonenumber);
    localStorage.setItem('address',userdata.address);
    localStorage.setItem('pincode',userdata.pincode);
}
   
  
  return (
    <div id='form'>
    <h1>Application form</h1>
    <br />
    <form action="" placeholder='profile pic' encType='multipart/form-data'>
    <input type="file" placeholder='profile pic' accept='image/*' />
       <h1>section A </h1>
      <input type="text" name="name" value={userdata.name} placeholder="Your Name" onChange={ handleChange }  ></input>
      
      <input type="date" placeholder='dateofbirth' />
      <select name="gender" id="gender">
      <option value="male">man</option>
      <option value="female">Women</option>
      </select>
      
      <select name="martial status" id="martial status">
      <option value="married">married</option>
      <option value="unmarried">unmarried</option>
      <option value="divorced">Katgaya</option>
      </select>
      <select name="country" id="country">
  <option value="india">India</option>
  <option value="russia">Russia</option>
  <option value="us">USA</option>
  <option value="england">England</option>
</select>
<select name="state" id="State">
  <option value="up">Uttarpradesh</option>
  <option value="maharastra">maharastra</option>
  <option value="Karnataka">Karantaka</option>
  <option value="Rajasthan">Rajasthan</option>
</select>
<br /> 
    <h1>Section B</h1>

    
      <input type="text" name="email" value={userdata.email} placeholder="Your Email" onChange={ handleChange }></input>
      <input type="text" name="phonenumber" value={userdata.phonenumber} placeholder="Your phone number" onChange={ handleChange }></input>
      <input type="text" name="address" value={userdata.address} placeholder="Your  adress" onChange={ handleChange }></input>
      <input type="text" name="pincode" value={userdata.pincode} placeholder="pincode" onChange={ handleChange }></input>
       </form>
    </div>
  )
}

export default Register
