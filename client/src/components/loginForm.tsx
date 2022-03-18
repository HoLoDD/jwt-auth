import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';
import { Context } from '../index';
import style from './loginForm.module.css';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);

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
            onClick={() => store.login(email, password)}>
            Login
          </button>
          <button 
            className={style.btn}
            onClick={() => store.registration(email, password)}>
            Sing Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(LoginForm);
