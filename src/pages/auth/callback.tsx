import React, {useEffect} from 'react';
import * as styles from '../../styles';
import {useAuth} from "../../components/AuthProvider";

const Callback = () => {
  const code = new URLSearchParams(window.location.search).get('code')
  const { login, token, username } = useAuth()
  useEffect(() => {
    if (code) {
      login(code)
    }
  }, [code, login]);

  if (!code) {
    return (
      <div style={styles.suggestions}>
        No code found. Please access this page though the login page.
      </div>
    )
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