import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { About, Contact , Home, GithubProf, User, route } from './components/Index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
       <Route path="" element = {<Home/>}></Route>
       <Route path="Contact" element={<Contact/>}></Route>
       <Route path='About-Us' element={<About/>}>
        <Route path="Git" element={<GithubProf/>}></Route>
       </Route>
       <Route path= "Git/:username" element={<GithubProf/>}></Route>
       <Route loader={route} path="user/:name" element={<User/>}></Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
