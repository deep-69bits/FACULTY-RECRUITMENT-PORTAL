import React,{useState,useEffect} from 'react'
import '../css/loginregister.css'
import { useNavigate , Link } from 'react-router-dom';
import axios from "axios"
import { motion } from "framer-motion"
import "../css/form.css"
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import  userpic from  '../photos/blank-profilepic.webp'
import Avatar from "@mui/material/Avatar";
import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";





const Register = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});  
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const navigate = useNavigate();
  
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

    
    const upload = (e) => {
      e.preventDefault();
      const { name, email, phonenumber ,address, pincode} = userdata
      if( name && email && phonenumber && address && pincode){
        axios.post("http://localhost:9000/userdata", userdata)
        .then( res => {
          SetNext(true);
          localStorage.setItem('next',true)
          localStorage.setItem('color','#028A0F')
          setcolor('#028A0F')
          alert(res.data.message)
          navigate("/form/acadmics")
        })
      } else {
        alert("invlid input")
      }
    }
   

    const check = (e)=>{
      e.preventDefault();
      const { name, email, phonenumber ,address, pincode} = userdata
      if( name && email && phonenumber && address && pincode){
        axios.post("http://localhost:9000/finduser", userdata)
        .then( res => {
          if(res.data.message==="user found"){
            SetNext(true);
             localStorage.setItem('color','#028A0F')
             setcolor('#028A0F')
          }
          else {
            localStorage.setItem('color','red')
            setcolor('red');
            SetNext(false);
          localStorage.setItem('next',false)
            
          }
        })
      } else {
        localStorage.setItem('color','red')
        setcolor('red');
        SetNext(false);
          localStorage.setItem('next',false)
        
      }
      
    }
    const [color,setcolor] =useState(localStorage.getItem('color'))
    const [next,SetNext] =useState(localStorage.getItem('next'));
 
   const [imagepre,setImagepre]=useState(localStorage.getItem("imagepre"));
  


    const [imageUpload, setImageUpload] = useState(null);
const [imageUrls, setImageUrls] = useState([]);
 const email =localStorage.getItem('email');
const imagesListRef = ref(storage, `profile/${email}/`);

const uploadFile = (e) => {
  e.preventDefault();
  if (imageUpload == null) return;
  const imageRef = ref(storage, `profile/${email}/pic`);
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      setImageUrls((prev) => [...prev, url]);
    });
  });
  
};

useEffect(() => {
  listAll(imagesListRef).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  });
}, []);

  
  return (
    <div id='form' onLoad={check} onloadend={check} >
    <nav>
    <ul>
      
    <li><Link   className='qq ' to='/form/personaldetails'>Personal details</Link></li>
    <li><Link className='qq' to= {next ? '/form/acadmics' : '/form/acadmics' }>Acadmic details</Link></li>
    <li><Link className='qq' to='/form/experiencedetails'>Experience details</Link></li>
    <li><Link className='qq' to='/form/publicationdetails'>Publications details</Link></li>
    <li><Link className='qq' to='/form/documents'>Refree details</Link></li>
    </ul>
    </nav>
    <br />
    <h1>Personal Details</h1>
    <br />
    <div id='sectionA' >
    <form action="" >
    
    <br />
    
    <div>
 
    <div id='imag'>
    {imageUrls.map((url) => {
      return <img id='imgage' src={url} />;
    })}
    </div>
    <div>
    <input 
    type="file"
    onChange={(event) => {
      
      setImageUpload(event.target.files[0]);
    }}
    />
    </div>
    <button onClick={uploadFile} id='btn1'> Upload Image</button></div>

    <br />
    
    <div>
    <label htmlFor="name">Name:
    </label>
    <input type="text" name="name" value={userdata.name} placeholder="Your Name" onChange={ handleChange }  ></input>
    </div>
    <div>
    <label htmlFor="dob">Date Of Birth:
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
    <input type="email" disabled name="email" value={userdata.email} placeholder="Your email" onChange={ handleChange }  ></input>
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
    
    <button id='btn1' type='submit'  onClick={upload} > submit</button>
    </form>
    </div>
       
    </div>
  )
}

export default Register
