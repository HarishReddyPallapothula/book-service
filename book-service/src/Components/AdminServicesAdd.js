import React, { useState } from 'react'
import axios from 'axios'

const AdminServicesAdd = () => {
    const [id, setId] = useState("")
    const [servicename, setName] = useState("")
    const [servicelink, setLink] = useState("")
    const [servicetag, setTag] = useState("")
    const [servicedescription, setDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/Services", { id, servicename, servicelink, servicetag, servicedescription })
            .then(res => {
                setId("")
                setName("")
                setLink("")
                setTag("")
                setDescription("")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='row tobookservice-form'>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name="id" placeholder='serviceid' value={id} onChange={(e) => { setId(e.target.value) }} />
                </div>
                <div>
                    <input type="text" name="name" placeholder='servicename' value={servicename} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div>
                    <input type="text" name="imglink" placeholder='imagelink' value={servicelink} onChange={(e) => { setLink(e.target.value) }} />
                </div>
                <div>
                    <input type="text" name="tag" placeholder='servicetag' value={servicetag} onChange={(e) => { setTag(e.target.value) }} />
                </div>
                <div>
                    <textarea type="text" name="description" placeholder='description' value={servicedescription} onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <div>
                    <input type="submit" value="Add Service" />
                </div>
            </form>
        </div>
    )
}

export default AdminServicesAdd