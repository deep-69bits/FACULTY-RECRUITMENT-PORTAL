import React ,{useState,useEffect,useRef} from 'react'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { useNavigate , Link } from 'react-router-dom';
import '../css/document.css'
import axios from "axios"
import { Navigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'




export default function Documents() {
    
  const navigate = useNavigate();
    const [imageUpload, setImageUpload] = useState(null);
    const [classtenUpload, setclass10Upload] = useState(null);
    const [classteweleUpload, setclass12Upload] = useState(null);
    const [bachlerUpload, setbachlerUpload] = useState(null);
    const [mastersUpload, setmastersUpload] = useState(null);
    const [ResearchUpload, setResearchUpload] = useState(null);
    const [signatureUpload, setsignatureUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
   const email =localStorage.getItem('email');
  const imagesListRef = ref(storage, `${email}/`);
  
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${email}/${"resume"}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        alert("Your file has been uploaded you can change it by reuploading it");
      });
    });
    //  window.location.reload();
  };
  const signature = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${email}/${"signature"}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        alert("Your file has been uploaded you can change it by reuploading it");
      });
    });
    //  window.location.reload();
  };
  
  const upload10th = () => {
    if (classtenUpload == null) return;
    const imageRef = ref(storage, `${email}/${"10th"}`);
    uploadBytes(imageRef, classtenUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        alert("Your file has been uploaded you can change it by reuploading it");

      });
    });
    //  window.location.reload();
  };
  const upload12th = () => {
    if (classteweleUpload == null) return;
    const imageRef = ref(storage, `${email}/${"12th"}`);
    uploadBytes(imageRef, classtenUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        alert("Your file has been uploaded you can change it by reuploading it");

      });
    });
    //  window.location.reload();
  };
  
  const bachler = () => {
    if (bachlerUpload == null) return;
    const imageRef = ref(storage, `${email}/${"bachler"}`);
    uploadBytes(imageRef, classtenUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        alert("Your file has been uploaded you can change it by reuploading it");

      });
    });
    //  window.location.reload();
  };
  const masters  = () => {
    if (mastersUpload == null) return;
    const imageRef = ref(storage, `${email}/${"masters"}`);
    uploadBytes(imageRef, classtenUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        alert("Your file has been uploaded you can change it by reuploading it");

      });
    });
    //  window.location.reload();
  };
  const Research  = () => {
    if (ResearchUpload == null) return;
    const imageRef = ref(storage, `${email}/${"Research"}`);
    uploadBytes(imageRef, classtenUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        alert("Your file has been uploaded you can change it by reuploading it");

      });
    });
    //  window.location.reload();
  };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);
  // {imageUrls.map((url) => {
  //   return <img id='op' src={url} />;
  // })}
  const [ userdatasubmitted, setUserdataubmitted] = useState({
   
    email:localStorage.getItem('email')
    
})
  const check = (e)=>{
    e.preventDefault();
    const { email } = userdatasubmitted
    if(  email ){
      axios.post("http://localhost:9000/userdatasubmitted", userdatasubmitted)
      .then( res => {
        if(res.data.message==="form filled completely"){
           alert("form has been submitted succesfully");
          console.log(res.data.id);
           localStorage.setItem('id',res.data.id);
            navigate('/formsubmitted')
          }
          else {
          console.log(res.data.id);
          

        }
      })
    } else {
      
      
    }
    
  } 
   



  return (
    <motion.div  className="App" id='form' initial={{ width: 0 }}
    animate={{ width: "75%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
    <nav>
    <ul>
    <li><Link   className='qq' to='/form/personaldetails'>Personal details</Link></li>
    <li><Link className='qq' to=  '/form/acadmics' >Acadmic details</Link></li>
    <li><Link className='qq' to='/form/experiencedetails'>Experience details</Link></li>
    <li><Link className='qq' to='/form/publicationdetails'>Publications details</Link></li>
    <li><Link className='qq' to=''>Documnets upload</Link></li>
    </ul>
    </nav>
    <br />
    <div id='resume'>
    <h1>Documents</h1>
    <div>
    
    <table>
    <tbody>
    <tr>  
     <td> 
     <h1>Class 10th</h1><hr className='hr1' />
     <input id='res'
     type="file"
     onChange={(event) => {
       setclass10Upload(event.target.files[0]);
     }}/></td>
     <td>
     <h1>class 12th</h1><hr className='hr1' /> 
     <input id='res'
     type="file"
     onChange={(event) => {
       setclass12Upload(event.target.files[0]);
     }}/></td>
    </tr>
    <tr>
    <td><motion.button onClick={upload10th} whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} id='btn1'> Upload </motion.button><br /><span style={{color:"red"}}>File Format: PDF</span></td>
    <td><motion.button onClick={upload12th}  whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }}id='btn1'> Upload </motion.button><br /><span style={{color:"red"}}>File Format: PDF</span></td>
    </tr>
    <tr>
    <td>
     <br /><h1>Bachlers</h1> <br /><hr className="hr1" />
     <input id='res'
    type="file"
    onChange={(event) => {
      setbachlerUpload(event.target.files[0]);
    }}/>
    </td>
    <td><br />
    <h1>Masters</h1><br /><hr className="hr1" /> 
    <input id='res'
    type="file"
    onChange={(event) => {
      setmastersUpload(event.target.files[0]);
    }}/></td>
    </tr>
     <tr>
    
    <td><motion.button onClick={bachler} whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} id='btn1'> Upload </motion.button><br /><span style={{color:"red"}}>File Format: PDF</span></td>
     <td><motion.button onClick={masters}  id='btn1'> Upload </motion.button><br /><span style={{color:"red"}}>File Format: PDF</span></td>
     </tr>
     <tr>
     <td>
     <br /><h1>Resume</h1><br /><hr className='hr1'/> 
     <input id='res'
    type="file"
    onChange={(event) => {
      setImageUpload(event.target.files[0]);
    }}
    />
     </td>
     <td> <br /><h1> Reseach Experience </h1><br /><hr className='hr1'/><input id='res'
     type="file"
     onChange={(event) => {
       setResearchUpload(event.target.files[0]);
     }}/>
     </td>
     </tr>

     <tr>
     <td><motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} onClick={uploadFile} id='btn1'> Upload </motion.button><br /><span style={{color:"red"}}>File Format: PDF</span></td>
     <td><motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} onClick={Research} id='btn1'> Upload </motion.button><br /><span style={{color:"red"}}>File Format: PDF</span></td>
     </tr>
    </tbody>
    </table>

   
    
    </div>
    </div>
    
    
   
  
    
    
    
    
    
  
    

     <br />
     <br />
      <h2>Declaration to Be Signed by the Candidate*  </h2>
      <hr className="hr1" />
      <div style={{width: "75%" , margin: "auto"}}> 
      <br />
      <h3>I hereby declare that the information given by me in the Application is true, complete and correct to the best of my knowledge and belief and that nothing has been concealed or distorted. If at any time, I am found to have concealed/distorted any information or given any false statement, my application/appointment shall liable to be summarily rejected/terminated without notice or compensation.</h3>
      </div>
      <br />  
      
      <input id='res'
     type="file"
     onChange={(event) => {
       setsignatureUpload(event.target.files[0]);
     }}/>
     <p style={{color: "#636363"}}>(Upload Signatures)</p>
     <span style={{color:"red"}}>Format: JPG, JPEG, PNG</span>
     <br /><br />
     <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} onClick={signature} id='btn1'> Upload </motion.button>
     <br /><br />

    <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} id='btn1' onClick={check}>finally done</motion.button>

    
  </motion.div>
  )
}
