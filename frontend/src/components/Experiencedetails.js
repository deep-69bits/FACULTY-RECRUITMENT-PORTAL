import React,{useState} from 'react'
import { useNavigate , Link } from 'react-router-dom';


export default function Experiencedetails() {
  return (
    <div id='form'>
    <nav>
    <ul>
    <li><Link style=  {{backgroundColor:  'rgb(112, 228, 3)',color: 'white'}}  className='qq' to='/form/personaldetails'>Personal details</Link></li>
    <li><Link className='qq' to=  '/form/acadmics' >Acadmic details</Link></li>
    <li><Link className='qq' to='/form/experiencedetails'>Experience details</Link></li>
    <li><Link className='qq' to='/form/publicationdetails'>Publications details</Link></li>
    <li><Link className='qq' to='/form/acadmics'>Refree details</Link></li>
    </ul>
    </nav>
    <div>
     <h1>Employment History</h1>
     <div>
     <label htmlFor="">Summary: <input type="text" /></label>
     </div>
     <h1>Teaching Experiencce</h1>
     <div>
     <label htmlFor="">Summary: <input type="text" /></label>
     </div>
     <h1>Project Experience</h1>
     <div>
     <label htmlFor="">Summary: <input type="text" /></label>
     </div>
     <h1>Industrial Experience</h1>
     <div>
     <label htmlFor="">Summary: <input type="text" /></label>
     </div>
     <h1>Administrative Experience</h1>
     <div>
     <label htmlFor="">Summary: <input type="text" /></label>
     </div>
      
    </div>
     
    </div>
  )
}
