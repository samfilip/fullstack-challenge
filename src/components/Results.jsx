import './Results.css'

const Results = (props) => {
  const { 
    saleType,
    soldDate,
    propertyType,
    address,
    city,
    stateOrProvince,
    zipOrPostalCode,
    price,
    beds,
    baths,
    location,
    squareFeet,
    lotSize,
    yearBuilt,
    daysOnMarket,
    $SquareFeet,
    hoaMonth,
    status,
    nextOpenHouseStartTime,
    nextOpenHouseEndTime,
    source,
    mls,
    latitude,
    longitude,
    redfinurl
  } = props
  
  const handleClick = () => {
    const newWindow = window.open(redfinurl, '_blank', 'noopener,nereferrer')
    if (newWindow) newWindow.opener = null
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="results-container">
      <div className="property-details location">
        <header>{address}</header>
        <span>{city}, </span>
        <span>{stateOrProvince} </span>
        <span>{zipOrPostalCode} </span>
      </div>
      <div className="property-details price">
        <span>Type: {propertyType} </span>
        <span>Price: {formatter.format(price)}  </span>
        <span>HOA/Month: {formatter.format(hoaMonth)} </span>
        <span>Year Built: {yearBuilt} </span>
        <span>Lot size: {lotSize} Sq. Ft.</span>
      </div>
      <div className="amenities-container">
        <div className="property-details amenities">
          <span>Beds: {beds} </span>
          <span>Baths: {baths} </span>
          <span>Location: {location} </span>
          <span>Size: {squareFeet ? squareFeet : 'N/A'}</span>
          <span>Price/SqFeet: {$SquareFeet ? $SquareFeet: null}</span>
        </div>
        <div className="property-details amenities">
          <span>{source}</span>
          <span>Sale Type: {saleType} </span>
          <span>Sold Date: {soldDate ? soldDate : 'N/A'} </span>
          <span>Next Open House Start Time: {nextOpenHouseStartTime ? nextOpenHouseStartTime : 'N/A'} </span>
          <span>Next Open House End Time: {nextOpenHouseEndTime ? nextOpenHouseStartTime : 'N/A'} </span>
        </div>
      </div>
      <div className="buttons-row">
        <a target="_blank" href={`http://www.google.com/maps/place/${latitude},${longitude}`}>View on Google Maps</a>
        <button className="redfin-button" onClick={handleClick}>View on Redfin</button>
      </div>
    </div>
  )
}

export default Results