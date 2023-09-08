import React from 'react'
import { Icon } from 'semantic-ui-react'
const ContactUs = () => {
  return (
    <div className='container-fluid back-ground'>
      <div className="container container-pad">
        <div className="row ">
          <div className="col-md-8 tobookservice-form">
            <div className="row container-pad">
              <div className="col-md-6  form-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="form-control"
                ></input>
              </div>

              <div className="col-md-6  form-group">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="form-control"
                ></input>
              </div>
              <div className="col-md-6  form-group">
                <input
                  type="text"
                  placeholder="phone"
                  name="phone"
                  className="form-control"
                ></input>
              </div>

              <div className="col-md-6  form-group">
                <input
                  type="text"
                  placeholder="subject"
                  name="subject"
                  className="form-control"
                ></input>
              </div>
              <div className="col-md-8  form-group">
                <textarea
                  type="text"
                  placeholder="message"
                  name="message"

                  className="form-control"
                ></textarea>
              </div>

              <div className="col-md-12  form-group">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-warning"
                ></input>
              </div>
            </div>
          </div>

          <div className="col-md-1 "> </div>
          <div className="col-md-3 address">
            <p>D/no: 1-111/d-3/142 <br></br>
              Opp. DLF building <br></br>
              Indira Nagar<br></br>
              Gachibowli <br></br>
              Hyderabad <br></br>
              500032<br></br>
              <Icon name='phone' />6438478463<br></br>
              <Icon name='mail' />bookservice@gmail.com<br></br>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.272193212045!2d78.3548149748844!3d17.44668148345064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9312810643c7%3A0xaaf0810804b3055a!2sDlf%20building!5e0!3m2!1sen!2sin!4v1690021336304!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

    </div>
  )
}

export default ContactUs