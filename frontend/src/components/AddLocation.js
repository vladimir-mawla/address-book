import React, { useState } from 'react'

import MapPicker from 'react-google-map-picker'
import AddContact from './AddContact';

const DefaultLocation = { lat: 33.8547, lng: 35.8623};
const DefaultZoom = 10;

const AddLocation = () => {

  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation (lat, lng){
    setLocation({lat:lat, lng:lng});
  }
  
  function handleChangeZoom (newZoom){
    setZoom(newZoom);
  }

  return (
    <div className='add-contact'>
        <AddContact location={location}/>
        <div className='add-location'>
          <label>Latitute:</label><input type='text' id="lat" value={location.lat} disabled/>
          <label>Longitute:</label><input type='text' id="lng" value={location.lng} disabled/>
          <div>
          <MapPicker defaultLocation={defaultLocation}
              zoom={zoom}
              mapTypeId="roadmap"
              style={{height:'300px', width:'100%'}}
              onChangeLocation={handleChangeLocation} 
              onChangeZoom={handleChangeZoom}
              apiKey='AIzaSyA-OElgILgvZytsZLl-jL-7FHRN8FKZQvs'/>
              </div>
          </div>
  </div>
  );
}

export default AddLocation;
