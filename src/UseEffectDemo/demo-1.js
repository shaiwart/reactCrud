import {useState, useEffect} from 'react'; 

export default function UseEffectDemo_1() {
    const [value, setValue] = useState(0);

    // const sayHello = () => {
    //     console.log("hello world"); 
    //     // setValue(value+1); 
    // }
    // sayHello(); 

    // useEffect(()=>{
    //     console.log('hello from useEffect'); // by default it is called after every render/re-render 
    // }) 


    useEffect(()=>{
        console.log('hello from useEffect'); 
    }, [])  // here providing dependency array. so the callback function is executed only once in the initial render. 

    return(
        <div className="section">
            <h2>Use effect demo-1</h2>
            <h3>value: {value}</h3> 
            

            <button onClick={()=>{setValue(value+1)}} >click me</button>

        </div>
    )
} 