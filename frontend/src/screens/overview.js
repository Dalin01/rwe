import Event from "../components/Event"
import './index.css'

const Overview = ({ item }) => { 

  const events = [
    {
      "name" : "ST",
      "color" : "red"
    }
  ];

  return (
    <div className='container'>
      <div >
        <p>{ item.name }</p> 
        <p>{ item.speed }</p> 
        <p>{ item.temperature }</p> 
        <p>{ item.power }</p> 
      </div>
      <div> 
        {
          
          events.forEach((value) => {
            return <Event color= {value.color} eventName={value.name} eventValue={item.event}/>
          })
        }

      </div>
    </div>
  )
}

export default Overview
