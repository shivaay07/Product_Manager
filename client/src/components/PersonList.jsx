import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const PersonList = (props) => {
    const [people, setPeople] = useState([])

    const deletePerson=(personId) =>{
        axios.delete("http://localhost:8000/api/people/"+personId)
        .then(res =>{
            removeFromDom(personId)
        })
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
            .then(res =>{
                setPeople(res.data);
            })
            .catch(err=>console.log('Error:', err))
    },[])

    const removeFromDom = personId =>{
        setPeople(people.filter(person=>person._id!=personId))
    }

    return (
        <div>
            {people.map((person,i)=>{
                return <p key={i}><Link to={`/people/${person._id}`}>{person.title},{person.price},{person.description}</Link>
                <button onClick={e=>{deletePerson(person._id)}}>Delete</button>
                </p>
            })}
        </div>
    )
}

export default PersonList
