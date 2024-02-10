import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auth from './components/Auth';
import Userprofilepage from './pages/Userprofilepage';

function App() {
  return (
    <div>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Auth/>}/>
    <Route path='/register' element={<Auth register/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/auth'   element={<Auth/>}/>
    <Route path='/userprofile/:showusername' element={<Userprofilepage/>}/>
  </Routes>


    </div>
  );
}

export default App;
