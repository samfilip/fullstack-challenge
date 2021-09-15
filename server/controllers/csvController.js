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
            // this key is just too much, convert to easier to read key
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
  // search CSV files and convert all keys to camel case
  searchCSV (req, res, next) {
    if (!req.params.address) res.status(400).send('Please include a valid search parameter')
    
    const address = req.params.address.split('-').join(' ')
    
    const searchResult = result.filter((ele) => ele.ADDRESS.toLowerCase().includes(address.toLowerCase()))
    console.log(searchResult)

    function camelize(text) {
      // converts text to camelCase and removes_ /# from strings
      text = text.toLowerCase().replace(/[-_/#\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : ``)
      return text.substr(0, 1).toLowerCase() + text.substr(1)
    }

    
    const response = []
    searchResult.forEach((el) => {
      const home = {}
      for (let key in el) {
        home[camelize(key)] = el[key]
      }
      response.push(home)
    })
      
    res.locals.results = response
    
    return next()
  }

}

module.exports = csvController
