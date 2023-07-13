export default function Child1(props) {
    const setGender = props.setGender; 

    function changeData(event) {
        setGender(event.target.value); 
    }
    
    return(
        <div>
            Child1: <input type='text' onChange={changeData} /> 
        </div>
    )
}