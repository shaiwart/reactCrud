import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Products from "./Products";
import Login from "./Login"; 

export default function Navbar() {
    return(
        <nav className="navbarX" >
            <Link to='/' element={<Home/>}> Home </Link> 
            <Link to='about' element={<AboutUs/>}> About </Link> 
            <Link to='contact' element={<ContactUs/>}> Contact </Link>
            <Link to='products' element={< Products />}> Products </Link>
            <Link to='login' element={< Login />}> Login </Link>
        </nav>
    )
}