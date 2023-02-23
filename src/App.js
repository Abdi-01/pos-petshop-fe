import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
