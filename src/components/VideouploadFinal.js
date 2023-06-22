import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./vid.css";
import Containerfluid from 'react-bootstrap/Container';

const VideouploadFinal = () => {
    const [videoUrl, setvideoUrl] = useState("");
    const [videoDescription, setVideoDescription] = useState("");
    const [videoTitle, setvideoTitle] = useState("");
    const [thumbNail, setthumbNail] = useState("");
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


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setthumbNail(selectedFile);
    };

    const handleSubmit = (event) => {
        event.preventDefault();


        // Convert the file to base64
        if (thumbNail) {
            const reader = new FileReader();
            reader.readAsDataURL(thumbNail);
            reader.onloadend = () => {
                const base64Image = reader.result;
                // Now you can send the base64Image and other form data to the backend API
                sendFormData({ videoTitle, videoUrl, videoDescription, thumbNail: base64Image });
                console.log(base64Image, "base64")
            };


        }




    };

    const sendFormData = (formData) => {
        // Make an API request to send formData to the backend
        // You can use libraries like axios or fetch for this purpose
        // Example using axios:
        // var config = {
        //   headers:{"Access-Control-Allow-Orgin":"*"},
        //   proxy:{
        //     host:'192.168.0.118',
        //     port:3000
        //   }
        // }
        // var url =https://cors-anywhere.herokuapp.com${http://192.168.0.118:9001/gallery}
        axios.post('https://6458c2dd8badff578efa0398.mockapi.io/mahesh/postapi/postdata',formData,{
          headers: {
            'Content-Type': 'application/json',
           Authorization: `Bearer ${token}`
          },
        })
            .then((response) => {
                console.log(response.data);
                alert("video uploadede successfully")
                // Handle the response from the backend as needed
            })

            .catch((error) => {
                console.error(error);
                // Handle errors
            });

    };

    return (



            <Containerfluid className="login-container videoup" >

                    <h1>Video uploadData</h1> <br/>
                <form onSubmit={handleSubmit} style={{width:"500px"}}>

        <div className="form-group">
          <label htmlFor="Videotitle">Videotitle</label>
          <input type="text" id="Videotitle" value={videoTitle}  onChange={(e) => setvideoTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="VideoDescription">VideoDescription</label>
          <input type="text" id="VideoDescription" onChange={(e) => setVideoDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="VideoUrl">VideoUrl</label>
          <input type="url" id="VideoUrl" onChange={(e) => setvideoUrl(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="thumbNail">Videothumbnail</label>
          <input type="file" accept="image/*" id="thumbNail" onChange={handleFileChange} />
        </div>
        <button style={{width:"250px"}} type="submit">Submit</button>
      </form>

      </Containerfluid>





    )
}

export default VideouploadFinal