import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Userservices from "../Services/Userservices";
const Createec2 = ()=>{
   
        const [ImageId,setImageId] = useState();
        const [MinCount,setMinCount]= useState();
        const [MaxCount,setMaxCount]= useState();
        const [InstanceType,setInstanceType]= useState();
    const submitHandler = (event)=>{
        event.preventDefault();

         setImageId(event.target.elements.ImageId.value)
         setMinCount(event.target.elements.MinCount.value)
         setMaxCount(event.target.elements.MaxCount.value)
         setInstanceType(event.target.elements.InstanceType.value)

        const data = {
            "ImageId": ImageId,
            "MinCount": MinCount,
            "MaxCount": MaxCount,
            "InstanceType": InstanceType
        }

        
        Userservices.post_request('/createec2',data).then((response)=>{
        console.log(response.data)
            
        })
    }
    return (


    <form onSubmit={submitHandler}>
       <label htmlFor="ImageId" >ImageId</label>
        <select className="form-select" aria-label="Default select example" name="ImageId">
            <option defaultValue="ami-04505e74c0741db8d" value="ami-04505e74c0741db8d">ubuntu</option>
            <option value="ami-0f9fc25dd2506cf6d">amazon linux</option>
        </select>
        <br/>

        <div className="form-group">
            <label htmlFor="MinCount">Min Count</label>
            <input className="form-control" type="text" id="MinCount" name="Mincount" required/>
        </div>
        <br/>
        <div className="form-group">
            <label htmlFor="MaxCount">Max Count</label>
            <input className="form-control" type="text" id="MaxCount" name="MaxCount" required/>
        </div>
        <br/>
        
        <label htmlFor="location" >Instance Type</label>
        <select className="form-select" aria-label="Default select example" name="InstanceType">
            <option defaultValue="t1.micro">t1.micro</option>
            <option value="t2.micro">t2.micro</option>
        </select>
        <br/>

        <button type="submit" className="btn btn-primary">Submit</button>
        
    </form>


    )

}

export default Createec2