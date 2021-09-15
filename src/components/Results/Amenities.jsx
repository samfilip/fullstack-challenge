const Amenities = (props) => {

  return (
    <div className="child-container">
      <div className="property-details amenities left">
        <span>Beds:</span>
        <span>Baths:</span>
        <span>Location:</span>
        <span>Size:</span>
        <span>Price/SqFeet:</span>
      </div>
      <div className="property-details amenities right">
        <span>{props.beds ? props.beds : 'N/A'} </span>
        <span>{props.baths ? props.baths : 'N/A'} </span>
        <span>{props.location ? props.location : 'N/A'} </span>
        <span>{props.squareFeet ? props.squareFeet : 'N/A'}</span>
        <span>{props.$SquareFeet ? props.$SquareFeet : 'N/A'}</span>
      </div>
      <div className="property-details amenities left">
        <span>Days Listed:</span>
        <span>Sale Type:</span>
        <span>Sold Date:</span>
        <span>Next Open House Start:</span>
        <span>Next Open House End:</span>
      </div>
      <div className="property-details amenities right">
        <span>{props.daysOnMarket ? props.daysOnMarket : 'N/A'}</span>
        <span>{props.saleType ? props.saleType : 'N/A'} </span>
        <span>{props.soldDate ? props.soldDate : 'N/A'} </span>
        <span>{props.nextOpenHouseStartTime ? props.nextOpenHouseStartTime : 'N/A'} </span>
        <span>{props.nextOpenHouseEndTime ? props.nextOpenHouseStartTime : 'N/A'} </span>
      </div>
    </div>
  )
}

export default Amenities