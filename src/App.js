import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import User from './Pages/User';
import LoginPage from './Pages/Login';
import LandingPage from './Pages/Landing';
import AddProductPage from './Components/AddProduct';
import { API_URL } from './helper';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginAction } from './Reducers/data';
import React from 'react';
import AddNewUser from './Components/AddNewUser';

function App() {

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
        <Route path='/user' element={<User />} />
        <Route path='/addnewuser' element={<AddNewUser />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/addproduct' element={<AddProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
