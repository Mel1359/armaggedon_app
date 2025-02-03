import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createHashRouter, RouterProvider} from "react-router-dom";
import {Asteroids} from "./pages/Asteroids";
import {Destruction} from "./pages/Destruction";
import {Asteroid} from "./pages/Asteroid";
import {AsteroidsContextProvider} from "./components/asteroids-context/AsteroidsContext";

const router = createHashRouter([
    {
        path: "/asteroids",
        element: <Asteroids/>,
    },
    {
        path: "/destruction",
        element: <Destruction/>,
    },
    {
        path: "/asteroid/:id",
        element: <Asteroid/>
    },
    {
        path: "*",
        element: <Asteroids />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AsteroidsContextProvider>
      <RouterProvider router={router}/>
      </AsteroidsContextProvider>
  </React.StrictMode>
);