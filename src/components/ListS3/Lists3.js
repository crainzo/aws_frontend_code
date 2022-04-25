import axios from 'axios'
import { useEffect, useState } from 'react';
import Userservices from '../Services/Userservices';
const Lists3 = ()=> {

    const [lists3,setlists3] = useState(['']);
   
    
    useEffect(()=>{
        Userservices.get_request('/lists3').then((response)=>{
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