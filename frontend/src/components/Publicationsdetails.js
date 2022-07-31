import { motion } from 'framer-motion';
import React,{useState} from 'react'
import { useNavigate , Link } from 'react-router-dom';
import '../css/form.css'


export default function Publicationsdetails() {
  return (
    <motion.div id='form' initial={{ width: 0 }}
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
    <h1>
    Publication details</h1>
    <p id='ptag' style={{color:"red"}}>Research and Academic Contributions
    Research Publications</p>
    <div id='sectionA'>
    <table class="table">
    <thead>
    <tr>
      <th></th>
      <th>Indian</th>
      <th>International</th>
      <th>Total</th>
      
      </tr>
      </thead>
      <tbody>
      <tr>
      <td data-label="S.No">Jounaral Publications</td>
      <td data-label="Name"> <input type="text" /> </td>
      <td data-label="Name"> <input type="text" /> </td>
      <td data-label="Age"><input type="text" /></td>
      
      </tr>

    <tr>
      <td data-label="S.No">Papers in conference Procedding</td>
      <td data-label="Name"><input type="text" /></td>
      <td data-label="Name"> <input type="text" /> </td>
      <td data-label="Age"><input type="text" /></td>
      
      </tr>
      
      <tr>
      <td data-label="S.No">Papers presented not published</td>
      <td data-label="Name"> <input type="text" /> </td>
      <td data-label="Name"><input type="text" /></td>
      <td data-label="Age"><input type="text" /></td>
      
      </tr>
      
   
      </tbody>
      </table>  
      
      </div>
      <div id='sectionA'>
       
      <table>
      <tbody>
      <tr>
      <td>
      <label htmlFor=""> Total Citation: </label>

       </td>
       <td>
       <input type="text" />
       </td>
       <td>
       <label htmlFor=""> Total Citation Source:</label>
       </td>
       <td>
       <input type="text" />
       </td>
       </tr>
       <tr>
       <td>
       <label htmlFor=""> H-index: </label>
       </td>
       <td>
       <input type="text" />
       </td>
       <td>
       <label htmlFor=""> H-index source:</label>
       </td>
       <td>
       <input type="text" />
       </td>
       </tr>
       </tbody>
       </table>
       <label htmlFor=""> Book Chapter:
       </label>
       <input  id='summary'type="text" />
       </div>
       <div id='sectionA'>
  </div>
   
  

    

  

    </motion.div>
  )
}
