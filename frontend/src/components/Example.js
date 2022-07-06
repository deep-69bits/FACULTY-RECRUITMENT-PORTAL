import React,{useState} from 'react'


export default function example() {
  
  
  

  
  const changeimg=()=>{
      console.log("ok ")
      const inpfile =document.getElementById("inpfile");
      const image = document.getElementById("image");
      const preview = image.querySelector(".preview")
      
      inpfile.addEventListener("change",function(){
        const file = this.files[0];
         if(file){
          const reader =new FileReader();
          
           preview.style.display="block";
  
         reader.addEventListener("load",function(){
              console.log(file);
              preview.setAttribute("src",this.result);
           })
           reader.readAsDataURL(file);
         }
      });
    }
    
  
  return (
    <div>
    <h1>Select Image</h1>
    <input type="file" id="inpfile" name="inpfile" placeholder="select file" onChange={changeimg} />
    <div id="image" >
        <img src=""  alt="preview"  class="preview" />
        
    </div>
    </div>
   
    
  )
}
