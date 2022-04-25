import { useState,useEffect } from "react";
import axios from "axios";
const Listdynamodb = ()=>{

    const [listdynamo,setlistdynamo] = useState(['']);
    const baseURL = "http://127.0.0.1:5000";
    
    useEffect(()=>{
        axios.get(`${baseURL}/listdynamodbtable`).then((response)=>{
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