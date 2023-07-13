import {useState, useEffect} from 'react'; 

export default function UseEffectDemo_2() {

    const [value, setValue] = useState(0); 
    const [secondValue, setSecondValue] = useState(0); 

    // useEffect(()=>{
    //     console.log('hello from first useEffect');
    // }, []) 

    useEffect(()=>{
        console.log('hello from first useEffect');
    }, [value]) // if we add `value` here then the callbck funciton will be executed after every change of the value. 

    useEffect(()=>{
        console.log('hello from second useEffect');
    }, [secondValue]) // if we add `value` here then the callbck funciton will be executed after every change of the value. 

    // fetch(()=>{}, []) 

    return(
        <div className="section">
            <h1>useEffect- multiple effects</h1> 

            <h3>value: {value}</h3> 
            <button onClick={()=>{setValue(value+1)}}>click</button> 

            <h3>secondValue: {secondValue}</h3> 
            <button onClick={()=>{setSecondValue(secondValue+1)}}>click</button> 

            

        </div>
    )
}