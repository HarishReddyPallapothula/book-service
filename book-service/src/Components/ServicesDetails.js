import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ToBookService from './ToBookService'


const ServicesDetails = () => {
    const { serviceId } = useParams()
    const [data, getData] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:4000/Services/${serviceId}`)
            .then(res => {

                getData(res.data)
            })
            .catch(err => { console.log(err) })
    },[])
    return (
        <div className='container-fluid back-ground'>
            <div className='container container-pad'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div key={data.id}>
                            <h5>{data.servicename}</h5>
                            <p>{data.servicetag}</p>
                            <p>{data.servicedescription}</p>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                        <ToBookService />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesDetails

