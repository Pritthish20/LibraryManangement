import React from 'react'
import { Route,RouterProvider,createRoutesFromElements,createBrowserRouter } from 'react-router-dom'
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import AddBook from './pages/admin/AddBook';

const routes = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/'>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/add-book' element={<AddBook/>}/>
  </Route>

   
  )
);

const App = () => {
  return (
    
    <div >
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App