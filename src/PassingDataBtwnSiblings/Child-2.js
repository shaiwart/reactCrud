import {useState, useEffect} from 'react'; 

export default function Child2({genderToBeSearched}) {

    const [empList, setEmpList] = useState([]); 

    useEffect(() => {
        fetch("ejson.json").then(res => res.json())
            .then(data => setEmpList(data))
    }, [])

    const filteredEmpList = empList.filter((eachEmp)=> eachEmp.gender.toUpperCase() === genderToBeSearched.toUpperCase()); 

    return(
        <div>
            <h4>Data received from child-1: {genderToBeSearched}</h4> 
            
            <ul>
                {filteredEmpList.map((eachEmp)=> 
                    <ul>
                        <li key={eachEmp.code}>Id: {eachEmp.code}</li>
                        <li key={eachEmp.code}>Name: {eachEmp.name}</li>
                        <li key={eachEmp.code}>Gender: {eachEmp.gender}</li>
                        <li key={eachEmp.code}>Salary: {eachEmp.annualSalary}</li>
                        <li key={eachEmp.code}>DOB: {eachEmp.dateOfBirth}</li>
                        <br/>
                    </ul> 
                     

                
                )}
            </ul>

        </div>
    )
}