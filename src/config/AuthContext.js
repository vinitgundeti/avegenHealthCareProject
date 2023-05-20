import {createContext} from 'react';

const AuthContext = createContext({
  userName: null,
});

export default AuthContext;
