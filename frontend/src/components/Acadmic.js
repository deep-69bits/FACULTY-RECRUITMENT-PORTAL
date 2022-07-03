import React,{useState} from 'react'
import { useNavigate , Link } from 'react-router-dom';
import axios from "axios"



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
    <li><Link style=  {{backgroundColor:  'rgb(112, 228, 3)',color: 'white'}}  className='qq' to='/form/personaldetails'>Personal details</Link></li>
    <li><Link className='qq' to=  '/form/acadmics' >Acadmic details</Link></li>
    <li><Link className='qq' to='/form/experiencedetails'>Experience details</Link></li>
    <li><Link className='qq' to='/form/acadmics'>Publications details</Link></li>
    <li><Link className='qq' to='/form/acadmics'>Refree details</Link></li>
    </ul>
    </nav>
     <div >
     <div>
     <label htmlFor="name">Name:
     </label>
     <input type="text" name="name" value={acadmicdata.name} placeholder="Your Name" disabled onChange={ handleChange }  ></input>
     </div>
     <div>
     <label htmlFor="email">Email:
     <input type="email" disabled name="email" value={acadmicdata.email} placeholder="Your email"   onChange={ handleChange }  ></input>
     </label>
     </div>

       <label htmlFor="degree"> Degree: 
       <input type="text" name='degree' value={acadmicdata.degree} onChange={ handleChange } />
       </label>

       <label htmlFor="yearofcompition"> Year of Compition: 
       <input type="text"  name='yearofcompition' value={acadmicdata.yearofcompition} onChange={ handleChange } />
       </label>

       <label htmlFor="marks"> %Marks: 
       <input type="text" name='marks' value={acadmicdata.marks} onChange={ handleChange }/>
       </label>

       <label htmlFor="subject"> Subject or Area of speacilization: 
       <input type="text" name='subject' value={acadmicdata.subject} onChange={ handleChange } />
       </label>
       <label htmlFor="university"> University: 
       <input type="text" name='university' value={acadmicdata.university}  onChange={ handleChange }/>
       </label>
       <button type='submit'  onClick={uploadacadmicdetails}> submit</button>
     </div>
    </div>
  )
}
