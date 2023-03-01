import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import User from './Pages/User';
import LoginPage from './Pages/Login';
import LandingPage from './Pages/Landing';
import AddProductPage from './Components/AddProduct';
import { API_URL } from './helper';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from './Reducers/data';
import React from 'react';
import AddNewUser from './Components/AddNewUser';
import PageNotFound from './Pages/PageNotFound';

function App() {


  const role_id = useSelector((state) => state.dataReducer.role_id);
  const dispatch = useDispatch();
  const keepLogin = async () => {
    try {
      let token = localStorage.getItem('petshop_login');
      if (token) {
        let response = await axios.get(`${API_URL}/user/keep-login`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log("ini response.data keep login", response.data)
        localStorage.setItem('petshop_login', response.data.token);
        dispatch(loginAction(response.data))
      }
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    keepLogin();
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        {
          role_id == 1 ? <>
            <Route path='/user' element={<User />} />
            <Route path='/addnewuser' element={<AddNewUser />} />
            <Route path='/' element={<LoginPage />} />
            <Route path='/landing' element={<LandingPage />} />
            <Route path='/addproduct' element={<AddProductPage />} />
            <Route path='*' element={<PageNotFound />} />
          </> : <>
            <Route path='/landing' element={<LandingPage />} />
            <Route path='/addproduct' element={<AddProductPage />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/' element={<LoginPage />} />
          </>
        }

      </Routes>
    </div>
  );
}

export default App;
