import {useState} from 'react'; 
import MyCoolCodeBlock from '../Components/MyCoolCodeBlock';


export default function GenerateRadioBtnDynamically() {
    const [pizSize, setPizSize] = useState('Not Selected Yet! Please Select One.'); 
    const listOfSize = ['Hunger', 'Jada-hunger', 'Bahut-jada hunger']; 


    function handelPizzaSize(event) {
        setPizSize(event.target.value); 
    }

    function handelSubmit(event) {
        event.preventDefault(); 
    }

    

    return(
        <>
            <h2>Generate Radio Btn Dynamically</h2>

            <form onSubmit={handelSubmit}>
                <label> <b>Select Pizza Size</b> </label> 
                {listOfSize.map((item, index) => {
                    return(
                        <div>
                            <input type='radio' name='pizzaSize' value={item} onClick={handelPizzaSize} />
                            <label>{item}</label>
                        </div>
                    )
                })}
            </form> 
            <p>Selected size: <strong>{pizSize}</strong> </p>
            <MyCoolCodeBlock code="
            <form onSubmit={handelSubmit}>
                <label> <b>Select Pizza Size</b> </label> 
                {listOfSize.map((item, index) => {
                    return(
                        <div>
                            <input type='radio' name='pizzaSize' value={item} onClick={handelPizzaSize} />
                            <label>{item}</label>
                        </div>
                    )
                })}
            </form>" language='js' showLineNumbers='true' startingLineNumber='1' />

        </>
    )
}

//  code, language, showLineNumbers, startingLineNumber