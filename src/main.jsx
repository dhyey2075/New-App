import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DetailNews from "./components/DetailNews.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/business",
    element: <App category="business"/>
  },
  {
    path: "/entertainment",
    element: <App category="entertainment"/>
  },
  {
    path: "/general",
    element: <App category="genera"/>
  },
  {
    path: "/health",
    element: <App category="health"/>
  },
  {
    path: "/science",
    element: <App category="science"/>
  },
  {
    path: "/sports",
    element: <App category="sports"/>
  },
  {
    path: "/technology",
    element: <App category="technology"/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
