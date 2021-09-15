const Title = (props) => {

  return (
    <div className="location-container">
      <header className="title">{props.address}</header>
      <span>{props.city}, </span>
      <span>{props.stateOrProvince} </span>
      <span>{props.zipOrPostalCode}</span>
    </div>
  )
}

export default Title