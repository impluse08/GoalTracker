import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import App from './App.jsx'
import { Outlet } from 'react-router-dom'
import ChangeNumberComponent from '../components/Home/Change.jsx'

import About from './component/About.jsx';
import Home from './component/Home.jsx';
import GetStarted from './component/GetStarted.jsx';
import Contact from './component/Contact.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "change",
        element: <ChangeNumberComponent />
      },
      {
        path: "about",
        element : <About/>
      },
      {
        path: "getstarted",
        element: <GetStarted />
      },
      {
        path: "contact",
        element: <Contact />
      },
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
console.log('working till here');