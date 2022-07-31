import React ,{useState,useEffect} from 'react'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import jsPDF from 'jspdf'
import '../css/pdf.css'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

 
export default function Downloadpdf() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
     const email =localStorage.getItem('email');
    const imagesListRef = ref(storage, `${email}/`);
  
    useEffect(() => {
        listAll(imagesListRef).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageUrls((prev) => [...prev, url]);
            });
          });
        });
      }, []);

    const generatepdf=()=>{
       console.log("ok")
       var doc = new jsPDF("o","pt","a0");
       doc.html(document.querySelector("#pdf"),{
        callback: function(pdf){
            pdf.save("mypdf.pdf");
        }
       })
    }
     
     const [data,setdata]=useState({
      email: localStorage.getItem('email')
     })
      
      const [id,setid]=useState('');
     const getid=(e)=>{
      e.preventDefault();
    const { email } = data
       if(  email ){
      axios.post("http://localhost:9000/userdatasubmitted", data)
      .then( res => {
        if(res.data.message==="form filled completely"){
           alert("form has been submitted succesfully");
          console.log(res.data.id);
          setid(res.data.id);

         
        }
        else {
          console.log(res.data.id);
          setid(res.data.id);
          
        }
      })
    } else {
      
      
    }
     }
  return (
    <div id='form' style={{height:"150vh"}}>
    <div id='pdf' >
    <br />
       <h1>Indian Institute of Information Technology, Lucknow</h1>
       <br />
       <h2>Faculty Recruitment Form</h2>
       <br />
     <table>
     <tbody>
     <tr>
     <td>
     <label htmlFor="dob">id:</label>
     </td>
     <td>
     <input type="text" disabled name="id" value={localStorage.getItem('id')}  placeholder="resgistration id"  ></input>
     </td>
     <td>
     <label htmlFor="name">Name:</label>
     </td>
     <td>
     <input type="text" name="name" value={localStorage.getItem('Name')} placeholder="Your Name"  ></input>
     </td>
     </tr>
     <tr>
     <td>
     <label htmlFor="dob">Date Of Birth:</label>
     </td>
     <td>
     <input type="date" disabled name="dob" value={localStorage.getItem('dob')} placeholder="Your birthdate"  ></input>
     </td>
     <td>
     <label htmlFor="dob">gender:</label>
     </td>
     <input type="text" disabled name="gender" value={localStorage.getItem('gender')} placeholder="Your birthdate"  ></input>
     <td>
     </td>
     </tr>
     <tr>
     <td>
     <label htmlFor="dob">caste:</label>
     </td>
     <td>
     <input type="text" disabled name="caste" value={localStorage.getItem('caste')} placeholder="Your birthdate"  ></input>
     </td>
     <td>
     <label htmlFor="dob">gender:</label>
     </td>
     <input type="text" disabled name="caste" value={localStorage.getItem('subcaste')} placeholder="Your birthdate"  ></input>
     <td>
     </td>
     </tr>
     <tr>
     <td>
     <label htmlFor="dob">Email:</label>
     </td>
     <td>
     <input type="text" disabled name="email" value={localStorage.getItem('email')} placeholder="Your birthdate"  ></input>
     </td>
     <td>
     <label htmlFor="dob">Phone Number:</label>
     </td>
     <input type="text" disabled name="phonenumber" value={localStorage.getItem('phonenumber')} placeholder="Your phone number"  ></input>
     <td>
     </td>
     </tr>
     <tr>
     <td>
     <label htmlFor="dob">Address:</label>
     </td>
     <td>
     <input type="text" disabled name="address" value={localStorage.getItem('address')} placeholder="Your birthdate"  ></input>
     </td>
     <td>
     <label htmlFor="dob">Pincode:</label>
     </td>
     <input type="text" disabled name="phonenumber" value={localStorage.getItem('pincode')} placeholder="Your phone number"  ></input>
     <td>
     </td>
     </tr>
      
      
     </tbody>
     </table>
    
    
    
    
    
    
    


    </div>
    <button id='btn1' onClick={generatepdf}>Download</button>
    </div>
  )
}
