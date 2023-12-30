import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auth from './components/Auth';

function App() {
  return (
    <div>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Auth/>}/>
    <Route path='/register' element={<Auth register/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/auth'   element={<Auth/>}/>
  </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
