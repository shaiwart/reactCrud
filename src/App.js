import './App.css'; 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import SharedLayout from './Components/SharedLayout';
import Products from './Components/Products';
import SingleProduct from './Components/SingleProduct';
import Login from './Components/Login';
import {useState} from 'react'; 
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute'; 

function App() {

  const [user, setUser] = useState(null); 

  return (
    <BrowserRouter> 


      <Routes> 
        <Route path='/' element={<SharedLayout/>}> 
          <Route index element={<Home/>} />
          <Route path='about' element={<AboutUs/>} />
          <Route path='contact' element={<ContactUs/>} />
          <Route path='products' element={<Products/>} />
          <Route path='products/:productId' element={<SingleProduct/>} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard' element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>} /> 
          <Route path='*' element={<ErrorPage/>} /> 
        </Route> 
      </Routes> 

    </BrowserRouter>
  );
}

export default App;
 