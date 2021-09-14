import React,{useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import axios from 'axios'


const Update = (props) => {
    const [title, setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description, setDescription] = useState('')
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/people/"+id)
            .then(res=>{
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
    }, [])

    const handleSubmit = e =>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/people/"+id,{
            title,
            price,
            description
        })
            .then(res=>{console.log(res)
            history.push("/people")
            })
            .catch(err =>console.log(err))
    }
    return (
        <div>
            <h1>Update the Product</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Title: </label>
                    <input type="text" onChange={e =>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price:</label>
                    <input type="number" onChange={e=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description:</label>
                    <input type="text" onChange={e=>setDescription(e.target.value)} value={description}/>
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Update
