import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson'; 
// const url = 'https://api.github.com/users/shaiwart';  

export default function MultipleReturns() {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true); 
    

    useEffect(() => {
        // fetch data 
        const fetchData = async () => {
            const response = await fetch(url); // now this function is synchronous 
            console.log(response); 
            const data = await response.json(); 
            console.log(data);
            setUser(data);

            setIsLoading(false); 

        }
        fetchData();
    }, [])

    if(isLoading) {
        return <h3>Loading....</h3> 
    }



    return <div>
        <img
            style={{ width: '150px', borderRadius: '25px' }}
            src={user.avatar_url}
            alt={user.name}
        />
        <h2>{user.name}</h2>
        <h4>works at {user.company}</h4>
        <p>{user.bio}</p>
    </div>
}


