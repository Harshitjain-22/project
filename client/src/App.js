import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import axios from 'axios';
import { FaFacebook,FaTwitter,FaWhatsapp } from 'react-icons/fa';
const App = () => {
  // useState hook which is updated whenever image is set, initially it is empty string
  const [imageUrl, setImageUrl] = useState('');

// useEffect will run everytime page is reloded
  useEffect(() => {
    fetchRandomImage();
  }, []);

  //simple function which sends get request to backend to get the url of image
  //request is sent to backend through axios
  const fetchRandomImage = async() => {
    try {
      const response = await axios.get('/api/random-image');
      const data = response.data.imageUrl;
      setImageUrl(data);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    //frontend display
    <Container className="text-center mt-5">
      <img src={imageUrl} alt="Random" className="img-fluid mb-3" style={{ width: 500, height: 600 }} />
      <div className="mb-3" >
        <FacebookShareButton url={imageUrl} style={{margin:"10px"}}>
          <Button variant="outline-primary" className="mr-2" > {<FaFacebook />} Share on Facebook</Button>
        </FacebookShareButton>
        <TwitterShareButton url={imageUrl} style={{margin:"10px"}}>
          <Button variant="outline-info" className="mr-2">{<FaTwitter />} Share on Twitter</Button>
        </TwitterShareButton>
        <WhatsappShareButton url={imageUrl} style={{margin:"10px"}}>
          <Button variant="outline-success" className=" mr-2">{<FaWhatsapp />} Share on WhatsApp</Button>
        </WhatsappShareButton>
      </div>
    </Container>
  );
};


export default App;

