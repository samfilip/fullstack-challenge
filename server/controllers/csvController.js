const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')
const utils = require('../utils')

const result = []

const csvController = {

  async readCSV (req, res, next) {
    if (result.length === 0) {
      // parse CSV file once
      try {
        await fs.createReadStream(path.join(__dirname, '../Redfin_data.csv'))
          .pipe(csv())
          .on('data', (row) => {
            // this key is just too much, convert to easier to read key
            const urlKey = 'URL (SEE http://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)'
            const URL = row[urlKey]
            delete row[urlKey]
            row['REDFINURL'] = URL
            result.push(row)
          })
          .on('end', () => {
            console.log('CSV file successfully processed')
            return next()
          })
      } catch (err) {
        return next(err)
      }
    } else {
      return next()
    }
  },
  // search CSV files and convert all keys to camel case
  searchCSV (req, res, next) {
    if (!req.params.address) res.status(400).send('Please include a valid search parameter')
    
    const { address } = req.params

    const searchResult = result.filter((ele) => ele.ADDRESS.toLowerCase().includes(address.toLowerCase()))

    const response = utils.formatKeys(searchResult)

    res.locals.results = response
    
    return next()
  }

}

module.exports = csvController
