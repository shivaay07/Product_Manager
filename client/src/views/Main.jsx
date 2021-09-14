import React,{useEffect, useState} from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

export default () =>{
    // const [people, setPeople] = useState([])

    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api/people")
    //         .then(res =>{
    //             setPeople(res.data);
    //         })
    //         .catch(err=>console.log('Error:', err))
    // },[])
    // const [message, setMessage] = useState("Loading...")
    // useEffect((req,res)=>{
    //     axios.get("http://localhost:8000/api")
    //         .then(res =>setMessage(res.data.message))
    // },[]);
    return(
        <div>
            {/* <h2>Message from the backend: {message}</h2> */}
            <PersonForm/>
            
            {/* <PersonList people={people}/> */}
        </div>
    )
}
