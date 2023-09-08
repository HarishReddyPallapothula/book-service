import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import BookService from './BookService'
import Offers from './Offers'
import ContactUs from './ContactUs'
import Services from './Services'
import ServicesDetails from './ServicesDetails'
import AdminDashboard from './AdminDashboard'
import AdminLogin from './AdminLogin'
import AdminServiceView from './AdminServiceView'
import AdminServicesAdd from './AdminServicesAdd'
import AdminServiceDelete from './AdminServiceDelete'
import AdminOfferView from './AdminOfferView'
import AdminOfferAdd from './AdminOfferAdd'
import AdminOfferDelete from './AdminOfferDelete'
import AdminOfferEdit from './AdminOfferEdit'
import AdminServiceEdit from './AdminServiceEdit'
import AdminServiceEditDetails from './AdminServiceEditDetails'
import AdminOfferEditDetails from './AdminOfferEditDetails'
import AdminBookedServiceDetails from './AdminBookedServiceDetails'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/bookservice' element={<BookService />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:serviceId' element={<ServicesDetails />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='/adminDashBoard' element={<AdminDashboard />} >

          <Route path='' element={<AdminServiceView />} />
          <Route path='adminServicesAdd' element={<AdminServicesAdd />} />
          <Route path='adminServiceDelete' element={<AdminServiceDelete />} />
          <Route path='adminServiceEdit' element={<AdminServiceEdit />} />
          <Route path='/adminDashBoard/adminServiceEdit/:serviceId' element={<AdminServiceEditDetails />} />
          <Route path='/adminDashBoard/adminOfferEdit/:offerId' element={<AdminOfferEditDetails />} />
          <Route path='adminOfferView' element={<AdminOfferView />} />
          <Route path='adminOfferAdd' element={<AdminOfferAdd />} />
          <Route path='adminOfferDelete' element={<AdminOfferDelete />} />
          <Route path='adminOfferEdit' element={<AdminOfferEdit />} />
          <Route path='adminBookedServiceEdit' element={<AdminLogin />} />
          <Route path="AdminBookedServiceDetails" element={<AdminBookedServiceDetails />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routing