import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Userservices from "../Services/Userservices";

const Deleteec2 = ()=>{
    const navigate = useNavigate();
    const [bucketName,setbucketName] = useState('');
   
    const submitHandler = ()=> {
        
        Userservices.delete_request('/deletedynamodbtable',bucketName).then((response)=>{
            console.log(response.data);
            navigate('/listdynamodb')
        })
    }

    const nameChangeHandler = (event)=> {
            setbucketName(event.target.value);
    }

    return (

        <form onSubmit={submitHandler}>
        <div className="form-group">
            <label htmlFor="bucketName">Bucket Name</label>
            <input className="form-control" type="text" id="bucketName" name="bucketName" onChange={nameChangeHandler}/>
        </div>
    <br/>

        <button type="submit" className="btn btn-primary">Submit</button> 
        
        </form>
       

    );
}

export default Deleteec2;