import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import "./vid.css";
import axios from 'axios';

const Videoupload = () => {

    const [modalShow, setModalShow] = useState(false);
    const [videoUrl, setvideoUrl] = useState("");
    const [videoDescription,setVideoDescription] = useState("");
    const [videoTitle,setvideoTitle] = useState("");
    const [thumbNail,setthumbNail] = useState("");
    const [token, setToken] = useState('');


    useEffect(() => {
        // Simulating token retrieval from a cookie
        const retrievedToken = document.cookie
          .split(';')
          .find((cookie) => cookie.trim().startsWith('token='));
          console.log("ret",retrievedToken)
    
        if (retrievedToken) {
          const [, tokenValue] = retrievedToken.split('=');
          setToken(tokenValue);
        }
      }, []);


    const uploadData = () => {
        
        const url = "http://192.168.0.118:8080/gallery"
        axios.post(url,{
          
            headers: {
              'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`
            },
            body: {
                        
                    videoUrl: videoUrl,
                
                    videoTitle: videoTitle,
                
                    videoDescription: videoDescription,
                
                    thumbNail: thumbNail
                
                }
            
           
    })
    }

    useEffect(()=>{
        handle()
    },[]) 

    const handle = () => {
        setModalShow(true)
    }
    return (
        <div>

            <Modal show={modalShow}>




                <Modal.Title id="contained-modal-title-vcenter" style={{ textAlign: "center", fontSize: "25px", fontWeight: "900" }}>

                    Video Details

                </Modal.Title>

                <Modal.Body>

                    <div className='Align'>





                        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

                            <span>Video Title</span>

                            <span>Video Description</span>

                            <span>Video Url</span>

                            <span>Video Thumbnail</span>




                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

                            <input type='Text' value={videoTitle} onChange={(e) => setvideoTitle(e.target.value)}></input>

                            <input type='Text' value={videoDescription} onChange={(e) => setVideoDescription(e.target.value)}></input>

                            <input type='url' value={videoUrl} onChange={(e) => setvideoUrl(e.target.value)}></input>

                            <input type='Text' value={thumbNail}onChange={(e) => setthumbNail(e.target.value)}></input>

                        </div>



                    </div>

                    <br />

                    <div style={{ justifyContent: "center", textAlign: "center" }}>

                        <Button className='buttoney' onClick={uploadData}>Submit</Button>

                    </div>








                </Modal.Body>





            </Modal>

        </div>
    )
}

export default Videoupload;