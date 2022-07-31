import React,{useState} from 'react'
import { useNavigate , Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import axios from "axios"
import "../css/acadmic.css"
import { motion } from 'framer-motion';




export default function Acadmic() {
   
  const [ acadmicdata, setAcadmicdata] = useState({
    name: localStorage.getItem('Name'),
    email:localStorage.getItem('email'),
    school10:localStorage.getItem('school10'),
    board10:localStorage.getItem('board10'),
    percentage10:localStorage.getItem('percentage10'),
    subject10:localStorage.getItem('subject10'),
    yearofpassing10:localStorage.getItem('yearofpassing10'),
    school12:localStorage.getItem('school12'),
    board12:localStorage.getItem('board12'),
    percentage12:localStorage.getItem('percentage12'),
    subject12:localStorage.getItem('subject12'),
    yearofpassing12:localStorage.getItem('yearofpassing12'),
    collegebtech:localStorage.getItem('collegebtech'),
    collegemtech:localStorage.getItem('collegemtech'),
    cgpabtech:localStorage.getItem('cgpabtech'),
    cgpamtech:localStorage.getItem('cgpamtech'),
    subjectbtech:localStorage.getItem('subjectbtech'),
    subjectmtech:localStorage.getItem('subjectmtech'),
    yearofpassingbtech:localStorage.getItem('yearofpassingbtech'),
    yearofpassingmtech:localStorage.getItem('yearofpassingmtech'),
    
})
const handleChange = e => {
  const { name, value } = e.target
  setAcadmicdata({
      ...acadmicdata,
      [name]: value
  })
  localStorage.setItem('Name',acadmicdata.name);
  localStorage.setItem('email',acadmicdata.email);
  localStorage.setItem('school10',acadmicdata.school10);
  localStorage.setItem('school12',acadmicdata.school12);
  localStorage.setItem('board10',acadmicdata.board10);
  localStorage.setItem('board12',acadmicdata.board12);
  localStorage.setItem('percentage10',acadmicdata.percentage10);
  localStorage.setItem('percentage12',acadmicdata.percentage12);
  localStorage.setItem('subject10',acadmicdata.subject10);
  localStorage.setItem('subject12',acadmicdata.subject12);
  localStorage.setItem('yearofpassing10',acadmicdata.yearofpassing10);
  localStorage.setItem('yearofpassing12',acadmicdata.yearofpassing12);
  localStorage.setItem('collegebtech',acadmicdata.collegebtech);
  localStorage.setItem('collegemtech',acadmicdata.collegemtech);
  localStorage.setItem('cgpabtech',acadmicdata.cgpabtech);
  localStorage.setItem('cgpamtech',acadmicdata.cgpamtech);
  localStorage.setItem('subjectbtech',acadmicdata.subjectbtech);
  localStorage.setItem('subjectmtech',acadmicdata.subjectmtech);
  localStorage.setItem('yearofpassingbtech',acadmicdata.yearofpassingbtech);
  localStorage.setItem('yearofpassingmtech',acadmicdata.yearofpassingmtech);

}
 
const uploadacadmicdetails = (e) => {
  e.preventDefault();
  const { name, email, school10, board10,percentage10,subject10,yearofpassing10
   ,school12,board12,percentage12,subject12,yearofpassing12,
   collegebtech,cgpabtech,subjectbtech,yearofpassingbtech,
   collegemtech,cgpamtech,subjectmtech,yearofpassingmtech } = acadmicdata
   
  if( name && email  && school10, board10,percentage10,subject10,yearofpassing10
    ,school12,board12,percentage12,subject12,yearofpassing12,
    collegebtech,cgpabtech,subjectbtech,yearofpassingbtech,
    collegemtech,cgpamtech,subjectmtech,yearofpassingmtech  ){
    axios.post("http://localhost:9000/acadmicdetails", acadmicdata)
    .then( res => {  
      alert(res.data.message)
    })
  } else {
    alert("invlid input")
  }

  
  
}
   const phd1=(val)=>{
     console.log("ok")
        if(val==1){

          document.getElementById('ongoing').style.display = "flex";
          document.getElementById('awarded').style.display = "none";
          document.getElementById('ThesisSubmitted').style.display = "none";
        }
        if(val==2){
          document.getElementById('ongoing').style.display = "none";
          document.getElementById('awarded').style.display = "none";
          document.getElementById('ThesisSubmitted').style.display = "flex";

        }
        if(val==3){
          document.getElementById('ongoing').style.display = "none";
          document.getElementById('awarded').style.display = "flex";
          document.getElementById('ThesisSubmitted').style.display = "none";

        }
        if(val==4){
          document.getElementById('ongoing').style.display = "none";
          document.getElementById('awarded').style.display = "none";
          document.getElementById('ThesisSubmitted').style.display = "none";

        }

      
   }
  return (
    <motion.div  id='form' initial={{ width: 0 }}
    animate={{ width: "75%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }} >
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

    <h1>Acadmic Details</h1>
     <div id='sectionA'>

      <table>
      <tbody>
      <tr>
      <td data-label="Name"> <label htmlFor="name">Name:
      </label> </td>
      <td data-label="Name"> <input type="text" name="name"  value={acadmicdata.name} placeholder="Your Name" disabled onChange={ handleChange }  ></input> </td>
  
      <td data-label="Name"> <label htmlFor="email">Email:
      </label>
      </td>
      
      <td data-label="Name">
      <input type="email" disabled name="email" value={acadmicdata.email} placeholder="Your email"   onChange={ handleChange }  ></input>
      </td>
      </tr>
     
      </tbody>
      </table>
   
   <div>
   <br />
     <h1>Class 10th:</h1>
     <br /><hr /><br />

     <table class="table">
     <thead>
     <tr>
   
       <th>School</th>
       <th>Board</th>
       <th>Percentage</th>
       <th>Subjects</th>
       <th>Year of passing</th>
       
       </tr>
       </thead>
       <tbody>
       <tr>
       <td data-label="Name"> <input  name="school10" value={acadmicdata.school10} placeholder="Your school"   onChange={ handleChange } type="text" /> </td>
       <td data-label="Name"> <input  name="board10" value={acadmicdata.board10} placeholder="Your board"   onChange={ handleChange } type="text" /> </td>
       <td data-label="Age"><input  name="percentage10" value={acadmicdata.percentage10} placeholder="Your percentage/CGPA"   onChange={ handleChange } type="text" /></td>
       <td data-label="Age"><input  name="subject10" value={acadmicdata.subject10} placeholder="Your subjects"   onChange={ handleChange } type="text" /></td>
       <td data-label="Age"><input name="yearofpassing10" value={acadmicdata.yearofpassing10} placeholder="Year of passing"   onChange={ handleChange } type="text" /></td>
       
       </tr>

       </tbody>
       </table>  

   </div> 
   <div>
   <br />
     <h1>Class 12th:</h1>
     <br /><hr /><br />
     <table className="table">
     <thead>
     <tr>
   
       <th>School</th>
       <th>Board</th>
       <th>Percentage</th>
       <th>Subjects</th>
       <th>Year of passing</th>
       
       </tr>
       </thead>
       <tbody>
       <tr>
       <td data-label="Name"> <input  name="school12" value={acadmicdata.school12} placeholder="Your school"   onChange={ handleChange } type="text" /> </td>
       <td data-label="Name"> <input  name="board12" value={acadmicdata.board12} placeholder="Your board"   onChange={ handleChange } type="text" /> </td>
       <td data-label="Age"><input  name="percentage12" value={acadmicdata.percentage12} placeholder="Your percentage/CGPA"   onChange={ handleChange } type="text" /></td>
       <td data-label="Age"><input  name="subject12" value={acadmicdata.subject12} placeholder="Your subjects"   onChange={ handleChange } type="text" /></td>
       <td data-label="Age"><input name="yearofpassing12" value={acadmicdata.yearofpassing12} placeholder="Year of passing"   onChange={ handleChange } type="text" /></td>
       
       </tr>

       </tbody>
       </table>  
  
   </div> 
   <div>
   <br />
     <h1>Bachlors:</h1>
     <br /><hr /><br />
     <table class="table">
     <thead>
     <tr>
   
       <th>College/
       University</th>
       
       <th>CGPA</th>
       <th>Subjects</th>
       <th>Year of passing</th>
       
       </tr>
       </thead>
       <tbody>
       <tr>
     
       <td data-label="Name"> <input name="collegebtech" value={acadmicdata.collegebtech} placeholder="Your college"   onChange={ handleChange } type="text" /> </td>
       <td data-label="Age"><input name="cgpabtech" value={acadmicdata.cgpabtech} placeholder="Your cgpa"   onChange={ handleChange } type="text" /></td>
       <td data-label="Age"><input name="subjectbtech" value={acadmicdata.subjectbtech} placeholder="Your subjects"   onChange={ handleChange }  type="text" /></td>
       <td data-label="Age"><input name="yearofpassingbtech" value={acadmicdata.yearofpassingbtech} placeholder="Year of passing"   onChange={ handleChange }  type="text" /></td>
       
       </tr>

       </tbody>
       </table>  
  
   </div> 
   <div>
   <br />
     <h1>Masters:</h1>
     <br /><hr /><br />
     <table class="table">
     <thead>
     <tr>
   
       <th>College/
       University
       </th>
       
       <th>CGPA</th>
       <th>Subjects</th>
       <th>Year of passing</th>
       
       </tr>
       </thead>
       <tbody>
       <tr>

       <td data-label="Name"> <input name="collegemtech" value={acadmicdata.collegemtech} placeholder="Your college"   onChange={ handleChange } type="text" /> </td>
       <td data-label="Age"><input name="cgpamtech" value={acadmicdata.cgpamtech} placeholder="Your cgpa"   onChange={ handleChange } type="text" /></td>
       <td data-label="Age"><input name="subjectmtech" value={acadmicdata.subjectmtech} placeholder="Your subjects"   onChange={ handleChange }  type="text" /></td>
       <td data-label="Age"><input name="yearofpassingmtech" value={acadmicdata.yearofpassingmtech} placeholder="Year of passing"   onChange={ handleChange }  type="text" /></td>
       
       </tr>

       </tbody>
       </table>  
       
       </div> 
       
       
       
       
       </div>
        <br />
        <h1>Ph.D Details</h1> 
        
        <span id='ptag'>( <span style={{color:"red"}}> Note: </span> One should fill details in only <span style={{color:"red"}}>one</span> of the following fields,</ span><br /><br /><span id='ptag'>
        
          i.e., in either Ongoing or Thesis Submitted or Awarded ) </span><br />
        <br />
        <div class="container">
        <div class="radio_container">
            <input type="radio" name="radio" id="one" onClick={()=>phd1(1)} />
            <label for="one">Ongoing </label>
            <input type="radio" name="radio" id="two" onClick={()=>phd1(2)}/>
            <label for="two">Thesis Submitted </label>
            <input type="radio" name="radio" id="three" onClick={()=>phd1(3)}/ >
            <label for="three">Awarded</label>
            <input type="radio" name="radio" id="four" onClick={()=>phd1(4)}/ >
            <label for="four">No Ph.D awarded</label>
        </div>
    </div>
    <br />
      
        <div id='ongoing' style={{display: "none",width: "75%",margin:"auto" }} className="lol">
        <table>
        <tr>
        <th>Ph.D Title</th>
        <th> Broad Research Domain of Ph.D</th>
        <th>Institute Name  </th>
        <th>Ph.D Registration Date</th>
        </tr>
        <tr>
         <td><input type="text" /> </td>
         <td><input type="text" /> </td>
         <td><input type="text" /> </td>
         <td><input type="date" /> </td>
        </tr>
        </table>
        </div>
        <div id='ThesisSubmitted' style={{display: "none",width: "75%",margin:"auto" }} className="lol">
        <table>
        <tr>
        <th>Ph.D Title</th>
        <th> Broad Research Domain of Ph.D</th>
        <th>Institute Name  </th> 
        <th>Ph.D submission Date</th>
        </tr>
        <tr>
         <td><input type="text" /> </td>
         <td><input type="text" /> </td>
         <td><input type="text" /> </td>
         <td><input type="date" /> </td>
        </tr>
        </table>
        </div>
        <div id='awarded' style={{display: "none",width: "75%",margin:"auto"  }} className="lol">
        <table>
        <tr>
        <th>Ph.D Title</th>
        <th> Broad Research Domain of Ph.D</th>
        <th>Institute Name  </th>
        <th>Ph.D Defence Date</th>
        </tr>
        <tr>
         <td><input type="text" /> </td>
         <td><input type="text" /> </td>
         <td><input type="text" /> </td>
         <td><input type="date" /> </td>
        </tr>
        </table>
        </div>
          <br />  

       <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} type='submit' id='btn1'  onClick={uploadacadmicdetails}> submit</motion.button>
    </motion. div>
  )
}
