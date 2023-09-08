import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
const AdminLogin = () => {
    const [uname, setUname] = useState('')
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        if (uname === 'admin' && pwd === 'admin') {
            navigate('/adminDashBoard')
        } else {
            alert("Invalid Password and UserId")
            setUname("")
            setPwd("")
        }
    }
    
    return (
        <div className='container'>
            <div className='row tobookservice-form'>

                <form onSubmit={submitHandler}>
                    <div>
                        <input type="text" name="uname" placeholder="UserName" value={uname} onChange={(e) => { setUname(e.target.value) }} />
                    </div>
                    <div>
                        <input type="password" name="pwd" placeholder="Password" value={pwd} onChange={(e) => { setPwd(e.target.value) }} />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin