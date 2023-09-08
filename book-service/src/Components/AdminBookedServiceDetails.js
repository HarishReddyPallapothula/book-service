import react, { useState, useEffect } from "react";
import axios from "axios";

const AdminBookedServiceDetails = () => {
  const [data, getData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/BookedService")
      .then((res) => {
        getData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table width="100%" id="myTable">
            <thead>
              <tr>
                <th>Email Id</th>
                <th>Customer Name</th>
                <th>Phone</th>
                <th>Booked Service</th>
                <th>Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((service) => {
                return (
                  <tr key={service.id}>
                    <td>{service.id}</td>
                    <td>{service.customername}</td>
                    <td>{service.phone}</td>
                    <td>{service.bookedservicename}</td>
                    <td>{service.message}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBookedServiceDetails;
