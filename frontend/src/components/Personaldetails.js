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
    post: localStorage.getItem('post'),
    email:localStorage.getItem('email'),
    phonenumber:localStorage.getItem('phonenumber'),
    aadharcard:localStorage.getItem('aadharcard'),
    address:localStorage.getItem('address'),
    caste:localStorage.getItem('caste'),
    subcaste:localStorage.getItem('subcaste'),
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
    localStorage.setItem('post',userdata.post);
    localStorage.setItem('email',userdata.email);
    localStorage.setItem('aadharcard',userdata.aadharcard)
    localStorage.setItem('caste',userdata.caste)
    localStorage.setItem('subcaste',userdata.subcaste)
    localStorage.setItem('phonenumber',userdata.phonenumber);
    localStorage.setItem('address',userdata.address);
    localStorage.setItem('pincode',userdata.pincode);
    localStorage.setItem('dob',userdata.dob);
    localStorage.setItem('gender',userdata.gender);

}

    
    const upload = (e) => {
      e.preventDefault();
      const { name, post,  email,aadharcard ,caste,subcaste, phonenumber ,address, pincode,dob,gender} = userdata
      if( name && post && email && aadharcard && caste && subcaste && phonenumber && address && pincode && dob && gender){
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
    <motion.div id='form'  onLoad={check} onloadend={check}  initial={{ width: 0 }}
    animate={{ width: "75%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }} >
    <nav>
    <ul>
      
    <li><Link   className='qq ' to='/form/personaldetails'>Personal details</Link></li>
    <li><Link className='qq' to= {next ? '/form/acadmics' : '/form/acadmics' }>Acadmic details</Link></li>
    <li><Link className='qq' to='/form/experiencedetails'>Experience details</Link></li>
    <li><Link className='qq' to='/form/publicationdetails'>Publications details</Link></li>
    <li><Link className='qq' to='/form/documents'>Documnets upload</Link></li>
    </ul>
    </nav>
    <br />
   
    <div id='sectionA' >
    <h1>Personal Details</h1>
    <br />
    <hr />
    <br />
    <form action="" >
    
    <br />
    
    <div>
 
    <div id='imag'>
    {imageUrls.map((url) => {
      return <img id='imgage' src={url} />;
    })}
    </div>
    <br />
    <div>
    <input  style={{width: "300px",margin: "auto"}}
    type="file"
    onChange={(event) => {
      
      setImageUpload(event.target.files[0]);
    }}
    />
    <br />
    </div>
    <span style={{color:"red"}}>Format: JPG, JPEG, PNG</span><br /><br />
    <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} onClick={uploadFile} id='btn1'> Upload Image</motion.button></div>

    <br /> <br /><br /> 
     <table className='table'>
     
     <tbody>
      <tr>
      <td data-label="Name">
        
      <label htmlFor="name">Name:</label></td>
       
      <td data-label="Name"><input type="text" name="name" value={userdata.name} placeholder="Your Name" onChange={ handleChange }  ></input></td>

      <td data-label="Name"><label htmlFor="address">Post Applied for* :</label></td>
      <td data-label="Name">
      <input type="text" name="post" value={userdata.post} placeholder="post applied for" onChange={ handleChange }  ></input>
      </td> 
      </tr>

      <tr>
      <td><label htmlFor="dob">Date Of Birth:</label></td>
      <td><input type="date"  name="dob" value={userdata.dob} placeholder="Your birthdate" onChange={ handleChange }  ></input></td>
      <td><label htmlFor="gender">Gender:</label></td>
      <td>
      <input type="text" name="gender" value={userdata.gender} placeholder="Your gender" onChange={ handleChange }  ></input>
      </td>
      </tr>


       <tr>
       <td>
       <label htmlFor="email">Email:</label>
       </td>
       <td>
       <input type="email" disabled name="email" value={userdata.email} placeholder="Your email" onChange={ handleChange }  ></input>
       </td>
       <td>
       <label htmlFor="address">Aadhar Card :</label>
       </td>
       <td>
       <input type="text" name="aadharcard" value={userdata.aadharcard} placeholder="Your address" onChange={ handleChange }  ></input>
       </td>
       </tr>
        
       <tr>
        <td>
        <label htmlFor="address">Caste:</label>
        </td>
        <td>
        <input type="text" name="caste" value={userdata.caste} placeholder="Your address" onChange={ handleChange }  ></input>
        </td>
       
       
       <td>
       <label htmlFor="address">Caste Sub-Category:</label>
       </td>
       <td>
       <input type="text" name="subcaste" value={userdata.subcaste} placeholder="Your address" onChange={ handleChange }  ></input>
       </td>
       </tr> 
       <tr>
       <td>
       <label htmlFor="address">PWD:</label>
       </td>
       <td>
       <input type="text"  placeholder="Yes/No" onChange={ handleChange }  ></input>
       </td>
       <td>
       <label htmlFor="address">Ex-Serviceman:</label>
       </td>
       <td>
       <input type="text"   placeholder="Yes/no" onChange={ handleChange }  ></input>
       </td>
       </tr>

     </tbody>
     </table>
   

    
    
    
    
    
    
       <br /><br /><br /> 

    
    

    
    

    
    
    
     <h1>Contact Details</h1>
     <br /><hr /><br />
      <table>
        <tbody>
        <tr><td>
        <label htmlFor="email">Email:</label>
        </td>
        <td>
        <input type="email" disabled name="email" value={userdata.email} placeholder="Your email" onChange={ handleChange }  ></input>
        </td>
        <td>
        <label htmlFor="phonenumber">Contact Number:</label>
        </td>
        <td>
        <input type="text" name="phonenumber" value={userdata.phonenumber} placeholder="Your phonenumber" onChange={ handleChange }  ></input>
        </td>
        </tr>

        <tr><td>
        <label htmlFor="address">Adress:</label>
        </td>

        <td>
        <input type="text" name="address" value={userdata.address} placeholder="Your address" onChange={ handleChange }  ></input>
        </td>
        <td>
        <label htmlFor="pincode">Pincode:</label>
        </td>
        <td>
        <input type="text" name="pincode" value={userdata.pincode} placeholder="Your pincode" onChange={ handleChange }  ></input>
        </td>
        </tr>
        </tbody>
      </table>

    <div>
  

    
  
    
    
  
   
    
    </div>
    
    

     <br /><br />

    <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} id='btn1' type='submit'  onClick={upload} > submit</motion.button>
    </form>
    </div>
       
    </motion.div>
  )
}

export default Register
