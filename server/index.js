const PORT = process.env.PORT || 3000; 
const path = require('path');
const express = require('express');
const cors = require('cors');



const app = express();

const csvParser = require('./csvParser');
const csvController = require('./csvParser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/:address', 
  csvController.readCSV, 
  csvController.searchCSV,
  (req, res) => {
    res.status(200).json(res.locals.results)
});

app.use('*', (req, res) => {
  res.status(404)
})

app.use((err, req, res, next) => {
  console.log(err)
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`);
})
