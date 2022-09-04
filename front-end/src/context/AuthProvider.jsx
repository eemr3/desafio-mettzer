import React, { useState } from 'react';
import Cookie from 'js-cookie';
import { AppContext } from './AppContext';
import { requestSignIn } from './utils';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

function AuthProvider({ children }) {
  const history = useHistory();
  const [token, setToken] = useState('');
  const signIn = async (values) => {
    try {
      const response = await requestSignIn(values);
      Cookie.set('token', response.token);
      setToken(response.token);
      history.push('/home');
    } catch (err) {
      console.log(err);
      if (err.response.status === 403) {
        return toast.error('E-mail ou senha inválidos!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return <AppContext.Provider value={{ signIn, token }}>{children}</AppContext.Provider>;
}

export default AuthProvider;
