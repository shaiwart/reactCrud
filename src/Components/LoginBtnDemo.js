import {useState} from 'react'; 
import AuthenticationBtn from './LoginBtnDemo-company';

export default function Conditional() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    function check(event) {
        setIsLoggedIn()
    }


    return(
        <div>
            <h1>Login/Logout example</h1>
            <AuthenticationBtn isLoggedIn={isLoggedIn} onLogin={check} />
        </div>
    )
}