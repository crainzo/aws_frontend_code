import axios from 'axios'
import { useEffect, useState } from 'react';
const Lists3 = ()=> {

    const [lists3,setlists3] = useState(['']);
    const baseURL = "http://54.147.135.214:5000";
    
    useEffect(()=>{
        axios.get(`${baseURL}/lists3`).then((response)=>{
           // localStorage.setItem('lists3',response.data)
            setlists3(response.data)
            console.log(lists3)
            console.log(typeof(lists3))  
        })
    },[])


    return (
       

           lists3.map(s3 => <li key={s3} className="list-group-item list-group-item-success">{s3}</li>)
            
       
    )

}

export default Lists3