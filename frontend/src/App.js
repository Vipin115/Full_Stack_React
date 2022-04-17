import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router';
import { LoginForm } from './Components/Auth';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<LoginForm/>}/>

     </Routes>
    </div>
  );
}

export default App;
