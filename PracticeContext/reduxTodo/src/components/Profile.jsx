import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
    const creds = useSelector(state => state.login);
  return (
    <div>
        <p>Welcome {creds.username}</p>
        <p>This is your {creds.password}</p>
    </div>
  )
}

export default Profile