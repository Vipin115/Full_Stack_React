import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router';
import { Signup } from './Components/Register';
import { FlatInfo } from './Components/FlatInfo';


import { LoginForm } from './Components/LoginForm';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/:_id' element={<FlatInfo/>}/>
       <Route path='/login' element={<LoginForm/>}/>
       
       <Route path='/register' element={<Signup/>}/>
      
     </Routes>
    
    </div>
  );
}

export default App;
