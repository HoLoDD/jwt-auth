import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import AppRouter from './components/AppRouter';

const App: FC = () => {
  
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default observer(App);
