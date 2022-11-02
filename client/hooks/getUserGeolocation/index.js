import { useState, useEffect } from 'react';

const getUserGeolocation = () =>{

  const [userLongitude, setUserLongitude] = useState();
  const [userLatitude, setUserLatitude] = useState();
  const [accuracy, setAccuracy] = useState();

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const success = (pos) => {
    setUserLongitude(pos.coords.longitude);
    setUserLatitude(pos.coords.latitude);
    setAccuracy(pos.coords.accuracy);
    
    console.log('success')
  }
  
  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, [])

  return [userLongitude, userLatitude, accuracy]
}

export default getUserGeolocation;