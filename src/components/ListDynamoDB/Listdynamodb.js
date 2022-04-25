import { useState,useEffect } from "react";
import Userservices from "../Services/Userservices";
const Listdynamodb = ()=>{

    const [listdynamo,setlistdynamo] = useState(['']);
   
    
    useEffect(()=>{
        Userservices.get_request('/listdynamodbtable').then((response)=>{
           // localStorage.setItem('lists3',response.data)
            setlistdynamo(response.data)
              
        })
    },[])

    return (
        <ul className="list-group">
            {
                listdynamo.map(s3 => <li key={s3} className="list-group-item list-group-item-success">{s3}</li>)
            }
             
        </ul>
    )
}

export default Listdynamodb