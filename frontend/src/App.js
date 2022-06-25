import Login from './components/Login';
import Register from './components/Register';
// import UserPage from './components/UserPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="/userpage" element={<UserPage />}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;