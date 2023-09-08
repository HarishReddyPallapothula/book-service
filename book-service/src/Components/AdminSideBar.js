import React from 'react'
import { NavLink } from 'react-router-dom'
import {Icon} from 'semantic-ui-react'
const AdminSideBar = () => {
  return (
    <div className='sidebar'>
          <ul>
          
            <li><NavLink to=""><Icon name='eye' />View Service</NavLink></li>
              <li><NavLink to="adminServicesAdd"><Icon name='add square' />Add New Services</NavLink></li>
              <li><NavLink to="adminServiceDelete"><Icon name='trash alternate outline' />Delete Services</NavLink></li>
              <li><NavLink to="adminServiceEdit"><Icon name='edit outline' />Edit Service Details</NavLink></li>
              <li><NavLink to="adminOfferView"><Icon name='eye' />View Offers</NavLink></li>
              <li><NavLink to="adminOfferAdd"><Icon name='add square' />Add Offers</NavLink></li>
              <li><NavLink to="adminOfferDelete"><Icon name='trash alternate outline' />Delete Offers</NavLink></li>
              <li><NavLink to="adminOfferEdit"><Icon name='edit outline' />Edit Offer</NavLink></li>
              <li><NavLink to="AdminBookedServiceDetails"><Icon name='eye' />Booked Services</NavLink></li>
              
          </ul>
    </div>
  )
}

export default AdminSideBar