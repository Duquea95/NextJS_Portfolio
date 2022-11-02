import { useState } from 'react';
import LocatorButton from '../LocatorButton';
import UserMap from '../UserMap';
import getUserGeolocation from '../../hooks/getUserGeolocation';

const UserMining = () =>{
  const [mapObject, setMapObject] = useState(null);
  const [userPermission, setUserPermission] = useState(false);
  
  const [userLongitude, userLatitude, accuracy] = getUserGeolocation();

  return(
    <div className='section flex flex-center user-learning'>
      <div className='padding content'>
        <div style={{margin: '0 auto'}}>
          <div style={{textAlign: 'center'}} className={userPermission ? 'hide': ''}>
            <h1>Want to see something cool?</h1>
            <p>I'm currently working on various personal projects. One of them involving user data exctraction for visual analsis. If you don't mind, I'd love to learn a little about you.</p>
            <LocatorButton mapObject={mapObject} setUserPermission={setUserPermission}/>
          </div>
          <div className={userPermission ? 'flex user-data': 'hide'}>
            <div className='data-copy'>
              <h1>Was I able to find you?</h1>
              <p>Longitude: {userLongitude}</p>
              <p>Latitude: {userLatitude}</p>
              <p>Range of Error: {accuracy}meters</p>
              <span className='copyright'>Don't be alarmed, I am not storing any of this data. I respect your privacy, and am merely showing a glimpse of what to expect in future projects. Check back later to see what else I can extract ^__^</span>
            </div>
            <UserMap userPermission={userPermission} setMapObject={setMapObject}/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMining;