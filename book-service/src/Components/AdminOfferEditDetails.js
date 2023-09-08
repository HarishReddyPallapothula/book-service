import react, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
const AdminOfferEditDetails = () => {
    const { offerId } = useParams();
    const [id, setId] = useState("")
    const [offername, setName] = useState("")

    const [offertext, setText] = useState("")
    const [offercode, setCode] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:4000/Offers/${offerId}`).then(res => {
            setId(res.data.id)
            setName(res.data.offername)

            setText(res.data.offertext)
            setCode(res.data.offercode)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    const addSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/Offers/${id}`, { id, offername, offertext, offercode }).then(res => {
            setId("")
            setName("")
            setText("")
            setCode("")
            navigate("/adminDashBoard/adminOfferEdit");
        }).catch(err => { })
    }
    return (
        <div className='row tobookservice-form'>
            <div className='col'>
                <form onSubmit={addSubmitHandler} className='add-form'>
                    <div>
                        <input type='text' name="id" placeholder='Id' value={id} onChange={(e) => { setId(e.target.value) }} />
                    </div>
                    <div>
                        <input type='text' name="offername" placeholder='Offer Name' value={offername} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <input type='text' name="offertext" placeholder='offer text' value={offertext} onChange={(e) => { setText(e.target.value) }} />
                    </div>
                    <div>
                        <input type='text' name="offercode" placeholder='Offer Code ' value={offercode} onChange={(e) => { setCode(e.target.value) }} />
                    </div>
                    <div>
                        <input type='submit' value="Update Offer Data" className='btn btn-light' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminOfferEditDetails