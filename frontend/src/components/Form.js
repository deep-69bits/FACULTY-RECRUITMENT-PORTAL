import React,{useState} from 'react'
import '../css/loginregister.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { motion } from "framer-motion"
import "../css/form.css"
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import  userpic from  '../photos/blank-profilepic.webp'



const Register = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});  
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const [ userdata, setUserdata] = useState({
    name: localStorage.getItem('Name'),
    email:localStorage.getItem('email'),
    phonenumber:localStorage.getItem('phonenumber'),
    address:localStorage.getItem('address'),
    pincode:localStorage.getItem('pincode'),
    dob: localStorage.getItem('dob'),
    gender: localStorage.getItem('gender')
    
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
    localStorage.setItem('dob',userdata.dob);
    localStorage.setItem('gender',userdata.gender);

}
    const [image,setImage]=useState('');
    const [imagePreview, setImagepreview] =useState(null)
    

     const handlechange=(e)=>{
      console.log(e.target.files);
      setImage(e.target.files[0]);
      const selected = e.target.files[0];
      console.log(selected);
      localStorage.setItem('profilepic',selected.name)
      e.preventDefault();
      const url='http://localhost:9000/images';
      const formdata = new FormData();
      formdata.append('image',image)
      axios.post(url,formdata).then((res)=>{
        console.log(res);
      })
      const ALLOWED_TYPES = ["image/png" ,"image/jpeg","image/jpg"];
      if(selected && ALLOWED_TYPES.includes(selected.type)){
        console.log("ok")
        let reader = new FileReader();
        reader.onloadend=()=>{
          setImagepreview(selected);
        }
        reader.readAsDataURL(selected);
        console.log(selected)
      }
      else{
        console.log("nope")
      }
     }




     const handleapi=(e)=>{
       e.preventDefault();
      const url='http://localhost:9000/images';
      const formdata = new FormData();
      formdata.append('image',image)
      axios.post(url,formdata).then((res)=>{
        console.log(res);
      })


     }



      
  const defaultvalue = {
      name: "",
      email:""
  }
  const validationSchema = yup.object().shape({
      name: yup.string().required("please enter your name"),
      email: yup.string().required("please enter your email").email("Invalid format")
  })
  const onhandlesubmit = (e) =>{
   
    console.log("hi");
  }

  const upload = (e) => {
    e.preventDefault();
    const { name, email, phonenumber ,address, pincode} = userdata
    if( name && email && phonenumber && address && pincode){
        axios.post("http://localhost:9000/userdata", userdata)
        .then( res => {
            alert(res.data.message)
        })
    } else {
        alert("invlid input")
    }

}


  
  return (
    <div id='form'>
    <h1>Application form</h1>
    <br />
    <div id='sectionA' >
    <form action="" onSubmit={handleapi}>
    <h1>Section A</h1>
    <br />
    <img src={userpic} alt="" id='userpic' />
    <div id='imagediv'>
    <label htmlFor="filetag">
    <i class="fa fa-2x fa-camera"></i>
    <input type="file" placeholder='profile pic' id='filetag'  onChange={handlechange} />
    </label>
    </div>
    <button type='submit' onClick={handleapi}> upload</button>
    <div>
    <label htmlFor="name">Name:
    </label>
    <input type="text" name="name" value={userdata.name} placeholder="Your Name" onChange={ handleChange }  ></input>
    </div>
    <div>
    <label htmlFor="dob">Date of birth:
    <input type="date" name="dob" value={userdata.dob} placeholder="Your birthdate" onChange={ handleChange }  ></input>
    </label>
    </div>
    <div>
    <label htmlFor="gender">Gender:
    <input type="text" name="gender" value={userdata.gender} placeholder="Your gender" onChange={ handleChange }  ></input>
    </label>
    </div>
    <div>
    <label htmlFor="email">Email:
    <input type="email" name="email" value={userdata.email} placeholder="Your email" onChange={ handleChange }  ></input>
    </label>
    </div>
    <div>
    <label htmlFor="phonenumber">Contact Number:
    <input type="text" name="phonenumber" value={userdata.phonenumber} placeholder="Your phonenumber" onChange={ handleChange }  ></input>
    </label>
    </div>
    <div>
    <label htmlFor="address">Adress:
    <input type="text" name="address" value={userdata.address} placeholder="Your address" onChange={ handleChange }  ></input>
    </label>
    </div>
    <div id='q'> 
    <label htmlFor="pincode">Pincode:
    <input type="text" name="pincode" value={userdata.pincode} placeholder="Your pincode" onChange={ handleChange }  ></input>
    </label>
    </div>
    
    <button type='submit'  onClick={upload} onSubmit={handleapi}> submit</button>
    </form>
    </div>
       
    </div>
  )
}

export default Register
