
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Welcome from './pages/Welcome';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
