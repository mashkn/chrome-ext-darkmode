import React, {useEffect, useState} from 'react';
import "./App.scss"
import Main from "./pages/Main";
import SiteList from "./pages/SiteList";
import { RouterProvider as Router, createMemoryRouter } from 'react-router-dom';

const pages = createMemoryRouter([
  {
    path: '/home',
    element: <Main />,
  },
  {
    path: '/site-list',
    element: <SiteList/>,
  }
],{initialEntries: ["/home", "/site-list"],
initialIndex: 0,});

const App: React.FC = () => {
  return (
    <React.StrictMode>
        <Router router={pages}/>
    </React.StrictMode>
  );
};

export default App;