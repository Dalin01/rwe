const Event = ({ color, eventName, eventValue }) => {

  return (
    <div style={{backgroundColor: color}}>{ `${eventName} ${eventValue}` }</div>
  )
}

export default Event
