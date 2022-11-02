import { useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';

const UserMap = ({setMapObject, userPermission}) =>{

  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyDYByUhcY2JwYB3C2EL8SdaWYZ8XsJk5X8',
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
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: false, // remove the bottom-right buttons
      });

      setMapObject(map)
      
    });
  }, [setMapObject]);

  return(
    <div id='map' style={{height: 450, width: 450, margin: '3rem auto'}} ref={googlemap} />
  )
}

export default UserMap;