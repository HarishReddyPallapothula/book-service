import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const Services = () => {
  const [data, getData] = useState([]);

  // useEffect(()=>{

  //     return (
  //         setData(null)
  //     )
  // },[data])

  useEffect(() => {
    axios
      .get("http://localhost:4000/Services")
      .then((res) => {
        console.log(res.data);
        getData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid back-ground">
      <div className="container container-pad">
        <div>
          <h3>Discover Our Premier Services for Every Aspect of Your Life!!</h3>
        </div>
        <div className="row ">
          {data.map((service) => {
            return (
              <div
                className="col-md-3 card-deck d-flex align-items-stretch"
                key={service.id}
              >
                <div
                  className="card  p-3 card-round "
                  style={{ borderRadius: "20px", backgroundColor: "white" }}
                >
                  <img
                    className="card-img-top"
                    src={service.servicelink}
                    width="300px"
                    height="200px"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> {service.servicename}</h5>
                    <p className="card-text">{service.servicetag}</p>
                    <NavLink to={`/services/${service.id}`}>
                      <button className="btn btn-danger">
                        <Icon name="find"></Icon>Know more!
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
