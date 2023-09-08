import react, { useState, useEffect } from 'react'
import axios from 'axios'
import { Icon } from 'semantic-ui-react'

import { useNavigate } from 'react-router-dom'


const AdminOfferDelete = () => {
    const [data, getData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:4000/Offers').then(res => {
            getData(res.data)
        }).catch(err => { console.log(err) })



    }, [])
    const deleteHandler = (offerId) => {
        axios.delete(`http://localhost:4000/Offers/${offerId}`).then(res => {
            alert('data deleted successfully')
            navigate("/adminDashboard")
        }).catch(err => { console.log(err) })
    }
    return (
        <div className='container'>

            <div className='row'>
                <div className='col'>
                    <table width="100%" id="myTable">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Offer Name</th>
                                <th>Offer Code</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(offer => {
                                    return (
                                        <tr key={offer.id}>
                                            <td>{offer.id}</td>
                                            <td>{offer.offername}</td>
                                            <td>{offer.offercode}</td>
                                            <td><button className='btn btn-danger' onClick={() => deleteHandler(offer.id)}><Icon name='trash' />Delete</button></td>

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

export default AdminOfferDelete