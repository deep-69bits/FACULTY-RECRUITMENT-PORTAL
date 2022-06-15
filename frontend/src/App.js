import React,{Components,useState} from 'react'
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


 

function App() {

  return (
    <>
    
    <Head/> 
    <Runningtext/>
    <Animatedroutes/>
    <Footer/>
    
    </>
   
    
  );
}

export default App;
