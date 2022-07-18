import React,{useState} from 'react'


export default function example() {
  
  
  
 
  
  document.ready(function(){
    //You might want to do if check to see if localstorage set for theImage here
    var img = new Image();                
    img.src = localStorage.theImage;
  
    document.getElementsByClassName('imagearea').html(img);
  
    document.getElementsByTagName("body").on("change",".classhere",function(){
        //Equivalent of getElementById
        var fileInput = (this)[0];//returns a HTML DOM object by putting the [0] since it's really an associative array.
        var file = fileInput.files[0]; //there is only '1' file since they are not multiple type.
  
        var reader = new FileReader();
        reader.onload = function(e) {
             // Create a new image.
             var img = new Image();
  
             img.src = reader.result;
             localStorage.theImage = reader.result; //stores the image to localStorage
             document.getElementsByClassName("imagearea").html(img);
         }
  
         reader.readAsDataURL(file);//attempts to read the file in question.
      });
  }); 
  
  return (
    <div>
    <form>
    <input class="classhere" type="file" name="logo" id="logo" />
    <div class="imagearea"></div>
  </form>
    </div>
   
    
  )
}
