
import {useRef} from 'react';
import { setCookie } from 'cookies-next';
// import PropTypes from 'prop-types';

const LocatorButton = ({mapObject, setUserPermission}) =>{
  const marker = useRef(null); 
  const accuracyCircle = useRef(null)

  const handleGeolocationError = (error, setStatus) => {
    if (error.code === 1) {
      setStatus('permissionDenied');
    } else if (error.code === 2) {     
      setStatus('positionUnavailable');
    }
    else if (error.code === 3) {
      setStatus('timeout');       
    }
  }; 
  
  const locatorButtonClicked = () => {

    setUserPermission(true);

    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition(position => {
        const userLocation = {           
          lat: position.coords.latitude, 
          lng: position.coords.longitude,
        };                               
        
        setCookie('latitude', position.coords.latitude);
        setCookie('longitude', position.coords.longitude);

        mapObject.setCenter(userLocation);  
      
        if (marker.current) {          
            marker.current.setMap(null); 
        }
        
        marker.current = new google.maps.Marker({ 
          position: userLocation,
          title: 'You are here!'
        });
        
        marker.current.setMap(mapObject);

        const errorRange = position.coords.accuracy;
        
        if (accuracyCircle.current) {         
          accuracyCircle.current.setMap(null);
        } 
        
        accuracyCircle.current = new google.maps.Circle({
          center: userLocation,
          fillColor: '#000',
          radius: errorRange,
          strokeColor: '#FFF',
          strokeOpacity: 0.4,
          strokeWeight: 1,
          zIndex: 1,
        });
      
        accuracyCircle.current.setMap(mapObject)
      },error => { handleGeolocationError(error, setStatus)}, {maximumAge: 1000, timeout: 10000})}
    else {
      setStatus('geolocationDenied');
    }
  }

  return (
    <button
      type="button"
      onClick={locatorButtonClicked}
      style={{justifyContent: 'center'}}
    >
      <a>Click To Be Found</a>
    </button>
  );
}

export default LocatorButton;


// Map.propTypes = {
//   setMapObject: PropTypes.func.isRequired,
// };