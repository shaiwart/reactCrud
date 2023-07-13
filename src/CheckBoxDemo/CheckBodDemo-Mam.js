import { useState } from "react";
import ReactDOM from "react-dom";
export default function Checkboxdemo() {
    const gender = ["Dance", "Music", "Sports"];
    const [inputsrd, setInputsrd] = useState([]);


    const handleChange = (event) => {
        const { value, checked } = event.target; 
        if (checked) {
            setInputsrd([...inputsrd, value]);
        }
        else {
            setInputsrd(inputsrd.filter((e) => {
                return (e !== value);
            }))

        }
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Hobbies:</label>
            {gender.map((g, i) => {
                return <div>
                    <label key="i">{g}</label>
                    <input type="checkbox" name={"nm" + i} value={g} onClick={handleChange} />
                </div>
            })
            }
            <h2>{inputsrd}</h2>
            <input type="submit" />
        </form>
    )
}