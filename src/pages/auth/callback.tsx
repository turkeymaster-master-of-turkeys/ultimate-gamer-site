import React, {useEffect, useState} from 'react';
import * as styles from '../../styles';
import {useAuth} from "../../components/AuthProvider";

const Callback = () => {
  const code = new URLSearchParams(window.location.search).get('code')
  const [success, setSuccess] = useState(true)
  const { login, token, username } = useAuth()
  useEffect(() => {
    const fetchToken = async () => {
      if (code) {
        setSuccess(await login(code))
      }
    }
    fetchToken()
  }, [code, login]);

  if (!code) {
    return (
      <div style={styles.suggestions}>
        No code found. Please access this page though the login page.
      </div>
    )
  }

  if (!success) {
    return (
      <div style={styles.suggestions}>
        Failed to log in. Please try again.
      </div>
    );
  }

  if (!token) {
    return (
      <div style={styles.suggestions}>
        Checking token... you will be redirected shortly.
      </div>
    );
  }

  return (
    <div style={styles.suggestions}>
      Welcome {username}! You are now logged in.
    </div>
  );
};

export default Callback;