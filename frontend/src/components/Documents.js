import React ,{useState,useEffect} from 'react'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { useNavigate , Link } from 'react-router-dom';
import '../css/document.css'
import { Navigate } from 'react-router-dom';


export default function Documents() {
    
  const navigate = useNavigate();
    const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
   const email =localStorage.getItem('email');
  const imagesListRef = ref(storage, `${email}/`);
  
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${email}/${"resume"}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
    //  window.location.reload();
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App" id='form'>
    <nav>
    <ul>
    <li><Link   className='qq' to='/form/personaldetails'>Personal details</Link></li>
    <li><Link className='qq' to=  '/form/acadmics' >Acadmic details</Link></li>
    <li><Link className='qq' to='/form/experiencedetails'>Experience details</Link></li>
    <li><Link className='qq' to='/form/publicationdetails'>Publications details</Link></li>
    <li><Link className='qq' to=''>Refree details</Link></li>
    </ul>
    </nav>
    <br />
    <div id='resume'>
    <h1>Upload Resume </h1>
    <div>
    <br />
    {imageUrls.map((url) => {
      return <img id='op' src={url} />;
    })}
    <div>
    <input id='res'
    type="file"
    onChange={(event) => {
      setImageUpload(event.target.files[0]);
    }}
    />
      </div>
    <button onClick={uploadFile} id='btn1'> Upload Image</button>
    </div>
    </div>
    <br />

    <button id='btn1'  > <Link to='/pdf'  id='linked' >Download pdf</Link> </button>
  </div>
  )
}
