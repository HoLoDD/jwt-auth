import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import UserPage from './pages/user-page';

const App: FC = () => {

  return (
    <UserPage />
  );
};

export default observer(App);
