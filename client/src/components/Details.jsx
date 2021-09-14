import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom';
const Details = (props) => {
    const[person, setPerson] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/people/"+id)
            .then(res =>{
                console.log(res.data)
                setPerson(res.data)})
            .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <p>{person.title}</p>
            <p>{person.price}</p>
            <p>{person.description}</p>
            <Link to={"/people/"+person._id+"/edit"}>
                Edit
            </Link>
        </div>
    )
}

export default Details
