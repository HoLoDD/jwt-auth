import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from './index';
import LoginForm from './components/loginForm';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/response/IUser';
import UserService from './services/UserService';

const App: FC = () => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {}
  }

  if (store.isLoading) {
    return <div>Loading . . .</div>;
  }

  if (!store.isAuth) {
    return <LoginForm />;
  }

  return (
    <div>
      <h1>
        {store.isAuth
          ? `User ${store.user.email} authorized`
          : 'User is not authorized'}
      </h1>
      <button
        onClick={store.logout}>
        Logout
      </button>
      <div>
        <button onClick={getUsers}>Get Users</button>
      </div>
      {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
};

export default observer(App);
