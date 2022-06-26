import React, { useState } from 'react'

import MapPicker from 'react-google-map-picker'
import AddContact from './AddContact';

const DefaultLocation = { lat: 33.8547, lng: 35.8623};
const DefaultZoom = 10;

const AddLocation = () => {
  const l_lat = document.getElementById("lat")
  const l_lng = document.getElementById("lng")
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation (lat, lng){
    setLocation({lat:lat, lng:lng});
  }
  
  function handleChangeZoom (newZoom){
    setZoom(newZoom);
  }

  function handleResetLocation(){
    setDefaultLocation({ ... DefaultLocation});
    setZoom(DefaultZoom);
  }

  return (
    <div>
        <AddContact location={location}/>
        <button onClick={handleResetLocation}>Reset Location</button>
        <label>Latitute:</label><input type='text' id="lat" value={location.lat} disabled/>
        <label>Longitute:</label><input type='text' id="lng" value={location.lng} disabled/>
        <label>Zoom:</label><input type='text' value={zoom} disabled/>
        
        <MapPicker defaultLocation={defaultLocation}
            zoom={zoom}
            mapTypeId="roadmap"
            style={{height:'300px', width:'350px'}}
            onChangeLocation={handleChangeLocation} 
            onChangeZoom={handleChangeZoom}
            apiKey='AIzaSyA-OElgILgvZytsZLl-jL-7FHRN8FKZQvs'/>
  </div>
  );
}

export default AddLocation;
