import react, { useState, useEffect } from 'react'
import axios from 'axios'
import {Icon} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

const AdminServiceDelete = () => {
    const [data, getData] = useState([])
    const navigate =useNavigate()
    useEffect(() => {
        axios.get('http://localhost:4000/Services').then(res => {
            getData(res.data)
        }).catch(err => { console.log(err) })

        
        
    }, [])
    const deleteHandler = (serviceId) => {
        axios.delete(`http://localhost:4000/Services/${serviceId}`).then(res => {
            alert('data deleted successfully')
            navigate("/adminDashboard")
        }).catch(err=>{console.log(err)})
    }
  return (
    <div className='container'>
        
         <div className='row'>
                    <div className='col'>
                            <table width="100%" id="myTable">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Service Name</th>
                                    <th>Service Tag</th>
                                    <th></th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map(service => {
                                            return (
                                                <tr key={service.id}>
                                                    <td>{service.id}</td>
                                                    <td>{service.servicename}</td>
                                                    <td>{service.servicetag}</td>
                                                    <td><button className='btn btn-danger' onClick={() => deleteHandler(service.id)}><Icon name='trash' />Delete</button></td>
                                                    
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                    </table></div>
                </div>
    </div>
  )
}

export default AdminServiceDelete