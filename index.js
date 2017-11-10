'use strict';


const express = require('express');

// Constants
const PORT = process.env.port || 8080;


// App
const app = express();
app.get('/', (req, res) => {
  console.log(new Date().toUTCString());
  res.send('Hello world!');
});


app.listen(PORT, () => console.log(`Running on ${PORT}`));
