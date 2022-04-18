import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router';
import { LoginForm } from './Components/Auth';
import { FlatInfo } from './Components/FlatInfo';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<LoginForm/>}/>
       <Route path='/flatinfo' element={<FlatInfo/>}/>

     </Routes>
    </div>
  );
}

export default App;
