import Userservices from "../Services/Userservices";
import { useState,useEffect } from "react";
const Listec2 = ()=>{


    const [listec2,setlistec2] = useState([]);
    useEffect(()=>{
        Userservices.get_request('/listec2').then((response)=>{
        setlistec2(response.data)
        console.log(response.data)
        console.log(typeof(listec2))
            
        })
    },[])



    return (

        <table className="table table-dark">
            <thead>
            <tr>
              
                <th scope="col">Id</th>
                <th scope="col">Instance Type</th>
                <th scope="col">Ip Address</th>
                <th scope="col">State</th>
            </tr>
        </thead>
        <tbody>
            {
                listec2.map((ec2)=>(
                    <tr key={ec2.id}>
                        
                        <td>{ec2.id}</td>
                        <td>{ec2.instance_type}</td>
                        <td>{ec2.public_ip_address}</td>
                        <td>{ec2.state.Name}</td>
                    </tr>
                ))
            }
        </tbody>
        </table>
    )

}


export default Listec2