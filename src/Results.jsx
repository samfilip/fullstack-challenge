
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

  return (
    <div className="results-container">
      <header>{address}</header>
      {/* <div className="property-details"> */}
        <span>{city}</span>
        <span>{stateOrProvince}</span>
        <span>{zipOrPostalCode}</span>
        <span>{saleType}</span>
        <span>{soldDate}</span>
        <span>{propertyType}</span>
        <span>{price}</span>
        <span>{beds}</span>
        <span>{baths}</span>
        <span>{location}</span>
        <span>{squareFeet}</span>
        <span>{$SquareFeet}</span>
      {/* </div> */}
    </div>
  )
}

export default Results