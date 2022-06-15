import React,{useState} from 'react'

export default function Form() {
    const [name,setName]=useState(localStorage.getItem('Name'));
    const changename = e =>{
        const { name, value } = e.target
        setName(value)
        console.log(value);
        localStorage.setItem('Name',  value);
    }
  return (
    <div>
    <input type="text" value={name} name="name" onChange={changename} placeholder="enter name" />
    </div>
  )
}
