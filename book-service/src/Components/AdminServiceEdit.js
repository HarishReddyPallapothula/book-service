import react, { useState, useEffect } from 'react'
import axios from 'axios'
import { Icon } from 'semantic-ui-react'
import { NavLink, useNavigate } from 'react-router-dom'

const AdminServiceEdit = () => {
    const [data, getData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:4000/Services').then(res => {
            getData(res.data)
        }).catch(err => { console.log(err) })



    }, [])
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
                                            <td><NavLink to={`/adminDashBoard/adminServiceEdit/${service.id}`}><button className='btn btn-secondary'><Icon name='edit outline' />Edit</button></NavLink></td>

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

export default AdminServiceEdit