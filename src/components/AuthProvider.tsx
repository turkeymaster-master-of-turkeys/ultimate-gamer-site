import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

export type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext({
  token: '',
  username: '',
  login: async (code: string) => false
});

const AuthProvider = ({children}: AuthProviderProps) => {

  const [token, setToken] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    if (token) {
      setToken(token)
    }
    if (username) {
      setUsername(username)
    }
  }, []);

  const login = async (code: string) => {
    try {
      await axios.post('https://discord.com/api/oauth2/token', {
        params: {
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          code: code,
          grant_type: 'authorization_code',
          redirect_uri: process.env.REACT_APP_URL + '/auth/callback',
          scope: 'identify'
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => setToken(response.data.access_token))
      localStorage.setItem('token', token)
      await axios.get('https://discord.com/api/users/@me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => setUsername(response.data.username))
      localStorage.setItem('username', username)
    } catch (e) {
      console.error(e)
      return false
    }
    return true
  }

  return (
    <AuthContext.Provider value={{ token, login, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthProvider;