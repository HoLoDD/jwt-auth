import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../index';
import { USER_ROUTE } from '../../utils/consts';
import Loader from '../loader';
import style from './loginForm.module.css';

const LoginForm: FC = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  if(store.isLoading) {
    return <Loader />
  }

  return (
    <div className={style.form}>
      <div className={style.card}>
        <input 
          className={style.input}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <input 
          className={style.input}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <div className={style.btns}>
          <button
            className={style.btn}
            onClick={async () => {
              await store.login(email, password);
              navigate(USER_ROUTE, {replace: true})
              }}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(LoginForm);
