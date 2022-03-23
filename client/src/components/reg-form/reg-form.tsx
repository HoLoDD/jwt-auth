import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';
import { Context } from '../../index';
import Loader from '../loader';
import style from './reg-form.module.css';

const RegForm: FC = () => {
  const { store } = useContext(Context);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  if(store.isLoading) {
    return <Loader />
  }

  return (
    <div className={style.form}>
      <form className={style.card}>
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
            onClick={() => store.registration(email, password)}>
            Sing Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default observer(RegForm);
