import React,{useState} from 'react'
import TypewriterComponent from 'typewriter-effect'
import '../css/form.css'

export default function Form() {
    // const [name,setName]=useState(localStorage.getItem('Name'));
    // const changename = e =>{
    //     const { name, value } = e.target
    //     setName(value)
    //     console.log(value);
    //     localStorage.setItem('Name',  value);
    // }
    const name=localStorage.getItem("Name");
  return (
    <div id='contentbox'>
    <p id="yourname">
    <TypewriterComponent onInit={(typewriter) =>{
      typewriter.typeString("Welcome to our new careers section "+name+"...")
      .start();
    }} ></TypewriterComponent>
    </p>
     
    </div>
  )
}
