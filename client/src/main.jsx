import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Route,RouterProvider,createRoutesFromElements,createBrowserRouter } from 'react-router-dom'
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import AddBook from './components/AddBook.jsx';
import UpdateBook from './components/UpdateBook.jsx';
import Dashboard from './pages/admin/Dashboard';
import Borrowed from './pages/User/Borrowed.jsx'
import Allbooks from './pages/User/Allbooks.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'


const routes = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    {/* <Route path='/add-books' element={<AddBook/>}/> */}
    {/* <Route path='/update-book' element={<UpdateBook/>}/> */}
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/borrowed' element={<Borrowed/>}/>
    <Route path='/' element={<Allbooks/>}/>


  </Route>

   
  )
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>
    
 
)
