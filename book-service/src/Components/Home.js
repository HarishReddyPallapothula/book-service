import React from 'react'
import { NavLink } from 'react-router-dom'
import Services from './Services'
import Offers from './Offers'

const Home = () => {
    console.log('home')
    return (
        <div className='back-ground'>
            <div className='bg-image'>
                <div className='container'>
                    <h3>Yep, we make it comfy for you</h3>

                    <p> 🌟 Discover, Book, and Enjoy a Wide Range of Premium Services 🌟</p>
                    <p>

                        We are thrilled to extend a warm welcome to you at BOOKSERVICE.COM! <br></br>
                        Whether you're in need of expert services or looking to indulge in a little self-care,<br></br>
                        you've come to the right place.<br></br>
                        Our platform is designed to make your life easier <br></br>
                        by bringing an array of top-notch services right to your fingertips.
                    </p>
                    <h3>
                        Discover about us <NavLink className="nav-link" to='/about'><button className='btn btn-home'>Here!</button></NavLink>
                    </h3>
                </div>
                <br></br>
            </div>
            <div >
                <marquee ><span>Get 10% off on your first service booking.Use code <strong>FIRST10OFF</strong>.</span>
                </marquee>
            </div>
            <div >
                <marquee direction="right" ><span>Book any spa and wellness retreat and receive a complimentary 30-minute massage.Use code <strong>RELAX30FREE</strong>.</span>
                </marquee>
            </div>
            <Services />
            <br></br>
            <Offers />
        </div>
    )
}

export default Home