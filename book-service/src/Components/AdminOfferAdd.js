import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminOfferAdd = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [offername, setName] = useState("");
  const [offertext, setText] = useState("");
  const [offercode, setCode] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/Offers", {
        id,
        offername,
        offertext,
        offercode,
      })
      .then((res) => {
        setId("");
        setName("");
        setText("");
        setCode("");
        navigate("/adminDashBoard/adminOfferView");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row tobookservice-form">
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="id"
            placeholder="Offerid"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Offername"
            value={offername}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            type="text"
            name="Text"
            placeholder="OfferText"
            value={offertext}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            name="code"
            placeholder="OfferCode"
            value={offercode}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </div>
        <div>
          <input type="submit" value="Add Offer" className="submit" />
        </div>
      </form>
    </div>
  );
};

export default AdminOfferAdd;
