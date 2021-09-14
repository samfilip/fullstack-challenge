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
    favorite,
    interested,
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
      <header>{address}</header>
      <div className="property-details location">
        <span>{city}, </span>
        <span>{stateOrProvince} </span>
        <span>{zipOrPostalCode}</span>
      </div>
      <div className="property-details price">
        <span>Sale Type: {saleType} </span>
        <span>{soldDate} </span>
        <span>Type: {propertyType} </span>
        <span>Price: {formatter.format(price)}  </span>
        <span>Lot size: {lotSize} Sq. Ft.</span>
      </div>
      <div className="property-details amenities">
        <span>Beds: {beds} </span>
        <span>Baths: {baths} </span>
        <span>Location: {location} </span>
        <span>Size: {squareFeet ? squareFeet : null}</span>
        <span>Price/SqFeet: {$SquareFeet ? $SquareFeet: null}</span>
        <div className="property-details amenities">
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