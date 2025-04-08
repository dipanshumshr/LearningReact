import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {

  const {data} = useContext(UserContext);
  if(!data)
  {
    return <p>Please login</p>
  }
  return <p>Welcome sir {data.username}</p>
}

export default Profile