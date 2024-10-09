import React from "react";
import "./Web.css";
const Webpage = () => {
  return (
    <div className="trans-page">
      <h1>Subscription Page</h1>
      <div className="trans-category">
        {/* <img src={require('./img1.jpg')} alt="user" className="user-image"/> */}
        <div className="single-user">
          <h2>Ansh Pateriya</h2>
          <h3>Rate: $149</h3>
          <p>
            500 GB Storage
            <div>1 Granted User</div>
            <div>Send up to 2 GB</div>
          </p>
          <button>Start Now</button>
        </div>
        <div className="double-user">
          <h2>Ansh Pateriya</h2>
          <h3>Rate: $149</h3>
          <p>
            500 GB Storage
            <div>1 Granted User</div>
            <div>Send up to 2 GB</div>
          </p>
          <button>Start Now</button>
        </div>
        <div className="three-user">
          <h2>Ansh Pateriya</h2>
          <h3>Rate: $149</h3>
          <p>
            500 GB Storage
            <div>1 Granted User</div>
            <div>Send up to 2 GB</div>
          </p>
          <button>Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Webpage;
