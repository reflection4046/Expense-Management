import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <>
    <Routes>
      <Routes path='/' element ={<HomePage/>}/>
      <Routes path='/register' element ={<Register/>}/>
      <Routes path='/login' element ={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
