import React from 'react'
import Faculty from './Faculty';
import Applying from './Applying';
import Head from './Head';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Login from './Login';
import Register from './Register';
import Form from './Form';

export default function Animatedroutes() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Faculty/>} />
      <Route path="/apply" element={<Applying  />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      
      <Route path="/form" element={<Form/>} />
      </Routes>
      
  </Router>
  )
}
