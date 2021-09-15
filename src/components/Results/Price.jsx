const Price = (props) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="price-container">
        <div className="property-details price left">
          <span>Type:</span>
          <span>Year Built:</span>
          <span>Price:</span>
          <span>HOA/Month:</span>
        </div>
        <div className="property-details price right">
          <span>{props.propertyType ? props.propertyType : 'N/A'}</span>
          <span>{props.yearBuilt ? props.yearBuilt : 'N/A'} </span>
          <span>{props.price ? formatter.format(props.price) : 'N/A'}</span>
          <span>{props.hoaMonth ? formatter.format(props.hoaMonth) : 'N/A'}</span>
        </div>
        <div className="property-details price left">
          <span>Lot size:</span>
          <span>Status:</span>
          <span>Source:</span>
          <span>MLS:</span>
        </div>
        <div className="property-details price right">
          <span>{props.lotSize ? props.lotSize : 'N/A'} Sq. Ft.</span>
          <span>{props.status ? props.status : 'N/A'}</span>
          <span>{props.source ? props.source : 'N/A'}</span>
          <span>{props.mls ? props.mls : 'N/A'}</span>
        </div>
      </div>
  )
}

export default Price