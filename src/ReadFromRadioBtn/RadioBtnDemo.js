import {useState} from 'react'; 

export default function RadionBtnDemo() {
    const [pizSize, setPizSize] = useState('Not Selected Yet! Please Select One.'); 

    function handelPizzaSize(event) {
        setPizSize(event.target.value); 
    }

    return(
        <>
            <h2>Radio Button Demo</h2> 
            <h4> <b>Select Pizza Size</b></h4>
            <input type='radio' name='pizzaSize' value='Regular' onClick={handelPizzaSize} /> Regular <br/> 
            <input type='radio' name='pizzaSize' value='Medium' onClick={handelPizzaSize} /> Medium <br/> 
            <input type='radio' name='pizzaSize' value='Large' onClick={handelPizzaSize} /> Large <br/> 
            
            <p>Selected size: <strong>{pizSize}</strong> </p>
        </>
    )
}