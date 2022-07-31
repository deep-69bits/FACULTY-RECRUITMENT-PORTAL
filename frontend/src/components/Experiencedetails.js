import React,{useState} from 'react'
import { useNavigate , Link } from 'react-router-dom';
import axios from "axios"
import { width } from '@mui/system';
import { motion } from 'framer-motion';



export default function Experiencedetails() {

  const [ experience, setExperience] = useState({
    name: localStorage.getItem('Name'),
    email:localStorage.getItem('email'),
    designation:localStorage.getItem('designation'),
    organization:localStorage.getItem('organization'),
    department:localStorage.getItem('department'),  
    from:localStorage.getItem('from'),
    to:localStorage.getItem('to'),
    roles:localStorage.getItem('roles'),
    emoluments:localStorage.getItem('emoluments'),
    employmentsummary:localStorage.getItem('employmentsummary'),
    teachingsummary:localStorage.getItem('teachingsummary'),
    projectsummary:localStorage.getItem('projectsummary'),
    industrialsummary:localStorage.getItem('industrialsummary'),
    administrativesummary:localStorage.getItem('administrativesummary'),
    

   
})
const handleChange1 = e => {
  const { name, value } = e.target
  setExperience({
      ...experience,
      [name]: value
  })
    localStorage.setItem('Name',experience.name);
    localStorage.setItem('email',experience.email);
    localStorage.setItem('designation',experience.designation);
    localStorage.setItem('organization',experience.organization);
    localStorage.setItem('department',experience.department);
    localStorage.setItem('from',experience.from);
    localStorage.setItem('to',experience.to);
    localStorage.setItem('roles',experience.roles);
    localStorage.setItem('emoluments',experience.emoluments);
    localStorage.setItem('employmentsummary',experience.employmentsummary);
    localStorage.setItem('teachingsummary',experience.teachingsummary);
    localStorage.setItem('projectsummary',experience.projectsummary);
    localStorage.setItem('industrialsummary',experience.industrialsummary);
    localStorage.setItem('administrativesummary',experience.administrativesummary);
    
}
 const uploadexperiencedetails = (e) => {
  e.preventDefault();
  const { name, email, designation,organization,department,from,to,roles,emoluments,employmentsummary
  ,teachingsummary,projectsummary,industrialsummary,administrativesummary  } = experience
  if( name && email  ){
    axios.post("http://localhost:9000/experiencedetails", experience)
    .then( res => {  
      alert(res.data.message)
    })
  } else {
    alert("invlid input")
  }
 }
 const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",  
  width: "500px"
};

  return (
    <motion.div id='form'  initial={{ width: 0 }}
    animate={{ width: "75%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
    <nav>
    <ul>
    <li><Link   className='qq' to='/form/personaldetails'>Personal details</Link></li>
    <li><Link className='qq' to=  '/form/acadmics' >Acadmic details</Link></li>
    <li><Link className='qq' to='/form/experiencedetails'>Experience details</Link></li>
    <li><Link className='qq' to='/form/publicationdetails'>Publications details</Link></li>
    <li><Link className='qq' to='/form/documents'>Documnets upload</Link></li>
    </ul>
    </nav>
    <br />
    <h1>Experience Details</h1>

    <div id='sectionA'>
     <h1>Employment History</h1>
     <br /><hr /><br />
     <table>
     <tbody>
      <tr>
      <td>
      <label htmlFor="">Designation: </label>
      </td>
      <td>
      <input name='designation' value={experience.designation}  onChange={handleChange1} placeholder="Designation"  type="text" />
      </td>
      <td>
      <label htmlFor="">Organization:</label>
      </td>
      <td>
      <input name='organization' value={experience.organization}  onChange={handleChange1} placeholder="Organization"  type="text" />
      </td>
      </tr>
      <tr>
      <td>
      <label htmlFor="">Department/Diviosn:</label>
      </td>
      <td>
      <input name='department' value={experience.department}  onChange={handleChange1}  placeholder="Department" type="text" />
      </td>
      <td>
      <label htmlFor="">Goverment of india?: </label>
      </td>
      <td>
      <input name='employment' value={experience.employment}  onChange={handleChange1}  placeholder="Yes/No" type="text" />
      </td>
      </tr>
      <tr>
      <td>
      <label htmlFor="">from: </label>
      </td>
      <td>
      <input name='from' value={experience.from}   onChange={handleChange1}  type="date" />
      </td>
      <td>
      <label htmlFor="">to: </label>
      </td>
      <td>
      <input name='to' value={experience.to}  onChange={handleChange1}  type="date" />
      </td>
      </tr>
      <tr>
      <td>
      <label htmlFor="">Roles & Responsibilities: </label>
      </td>
      <td>
      <input name='roles' value={experience.roles}  onChange={handleChange1}  placeholder="Roles" type="text" />
      </td>
      <td>
      <label htmlFor="">Total Emoluments(Annual): </label>
      </td>
      <td>
      <input name='emoluments' value={experience.emoluments}  onChange={handleChange1} placeholder="Emouluments" type="text" />
      </td>
      </tr>
     </tbody>
     </table>
     
     
     <div>
     <label htmlFor="">Summary:</label>
      <input name='employmentsummary' id='summary' value={experience.employmentsummary}  placeholder="you can write your employment summary or awards here" onChange={handleChange1}  type="text" />
     </div>
     <br ></br><br />
     <h1>Teaching Experiencce</h1>
     <br /><hr /><br /> 
     
     <div>
     <label htmlFor="">Summary: </label>
     <input name='teachingsummary' id='summary' value={experience.teachingsummary} onChange={handleChange1} placeholder="you can write your teaching experience summary or awards here" type="text" />
     </div>
      <br /><br />
      <h1>Supervised Thesis(M.Tech./M.S./M.Sc./Ph.D)</h1>
      <br /><hr /><br />
      <table>
      <tbody>
       <tr>
       <th></th>
       <th>Individually Supervised</th>
       <th>Jointly Supervised</th>
       <th>Total</th>
       </tr>
       <tr>
       <td>Nuber of M.Tech Thesis</td>
       <td><input type="text" name="" id="" /></td>
       <td><input type="text" name="" id="" /></td>
       <td><input type="text" name="" id="" /></td>
       </tr>
       <tr>
       <td>Number of M.S Thesis</td>
       <td><input type="text" name="" id="" /></td>
       <td><input type="text" name="" id="" /></td>
       <td><input type="text" name="" id="" /></td>
       </tr>
       <tr>
       <td>Number of M.Sc Thesis</td>
       <td><input type="text" name="" id="" /></td>
       <td><input type="text" name="" id="" /></td>
       <td><input type="text" name="" id="" /></td>
       </tr>
       <tr>
       <td>Nuber of Ph.d Thesis</td>
       <td><input type="text" name="" id="" /></td>
       <td><input type="text" name="" id="" /></td>
       <td><input type="text" name="" id="" /></td>
       </tr>
      </tbody>
      </table>
      <br /><br />
     <h1>Project Experience</h1>
     <br /><hr /><br />
     <div>
     <label htmlFor="">Summary: </label>
     <input id='summary' name='projectsummary' value={experience.projectsummary}  onChange={handleChange1}  type="text" />
     </div>
     <br />
     <h1>Industrial Experience</h1>
     <br /><hr /><br />
     <div>
     <label htmlFor="">Summary:</label>
      <input  id='summary' name='industrialsummary'   value={experience.industrialsummary} onChange={handleChange1} type="text" />
     </div>
     <br />
     <h1>Administrative Experience</h1>
     <br /><hr /><br />
     <div>
     <label htmlFor="">Summary:</label>
      <input name='administrativesummary'  id='summary' value={experience.administrativesummary} onChange={handleChange1} type="text" />
     </div>
     <br />
     <button type='submit' id='btn1'  onClick={uploadexperiencedetails}> submit</button>

      
    </div>
     
    </motion.div>
  )
}
