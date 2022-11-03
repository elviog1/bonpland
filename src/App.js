
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Properties from './pages/Properties';
import Welcome from './pages/Welcome';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/compra' element={<Properties />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
