import React, { FC } from "react";
import LoginForm from "../components/login-form/loginForm";
import NavBar from '../components/nav-bar/nav-bar';

const LoginPage: FC = () => {
    return (
      <div>
        <NavBar />
        <LoginForm />
      </div>
    )
}

export default LoginPage;