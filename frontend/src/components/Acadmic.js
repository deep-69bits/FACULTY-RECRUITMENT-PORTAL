import React,{useState} from 'react'
import { useNavigate , Link } from 'react-router-dom';
import axios from "axios"
import "../css/acadmic.css"



export default function Acadmic() {
   
  const [ acadmicdata, setAcadmicdata] = useState({
    name: localStorage.getItem('Name'),
    email:localStorage.getItem('email'),
    degree: localStorage.getItem('degree'),
    yearofcompition:localStorage.getItem('yearofcompition'),
    marks:localStorage.getItem('marks'),
    subject:localStorage.getItem('subject'),
    university:localStorage.getItem('university')
})
const handleChange = e => {
  const { name, value } = e.target
  setAcadmicdata({
      ...acadmicdata,
      [name]: value
  })
  localStorage.setItem('Name',acadmicdata.name);
  localStorage.setItem('email',acadmicdata.email);
    localStorage.setItem('degree',acadmicdata.degree);
    localStorage.setItem('yearofcompition',acadmicdata.yearofcompition);
    localStorage.setItem('marks',acadmicdata.marks);
    localStorage.setItem('subject',acadmicdata.subject);
    localStorage.setItem('university',acadmicdata.university);

}
 
const uploadacadmicdetails = (e) => {
  e.preventDefault();
  const { name, email, degree ,yearofcompition, marks,subject,university } = acadmicdata
  if( name && email && degree  && yearofcompition && marks && subject,university ){
    axios.post("http://localhost:9000/acadmicdetails", acadmicdata)
    .then( res => {  
      alert(res.data.message)
    })
  } else {
    alert("invlid input")
  }
  
  
}
  return (
    <div id='form' >
    <nav>
    <ul>
    <li><Link style=  {{backgroundColor:  '#028A0F',color: 'white',padding: '10px'}}  className='qq' to='/form/personaldetails'>Personal details</Link></li>
    <li><Link className='qq' to=  '/form/acadmics' >Acadmic details</Link></li>
    <li><Link className='qq' to='/form/experiencedetails'>Experience details</Link></li>
    <li><Link className='qq' to='/form/publicationdetails'>Publications details</Link></li>
    <li><Link className='qq' to='/form/documents'>Refree details</Link></li>
    </ul>
    </nav>
    <br />
    <h1>Acadmic Details</h1>
     <div id='sectionA'>
     <div>
     <label htmlFor="name">Name:
     </label>
     <input type="text" name="name"  value={acadmicdata.name} placeholder="Your Name" disabled onChange={ handleChange }  ></input>
     </div>
     <div>
     <label htmlFor="email">Email:
     <input type="email" disabled name="email" value={acadmicdata.email} placeholder="Your email"   onChange={ handleChange }  ></input>
     </label>
     </div>
        <div>
        <label htmlFor="degree"> Degree: 
        <input type="text" name='degree' value={acadmicdata.degree} onChange={ handleChange } />
        </label>
        </div>
        <div>
        <label htmlFor="yearofcompition"> Year of Compition: 
        <input type="text"  name='yearofcompition' value={acadmicdata.yearofcompition} onChange={ handleChange } />
        </label>
        </div>
        <div>
        <label htmlFor="marks"> %Marks: 
        <input type="text" name='marks' value={acadmicdata.marks} onChange={ handleChange }/>
        </label>
        </div>
  <div>
  <div>
  <label htmlFor="subject"> Subject or Area of speacilization: 
  <input type="text" name='subject' value={acadmicdata.subject} onChange={ handleChange } />
  </label>
  </div>
  </div>
  <div>
  <label htmlFor="university"> University: 
  <input type="text" name='university' value={acadmicdata.university}  onChange={ handleChange }/>
  </label>
  </div>
       <button type='submit' id='btn1'  onClick={uploadacadmicdetails}> submit</button>
     </div>
    </div>
  )
}
