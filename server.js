const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.port||5000;

//get request which requests for url from unsplash.com and sends data back to frontend
app.get('/api/random-image', async (req, res) => {
  try {
    const response = await fetch('https://source.unsplash.com/random');
    res.send({ imageUrl: response.url});

  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send({ error: 'Error fetching image' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
