const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const result = [];

const csvController = {

  async readCSV(req, res, next) {
    if (result.length === 0) {
      try {
        await fs.createReadStream(path.join(__dirname, '/Redfin_data.csv'))
          .pipe(csv())
          .on('data', (row) => {
            result.push(row);
          })
          .on('end', () => {
            console.log('CSV file successfully processed');
            return next()
          })
      } catch(err) {
        return next(err);
      }
    } else {
      return next();
    }
  },

  searchCSV(req, res, next) {
    const address = req.params.address.split('-').join(' ');
    res.locals.results = result.filter((ele) => ele.ADDRESS === address);
    return next();
  },
  
};

module.exports = csvController;