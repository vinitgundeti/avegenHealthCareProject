import React, {useState} from 'react';
import AuthContext from './AuthContext';
import Login from '../containers/login';
import AppNavigator from './AppNavigator';

export default function AuthStack() {
  const [user, setUser] = useState(null);
  let value = {
    user,
    setUser,
    logOut: () => setUser(null),
  };
  return (
    <AuthContext.Provider value={value}>
      {user === null ? <Login /> : <AppNavigator />}
    </AuthContext.Provider>
  );
}
