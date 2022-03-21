import { observer } from "mobx-react-lite";
import React, { FC, useContext, useEffect, useState } from "react";
import Loader from "../components/loader";
import { Context } from "../index";
import { IUser } from "../models/response/IUser";
import UserService from "../services/UserService";
import LoginPage from "./login-page";

const UserPage: FC = () => {
    const { store } = useContext(Context);

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
      if (localStorage.getItem('token')) {
          store.checkAuth();
      }
    }, [store]);

    if (store.isLoading) {
        return <Loader />;
      }
    
      if (!store.isAuth) {
        return <LoginPage />;
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
}

export default observer(UserPage);