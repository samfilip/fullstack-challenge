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
          <span>{props.propertyType}</span>
          <span>{props.yearBuilt} </span>
          <span>{formatter.format(props.price)}</span>
          <span>{formatter.format(props.hoaMonth)}</span>
        </div>
        <div className="property-details price left">
          <span>Lot size:</span>
          <span>Status:</span>
          <span>Source:</span>
          <span>MLS:</span>
        </div>
        <div className="property-details price right">
          <span>{props.lotSize} Sq. Ft.</span>
          <span>{props.status}</span>
          <span>{props.source}</span>
          <span>{props.mls}</span>
        </div>
      </div>
  )
}

export default Price