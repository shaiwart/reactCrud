import {useState} from 'react'; 
import Child1 from './Child-1';
import Child2 from './Child-2';

export default function Parent() {
    const [gender, setGender] = useState(''); 

    return(
        <div> 
            <h2>Data Passing Example</h2> 
            <Child1 setGender={setGender} /> 
            <Child2 genderToBeSearched={gender} /> 
        </div>
    )
}