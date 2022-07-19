import React from 'react'
import jsPDF from 'jspdf'
import '../css/pdf.css'
 
export default function Downloadpdf() {
    const generatepdf=()=>{
       console.log("ok")
       var doc = new jsPDF("o","pt","a3");
       doc.html(document.querySelector("#pdf"),{
        callback: function(pdf){
            pdf.save("mypdf.pdf");
        }
       })
    }
  return (
    <div id='form'>
    <div id='pdf' >
    
    <div>
    <label htmlFor="name">Name:
    </label>
    <input type="text" name="name" value={localStorage.getItem('Name')} placeholder="Your Name" disabled  ></input>
    </div>
    <div>
    <label htmlFor="dob">Date Of Birth:
    <input type="date" disabled name="dob" value={localStorage.getItem('dob')} placeholder="Your birthdate"  ></input>
    </label>
    </div>
    


    </div>
    <button onClick={generatepdf}>print</button>
    </div>
  )
}
