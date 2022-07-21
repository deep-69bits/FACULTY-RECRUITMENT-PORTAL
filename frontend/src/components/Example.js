import React,{useState,useEffect} from 'react'
import Avatar from "@mui/material/Avatar";
import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { useNavigate , Link } from 'react-router-dom';

export default function Example() {
  
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);
const [imageUrls, setImageUrls] = useState([]);
 const email =localStorage.getItem('email');
const imagesListRef = ref(storage, `profile/${email}`);

const uploadFile = () => {
  if (imageUpload == null) return;
  const imageRef = ref(storage, `profile/${email}`);
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      setImageUrls((prev) => [...prev, url]);
    });
  });
  
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
 
  <div id='resume'>
  <h1>Upload Resume </h1>
  <div>
  <input
  type="file"
  onChange={(event) => {
    setImageUpload(event.target.files[0]);
  }}
  />
  <button onClick={uploadFile}> Upload Image</button>
  </div>
  {imageUrls.map((url) => {
    return <img id='op' src={url} />;
  })}
  </div>
  <h1>hi</h1>
  <Link to='/pdf'>click</Link>
</div>
)
}
