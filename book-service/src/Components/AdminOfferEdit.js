import react, { useState, useEffect } from 'react'
import axios from 'axios'
import { Icon } from 'semantic-ui-react'
import { NavLink, useNavigate } from 'react-router-dom'

const AdminOfferEdit = () => {
    const [data, getData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:4000/Offers').then(res => {
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
                                            <td><NavLink to={`/adminDashBoard/adminOfferEdit/${offer.id}`}><button className='btn btn-secondary'><Icon name='edit outline' />Edit</button></NavLink></td>

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

export default AdminOfferEdit