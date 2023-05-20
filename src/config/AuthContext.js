import {createContext} from 'react';

const AuthContext = createContext({
  user: null,
  setUser: user => {},
  logOut: () => {},
});

export default AuthContext;
