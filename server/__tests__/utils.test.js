const formatKeys = require('../utils').formatKeys
const csvController = require('../controllers/csvController') 

const testArray = 
  [
    {
      'SALE TYPE': 'MLS Listing',
      'SOLD DATE': '',
      'PROPERTY TYPE': 'Multi-Family (2-4 Unit)',
      ADDRESS: '477 - 481 Duboce Ave',
      CITY: 'San Francisco',
      'STATE OR PROVINCE': 'CA',
      'ZIP OR POSTAL CODE': '94117',
      PRICE: '3898000',
      BEDS: '2',
      BATHS: '4.0',
      LOCATION: 'San Francisco',
      'SQUARE FEET': '4428',
      'LOT SIZE': '2748',
      'YEAR BUILT': '',
      'DAYS ON MARKET': '1',
      '$/SQUARE FEET': '880',
      'HOA/MONTH': '',
      STATUS: 'Active',
      'NEXT OPEN HOUSE START TIME': '',
      'NEXT OPEN HOUSE END TIME': '',
      SOURCE: 'San Francisco MLS',
      'MLS#': '421589820',
      FAVORITE: 'N',
      INTERESTED: 'Y',
      LATITUDE: '37.7690928',
      LONGITUDE: '-122.4308005',
      REDFINURL: 'http://www.redfin.com/CA/San-Francisco/477-Duboce-Ave-94117/home/1726269'
    },
    {
      'SALE TYPE': 'MLS Listing',
      'SOLD DATE': '',
      'PROPERTY TYPE': 'Single Family Residential',
      ADDRESS: '170 Prague St',
      CITY: 'San Francisco',
      'STATE OR PROVINCE': 'CA',
      'ZIP OR POSTAL CODE': '94112',
      PRICE: '928000',
      BEDS: '4',
      BATHS: '2.0',
      LOCATION: 'San Francisco',
      'SQUARE FEET': '1300',
      'LOT SIZE': '2495',
      'YEAR BUILT': '1928',
      'DAYS ON MARKET': '1',
      '$/SQUARE FEET': '714',
      'HOA/MONTH': '',
      STATUS: 'Active',
      'NEXT OPEN HOUSE START TIME': 'September-11-2021 11:00 AM',
      'NEXT OPEN HOUSE END TIME': 'September-11-2021 12:30 PM',
      SOURCE: 'San Francisco MLS',
      'MLS#': '421592497',
      FAVORITE: 'N',
      INTERESTED: 'Y',
      LATITUDE: '37.7195061',
      LONGITUDE: '-122.4271002',
      REDFINURL: 'http://www.redfin.com/CA/San-Francisco/170-Prague-St-94112/home/1922956'
    },
  ]

test('formatKeys returns array of objects with camel cased keys', () => {

  expect(formatKeys(testArray)).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
      'saleType': 'MLS Listing',
      'soldDate': '',
      'propertyType': 'Multi-Family (2-4 Unit)',
      'address': '477 - 481 Duboce Ave',
      'city': 'San Francisco',
      'stateOrProvince': 'CA',
      'zipOrPostalCode': '94117',
      'price': '3898000',
      'beds': '2',
      'baths': '4.0',
      'location': 'San Francisco',
      'squareFeet': '4428',
      'lotSize': '2748',
      'yearBuilt': '',
      'daysOnMarket': '1',
      '$SquareFeet': '880',
      'hoaMonth': '',
      'status': 'Active',
      'nextOpenHouseStartTime': '',
      'nextOpenHouseEndTime': '',
      'source': 'San Francisco MLS',
      'mls': '421589820',
      'favorite': 'N',
      'interested': 'Y',
      'latitude': '37.7690928',
      'longitude': '-122.4308005',
      'redfinurl': 'http://www.redfin.com/CA/San-Francisco/477-Duboce-Ave-94117/home/1726269'
      })
    ])
  );

});

