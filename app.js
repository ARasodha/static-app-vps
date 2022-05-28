const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3001;

app.use(morgan('dev'));

app.get('/lambo', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));