import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ToBookService = () => {
    const [data, getData] = useState([]);
    const [id, setEmailId] = useState("")
    const [customername, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [bookedservicename, setServiceName] = useState("")
    const [message, setMessage] = useState("")
    useEffect(() => {
        axios.get('http://localhost:4000/Services')
            .then(res => {

                getData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("inside submithandler")
        axios.post("http://localhost:4000/BookedService", { id, phone, customername, bookedservicename, message })
            .then(res => {
                console.log(res.data)
                setEmailId("")
                setName("")
                setPhone("")
                setServiceName("")
                setMessage("")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='row tobookservice-form container-pad'>
            <div className='col-md-6'>

                <form onSubmit={submitHandler}>

                    <legend>Book Your service</legend>
                    <div>
                        <input type="text" name='name' placeholder='Your Name' value={customername} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <input type="text" name='email' placeholder='Your email' value={id} onChange={(e) => { setEmailId(e.target.value) }} />
                    </div>
                    <div>
                        <input type="text" name='name' placeholder='Your Phone Number' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    </div>

                    <label htmlFor="service"> Choose a service </label>
                    <select id="service" name="servicename" onChange={(e) => { setServiceName(e.target.value) }}>
                        {
                            data.map(service => {
                                return (

                                    <option value={service.servicename} key={service.id} >{service.servicename}</option>


                                )
                            })
                        }
                    </select>

                    <div>
                        <textarea name='message' placeholder='Give us your message' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                    </div>

                    <input type='submit' value="Book Service" />
                </form>

                {/* <div>
                  <input type="text" name='name' placeholder='name'/>
              </div> */}
            </div>
        </div>
    )
}

export default ToBookService