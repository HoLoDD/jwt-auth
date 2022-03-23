import { observer } from "mobx-react-lite";
import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Loader from "../components/loader";
import NavBar from '../components/nav-bar/nav-bar';
import { Context } from "../index";
import { IUser } from "../models/response/IUser";
import UserService from "../services/UserService";
import { LOGIN_ROUTE } from '../utils/consts';

const UserPage: FC = () => {
    const { store } = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate(); 

    useEffect(() => {
      if (localStorage.getItem('token')) {
           store.checkAuth()
      }
    }, [store]);

    if (store.isLoading) {
      return <Loader />;
    }

    async function getUsers() {
        try {
          const response = await UserService.fetchUsers();
          setUsers(response.data);
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div>
          <NavBar />
          <h1>
            {store.isAuth
              ? `User ${store.user.email} authorized`
              : 'User is not authorized'}
          </h1>
          <button
            onClick={() => {
              store.logout();
              navigate(LOGIN_ROUTE, {replace: true})
            }
              }>
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
}

export default observer(UserPage);