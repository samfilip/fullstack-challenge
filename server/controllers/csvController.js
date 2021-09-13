const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')
const result = []

const csvController = {

  async readCSV (req, res, next) {
    if (result.length === 0) {
      try {
        await fs.createReadStream(path.join(__dirname, '../Redfin_data.csv'))
          .pipe(csv())
          .on('data', (row) => {
            const URL = row['URL (SEE http://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)']
            delete row['URL (SEE http://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)']
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

  searchCSV (req, res, next) {
    if (!req.params.address) res.status(400).send('Please include a valid search parameter')
    const address = req.params.address.split('-').join(' ')

    function camelize(text) {
      text = text.toLowerCase().replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : ``);
      return text.substr(0, 1).toLowerCase() + text.substr(1);
    }
    
    const searchResult = result.filter((ele) => ele.ADDRESS === address)
    const response = {};
    for (let key in searchResult[0]) {
      response[camelize(key)] = searchResult[0][key]
    }
    res.locals.results = [response]
    
    return next()
  }

}

module.exports = csvController
