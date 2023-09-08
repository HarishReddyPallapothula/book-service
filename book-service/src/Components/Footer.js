import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Icon} from 'semantic-ui-react'

import axios from 'axios'


    

    const Footer = () => {
        const [data, getData] = useState([]);
        useEffect(()=> {
            axios.get('http://localhost:4000/Services')
                .then(res => {
                    
                    getData(res.data)
                })
                .catch(err => {
                console.log(err)
            })
        },[])
        return (
            <div className=''>
                <div className='container-fluid topfooter'>
                    <div className='container'>
                        <div className='row ' >
                    <div className='col-md-3'>
                    <h6><strong>BOOKSERVICE</strong></h6>
                       <NavLink className="nav-link" to='/'>Home </NavLink>
                       <NavLink className="nav-link" to='/about'>About</NavLink>
                       <NavLink className="nav-link" to='/services'>Services </NavLink>
                       <NavLink className="nav-link" to='/bookservice'>Book Service </NavLink>
                       <NavLink className="nav-link" to='/offers'>Offers </NavLink>
                    </div>
                    <div className='col-md-3'>
                         <h6><strong>LIST OF SERVICES</strong></h6>
                      {
                          data.map(service =>{
                              return (
                                  <div key={service.id}>
                                      <div >{service.servicename}</div>
                                  </div>
                            )
                          })
                      }
                    </div>
                    <div className='col-md-3'>
                    <h6><strong>REACH US</strong></h6>
                   <p>D/no: 1-111/d-3/142 <br></br>
                       Opp. DLF building <br></br>
                       Indira Nagar<br></br>
                      Gachibowli <br></br>
                       Hyderabad <br></br>
                       500032


                   </p>
                    </div>
                    <div className='col-md-3'>
                    <h6><strong>CONTACT US</strong></h6>
                       <p>
                      
                       <Icon name='phone' />9705172636<br></br>
                       <Icon name='mail' />harishreddypallapothula@gmail.com<br></br>
                  
                       </p>
                            </div>
                            </div>
                        </div>
                </div>
                <div className='container-fluid bottomfooter'>
                    <div className='container'>
                    <p>&copy;2023. etechnetwork pvt.ltd. </p>
                    </div>
                
                </div>
            </div>
    //   <div>
    //   <div className='container-fluid footer'>
          
    //       <div className='row topfooter ' >
    //           <div className='col-md-3'>
    //           <h6><strong>BOOKSERVICE</strong></h6>
    //                   <NavLink className="nav-link" to='/'>Home </NavLink>
    //                   <NavLink className="nav-link" to='/about'>About</NavLink>
    //                   <NavLink className="nav-link" to='/services'>Services </NavLink>
    //                   <NavLink className="nav-link" to='/bookservice'>Book Service </NavLink>
    //                   <NavLink className="nav-link" to='/offers'>Offers </NavLink>
                      
    //           </div>
    //           <div className='col-md-3'>
    //                   <h6>List of Services</h6>
    //                   {
    //                       data.map(service =>{
    //                           return (
    //                               <div key={service.id}>
    //                                   <div >{service.servicename}</div>
    //                               </div>
    //                         )
    //                       })
    //                   }
    //           </div>
    //           <div className='col-md-3'>
    //               <h6>Reach US</h6>
    //               <p>D/no: 1-111/d-3/142 <br></br>
    //                   Opp. DLF building <br></br>
    //                   Indira Nagar<br></br>
    //                   Gachibowli <br></br>
    //                   Hyderabad <br></br>
    //                   500032


    //               </p>
    //           </div>
    //           <div className='col-md-3'>
    //                   <h6>CONTACT US</h6>
    //                   <p>
                      
    //                   <Icon name='phone' />6438478463<br></br>
    //                   <Icon name='mail' />bookservice@gmail.com<br></br>
                  
    //                   </p>
    //           </div>
    //       </div>
    //       <div className='row container-fluid bottomfooter'>
              
    //           <p>&copy;2023. etechnetwork pvt. ltd. All Rights Reserved.</p>
             
    //           </div>
    //           </div>
                
    //             </div>
  )
}

export default Footer