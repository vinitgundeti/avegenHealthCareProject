import React, {useState} from 'react';
import AuthContext from './AuthContext';
import Login from '../containers/login';

export default function AuthStack() {
  const [userName, setUserName] = useState(null);
  let value = {
    userName,
    setUserName,
  };
  return (
    <AuthContext.Provider value={value}>
      <Login />
    </AuthContext.Provider>
  );
}
