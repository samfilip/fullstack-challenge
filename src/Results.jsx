
const Results = (props) => {
  const { ADDRESS, CITY, STATE, BEDS, CITY, REDFINURL } = props

  return (
    <div className="results-container">
      {ADDRESS}
        "SALE TYPE": "MLS Listing",
        "SOLD DATE": "",
        "PROPERTY TYPE": "Condo/Co-op",
        "ADDRESS": "574 Natoma St",
        "CITY": "San Francisco",
        "STATE OR PROVINCE": "CA",
        "ZIP OR POSTAL CODE": "94103",
        "PRICE": "465000",
        "BEDS": "0",
        "BATHS": "1.0",
        "LOCATION": "San Francisco",
        "SQUARE FEET": "",
        "LOT SIZE": "1816",
        "YEAR BUILT": "2012",
        "DAYS ON MARKET": "8",
        "$/SQUARE FEET": "",
        "HOA/MONTH": "318",
        "STATUS": "Active",
        "NEXT OPEN HOUSE START TIME": "",
        "NEXT OPEN HOUSE END TIME": "",
        "SOURCE": "San Francisco MLS",
        "MLS#": "421590626",
        "FAVORITE": "N",
        "INTERESTED": "Y",
        "LATITUDE": "37.7790184",
        "LONGITUDE": "-122.4094507"
    </div>
  )
}

export default Results