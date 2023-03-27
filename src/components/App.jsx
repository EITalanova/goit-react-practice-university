import React from 'react';

import { Sidebar } from './Sidebar';
import { Main } from './Main';

import { UniversityPage } from 'pages/UniversityPage';
import MainRoutes from './MainRoutes';

export const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Main>
        <MainRoutes />
      </Main>
    </div>
  );
};
