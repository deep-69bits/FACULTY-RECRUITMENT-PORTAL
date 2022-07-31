import React from 'react'
import Faculty from './Faculty';
import Applying from './Applying';
import Head from './Head';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Login from './Login';
import Register from './Register';
import Form from './Personaldetails';
import Info from './Info';
import Applicationform from './Applicationform';
import Acadmic from './Acadmic';
import Experiencedetails from './Experiencedetails';
import Publicationsdetails from './Publicationsdetails';
import Example from './Example';
import Advertisment from './Advertisment';
import Benefits from './Benefits';
import Documents from './Documents';
import Downloadpdf from './Downloadpdf';
import Fromsubmitted from './Fromsubmitted';
export default function Animatedroutes() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Faculty/>} />
      <Route path="/apply" element={<Applying  />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/form/personaldetails" element={<Form/>} />
      <Route path="/applicationform" element={<Applicationform/>} />
      <Route path="/info" element={<Info/>} />
      <Route path="/form/acadmics" element={<Acadmic/>} />
      <Route path="/form/experiencedetails" element={<Experiencedetails/>} />
      <Route path="/form/publicationdetails" element={<Publicationsdetails/>} />
      <Route path="/example" element={<Example/>} />
      <Route path="/advertisment" element={<Advertisment/>} />
      <Route path="/benefits" element={<Benefits/>} />
      <Route path="/form/documents" element={<Documents/>} />
      <Route path="/pdf" element={<Downloadpdf/>} />
      <Route path="/formsubmitted" element={<Fromsubmitted/>} />
      


    </Routes> 
  </Router>
  )
}
