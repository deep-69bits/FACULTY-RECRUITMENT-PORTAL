import React,{Components,useState,useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Head from './components/Head';
import Runningtext from './components/Runningtext';
import motion from "framer-motion"
import './App.css'
import Faculty from './components/Faculty';
import Applying from './components/Applying';
import Animatedroutes from './components/Animatedroutes';
import Footer from './components/Footer';
import ClipLoader from "react-spinners/ClipLoader";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";


 

function App() {
   const [loading ,setLoading] =useState(false);
   useEffect(()=> {
    setLoading(true)
     setTimeout(() => {
       setLoading(false)
     }, 3000);
   }) 
   const override = css`
  display: block;
  margin: auto;
  margin-top : 15%;
  border-color: red;
    `;


   
  return (
    <div>
    {
      loading ? 
     
      <ClockLoader css={override} size={200} color={"#123abc"} loading={loading} />
      :
      <>
      <Head/> 
      <Runningtext/>
      <Animatedroutes/>
      <Footer/>
      </>
    }
    
    </div>
    
      
   
    
  );
}

export default App;
