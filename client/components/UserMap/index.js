import { useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';

const UserMap = ({setMapObject, userPermission}) =>{

  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_API_KEY,
      version: 'weekly',
    });

    let userCoordinates = {lat: 0, lng: 0}
    let map; 
    
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: userCoordinates,
        clickableIcons: true,
        zoom: 8,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
      });

      setMapObject(map)
      
    });
  }, [setMapObject]);

  return(
    <div id='map' ref={googlemap} />
  )
}

export default UserMap;