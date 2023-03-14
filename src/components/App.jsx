import React from "react";

import { Sidebar } from "./Sidebar";
import { Main } from "./Main";

import { UniversityPage } from "pages/UniversityPage";



export const App = () => {
  return (
    <div className="app"
    >
      <Sidebar />
      <Main>
        <UniversityPage/>
      </Main>
    </div>
  );
};
