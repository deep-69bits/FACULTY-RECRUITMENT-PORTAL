import React,{useState} from 'react'
import { useNavigate , Link } from 'react-router-dom';


export default function Publicationsdetails() {
  return (
    <div id='form'>
    <nav>
    <ul>
    <li><Link style=  {{backgroundColor:  'rgb(112, 228, 3)',color: 'white'}}  className='qq' to='/form/personaldetails'>Personal details</Link></li>
    <li><Link className='qq' to=  '/form/acadmics' >Acadmic details</Link></li>
    <li><Link className='qq' to='/form/experiencedetails'>Experience details</Link></li>
    <li><Link className='qq' to='/form/publicationdetails'>Publications details</Link></li>
    <li><Link className='qq' to='/form/documents'>Refree details</Link></li>
    </ul>
    </nav>
    <br />
    <h1>
    Publication details</h1>

    <div id='sectionA'>
    <label htmlFor="">
    Jounral Publication <input type="text" />
    </label>
    </div>
    </div>
  )
}
