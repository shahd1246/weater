import React, { useEffect, useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import axios from 'axios';

export default function App() {

 let [dataApi,setDataApi]=useState(null);
 let [location,setLocation]=useState('cairo')

  async function getDate(City){
  let {data}=await axios.get(`https://api.weatherapi.com/v1/current.json?key=6ee259f5ecc1456c8e9190259261304&q=${City}`)
  console.log(data);
  setDataApi(data)
}

  useEffect(()=>{
    getDate(location)
  },[])

  function search(e){
    if(e.key==="Enter"){
        getDate(location)
    }
  }

  return (
    <div className='body' >
      <div className="container d-flex justify-content-center align-items-center">
      <h2><i className=" fa-solid fa-temperature-half"></i><span>Weather APP</span></h2>
     <Form.Group >
        <Form.Control type="text" placeholder= "🔍 Enter City Name"
        onChange={(e)=>setLocation(e.target.value)}
        onKeyDown={search}
        />
      </Form.Group>
      <div className='box'>
        {dataApi && (
         <div >
         <div className="d-flex justify-content-center" >
           <img  src={dataApi.current.condition.icon} alt="" />
          </div>
          <h4> {dataApi.location.name},
          {dataApi.location.country}</h4>
          <p className="update">{dataApi.current.last_updated}</p>
          <h5>{dataApi.current.temp_c} ْc</h5>
          
          
          <div className="weather-info">

  <div className="weather-card">
    <i className="fa-regular fa-cloud"></i>
    <p>Cloud</p>
    <h5>{dataApi.current.cloud}</h5>
  </div>

  <div className="weather-card">
    <i className="fa-solid fa-temperature-half"></i>
    <p>Feels Like</p>
    <h5>{dataApi.current.feelslike_c} ْc</h5>
  </div>

  <div className="weather-card">
    <i className="fa-solid fa-droplet"></i>
    <p>Humidity</p>
    <h5>{dataApi.current.humidity}%</h5>
  </div>

  <div className="weather-card">
    <i className="fa-solid fa-wind"></i>
    <p>Wind</p>
    <h5>{dataApi.current.wind_degree} km/h</h5>
  </div>

  <div className="weather-card">
    <i className="fa-solid fa-eye"></i>
    <p>Visibility</p>
    <h5>{dataApi.current.vis_km} km</h5>
  </div>

  <div className="weather-card">
    <i className="fa-solid fa-sun"></i>
    <p>UV</p>
    <h5>{dataApi.current.uv}</h5>
  </div>

  <div className="weather-card">
    <i className="fa-solid fa-compress"></i>
    <p>Pressure</p>
    <h5>{dataApi.current.pressure_mb} hpa</h5>
  </div>

  <div className="weather-card">
    <i className="fa-solid fa-location-pin"></i>
    <p>Dew Point</p>
    <h5>{dataApi.current.dewpoint_c} ْc</h5>
  </div>
</div>
         </div>
      )}
      
      </div>


</div>
    </div>
  )
}
