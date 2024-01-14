import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/register' element={<App />}>
      {/* <Route path='' element={<Home />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='about' element={<About />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route path='github' element={<Github />}/> */}
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)