import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User, { UserInfoData } from './components/User/User.jsx'
import ErrorComp from './components/ErrorCmp/ErrorComp.jsx'
import BreadCrumps from './components/breadCrumps/BreadCrumps.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//       children: [ 
//         {
//           path: '',
//           element: <Home />
//         }, 
//         {
//           path: 'about',
//           element: <About />
//         }
//       ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route  path = '' element = {<Home />} />
      <Route  path = '/about' element = {<About />} />
      <Route loader={UserInfoData} errorElement = {< ErrorComp />}
       path = '/user/:UserId' element = {<User />} />

      {/* <Route  path = '/user/:Userid' element = {<User />} /> */}

      <Route  path = '/help/contact' element = {<BreadCrumps />} />

      <Route path= '*' element = {<ErrorComp />} />
    </Route>
    
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
