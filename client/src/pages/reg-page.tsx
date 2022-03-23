import React, { FC } from "react";
import NavBar from '../components/nav-bar/nav-bar';
import RegForm from '../components/reg-form/reg-form';

const RegistrationPage: FC = () => {
    return (
      <div>
      <NavBar />
      <RegForm />
    </div>
    )
}

export default RegistrationPage;