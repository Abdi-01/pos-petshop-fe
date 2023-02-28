import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import User from './Pages/User';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
