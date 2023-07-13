import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

const url = 'https://localhost:7205/api/Employee/';  

export function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch(url + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, {});
    return (
        <div><label>Id:</label>
            {employee.id}<br />
            <label>name:</label>
            {employee.name}<br />
            <label>Email:</label>
            {employee.email}<br />
            <label>Department:</label>
            {employee.department}<br />
        </div>
    );
}
export default Employee;