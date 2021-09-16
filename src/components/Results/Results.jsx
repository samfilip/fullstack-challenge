import React from 'react'
import './Results.css'
import Title from './Title'
import Price from './Price'
import Amenities from './Amenities'

const Results = (props) => {
  // this would be a good place to use contextAPI
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

  return (
    <div className="results-container">
      <Title 
        address={address} 
        city={city} 
        stateOrProvince={stateOrProvince} 
        zipOrPostalCode={zipOrPostalCode} 
      />
      <Price 
        propertyType={propertyType}
        yearBuilt={yearBuilt}
        price={price}
        hoaMonth={hoaMonth}
        lotSize={lotSize}
        statue={status}
        source={source}
        mls={mls}
      />
      <Amenities
        beds={beds}
        baths={baths}
        location={location}
        squareFeet={squareFeet}
        $SquareFeet={$SquareFeet}
        daysOnMarket={daysOnMarket}
        saleType={saleType}
        soldDate={soldDate}
        nextOpenHouseStartTime={nextOpenHouseStartTime}
        nextOpenHouseEndTime={nextOpenHouseEndTime}
      />
      <div className="buttons-row">
        <a target="_blank" href={`http://www.google.com/maps/place/${latitude},${longitude}`}>View on Google Maps</a>
        <button className="redfin-button" onClick={handleClick}>View on Redfin</button>
      </div>
    </div>
  )
}

export default Results