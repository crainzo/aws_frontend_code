import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Creates3 = ()=>{
     const [bucketName,setbucketName] = useState('');
     const navigate = useNavigate();

    const submitHandler = (event)=>{
        event.preventDefault();

        console.log(event.target.elements.bucketName.value);
        console.log(event.target.elements.location.value);

        const data = {
            "bucketName":event.target.elements.bucketName.value,
            "bucketLocation":event.target.elements.location.value
        }
        const baseURL = "http://127.0.0.1:5000";
        axios.post(`${baseURL}/creates3`,data).then((response)=>{
            console.log(response.data)
            navigate('/lists3')
        })

    }

    const nameChangeHandler = (event)=>{
        setbucketName(event.target.value)
    }


    return (


    <form onSubmit={submitHandler}>
        <div className="form-group">
            <label htmlFor="bucketName">Bucket Name</label>
            <input className="form-control" type="text" id="bucketName" name="bucketName" onChange={nameChangeHandler}/>
        </div>
        <br/>

        <label htmlFor="location" >Location</label>
        <select className="form-select" aria-label="Default select example" name="location">
            <option defaultValue="us-east-1">us-east-1</option>
            <option value="us-east-2">us-east-2</option>
        </select>
        <br/>



        <button type="submit" className="btn btn-primary">Submit</button>
        
    </form>


    )

}

export default Creates3