import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

export default () =>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")
    const history  =  useHistory();
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(title)
        console.log(price)
        console.log(description)
        axios.post('http://localhost:8000/api/people',{
            title,
            price,
            description
        })
            .then(res => {console.log(res)
            history.push("/people")
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            {JSON.stringify(title)}{JSON.stringify(price)}{JSON.stringify(description)}
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title:</label>
                    <input type="text" onChange={e=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price:</label>
                    <input type="Number" onChange={e=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description:</label>
                    <input type="text" onChange={e=>setDescription(e.target.value)} value={description}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}