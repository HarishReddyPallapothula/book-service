import react, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import {Icon} from 'semantic-ui-react'

const AdminServiceEditDetails = () => {
    const { serviceId } = useParams()
    const [id, setId] = useState("")
    const [servicename, setName] = useState("")
    const [servicelink, setLink] = useState("")
    const [servicetag, setTag] = useState("")
    const [servicedescription, setDescription] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:4000/Services/${serviceId}`).then(res => {
            setId(res.data.id)
            setName(res.data.servicename)
            setLink(res.data.servicelink)
            setTag(res.data.servicetag)
            setDescription(res.data.servicedescription)
        }).catch(err => {
            console.log(err)
        })

    },[])

    const addSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/Services/${id}`, { id, servicename, servicelink, servicetag, servicedescription  }).then(res => {
            setId("")
            setName("")
            setLink("")
            setTag("")
            setDescription("")
            navigate("/adminDashBoard/adminServiceEdit");
        }).catch(err=>{})
    }
  return (
    <div className='row tobookservice-form'>
    <div className='col'>
                 <form onSubmit={addSubmitHandler} className='add-form'>
                     <div>
                         <input type='text' name="id" placeholder='Id' value={id} onChange={(e)=>{ setId(e.target.value)} } />
                     </div>
                     <div>
                     <input type='text' name="servicename" placeholder='Service Name' value={servicename} onChange={(e)=>{ setName(e.target.value)} }/>
                     </div>
                     <div>
             <input type='text' name="servicelink" placeholder='Service Link' value={servicelink} onChange={(e) => { setLink(e.target.value) }} />
                  </div>
                  <div>
             <input type='text' name="servicetag" placeholder='Service Tag' value={servicetag} onChange={(e) => { setTag(e.target.value) }} />
                  </div>
                  <div>
             <textarea type='text' name="servicedescription" placeholder='Service Description' value={servicedescription} onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                    <div>
                     <input type='submit' value="Update Service Details"  className='btn btn-light'/>
                    </div>
                 </form>
             </div>
 </div>
  )
}

export default AdminServiceEditDetails