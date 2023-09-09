import React, { useEffect, useState } from "react";
import axios from "axios";

const Offers = () => {
  const [data, getData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/Offers")
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
        <h3>Exclusive Offers Tailored Just for You, why wait!!</h3>
        <div className="row offer">
          {data.map((offer) => {
            return (
              <div
                className="col-md-3 card-deck d-flex align-items-stretch"
                key={offer.id}
              >
                <div className="card  p-3  offer-card rounded ">
                  <div className="card-body">
                    <h5 className="card-title"> {offer.offername}</h5>
                    <h6 className="card-text">
                      Offer Code :
                      <span id="offer-code">
                        <strong> {offer.offercode}</strong>
                      </span>
                    </h6>
                    <p>{offer.offertext}</p>
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

export default Offers;
