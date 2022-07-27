import React,{useState} from 'react'
import { useNavigate , Link } from 'react-router-dom';
import axios from "axios"



export default function Experiencedetails() {

  const [ experience, setExperience] = useState({
    name: localStorage.getItem('Name'),
    email:localStorage.getItem('email'),
    employment: localStorage.getItem('employment'),
    teaching:localStorage.getItem('teaching'),
    project:localStorage.getItem('project'),
    administrative:localStorage.getItem('administrative')
})
const handleChange1 = e => {
  const { name, value } = e.target
  setExperience({
      ...experience,
      [name]: value
  })
    localStorage.setItem('Name',experience.name);
    localStorage.setItem('email',experience.email);
    localStorage.setItem('employment',experience.employment);
    localStorage.setItem('teaching',experience.teaching);
    localStorage.setItem('project',experience.project);
    localStorage.setItem('administrative',experience.administrative);
}
 const uploadexperiencedetails = (e) => {
  e.preventDefault();
  const { name, email, employment ,teaching, project,administrative } = experience
  if( name && email && employment && teaching && project && administrative ){
    axios.post("http://localhost:9000/experiencedetails", experience)
    .then( res => {  
      alert(res.data.message)
    })
  } else {
    alert("invlid input")
  }
 }

  return (
    <div id='form'>
    <nav>
    <ul>
    <li><Link   className='qq' to='/form/personaldetails'>Personal details</Link></li>
    <li><Link className='qq' to=  '/form/acadmics' >Acadmic details</Link></li>
    <li><Link className='qq' to='/form/experiencedetails'>Experience details</Link></li>
    <li><Link className='qq' to='/form/publicationdetails'>Publications details</Link></li>
    <li><Link className='qq' to='/form/documents'>Refree details</Link></li>
    </ul>
    </nav>
    <br />
    <h1>Experience Details</h1>

    <div id='sectionA'>
     <h1>Employment History</h1>
     <div>
     <label htmlFor="">Summary: <input name='employment' value={experience.employment}  onChange={handleChange1}  type="text" /></label>
     </div>
     <h1>Teaching Experiencce</h1>
     <div>
     <label htmlFor="">Summary: <input name='teaching' value={experience.teaching} onChange={handleChange1} type="text" /></label>
     </div>
     <h1>Project Experience</h1>
     <div>
     <label htmlFor="">Summary: <input  name='project' value={experience.project}  onChange={handleChange1}  type="text" /></label>
     </div>
     <h1>Industrial Experience</h1>
     <div>
     <label htmlFor="">Summary: <input   type="text" /></label>
     </div>
     <h1>Administrative Experience</h1>
     <div>
     <label htmlFor="">Summary: <input name='administrative' value={experience.administrative} onChange={handleChange1} type="text" /></label>
     </div>
     <button type='submit' id='btn1'  onClick={uploadexperiencedetails}> submit</button>

      
    </div>
     
    </div>
  )
}
