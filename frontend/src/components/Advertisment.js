import React,{useState} from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import pdffile from '../pdf/Add.pdf'
import '../css/advertisment.css'
import { motion } from 'framer-motion';


export default function Advertisment() {
    
    const [defaultpdffile]=useState(pdffile);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <motion.div id='ad' >
    <h1>Advertisment</h1>
     
    {defaultpdffile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
         <motion.div> 
         <Viewer fileUrl={defaultpdffile}
         plugins={[defaultLayoutPluginInstance]} />
         </motion. div>
      </Worker></>}

    </motion.div>
  )
}
