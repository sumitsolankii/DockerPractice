const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hey!!!  Congratulations and Welcome to the your node web app image. It's working fine");
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
