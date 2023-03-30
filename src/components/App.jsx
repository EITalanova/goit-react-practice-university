import React from 'react';

import { Sidebar } from './Sidebar';
import { Main } from './Main';

import { UniversityPage } from 'pages/UniversityPage';
import MainRoutes from './MainRoutes';


import styled from '@emotion/styled';

export const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Main className={styled.main}>
        <MainRoutes />
      </Main>
    </div>
  );
};
