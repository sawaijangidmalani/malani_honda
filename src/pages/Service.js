import React from "react";
import "../Style/Service.css";
import BuyIcon from "../assets/Services_Icons/buy-button.png";
import ServiceIcon from "../assets/Services_Icons/Service.png";
import AccidentClaim from "../assets/Services_Icons/AccidentClaim.png";
import Insurance from "../assets/Services_Icons/insurance.png";
import BarackDown from "../assets/Services_Icons/tow-truck.png";
import AMC from "../assets/Services_Icons/Amc.png";
import SMS from "../assets/Services_Icons/sms.png";
import Drop from "../assets/Services_Icons/Drop.png";

const Service = () => {
  return (
    <div className="container my-5 text-center">
      <h2 className="text-center mb-4 red-bold-heading">
        SERVICES MALANI HONDA
      </h2>
      <div className="row g-4">
        {/* 1. Buy Two Wheeler */}
        <div className="col-md-3">
          <div>
            <img src={BuyIcon} alt="Buy" className="service-icon mb-2" />
          </div>
          <h5 className="text-danger">Buy Two Wheeler Online</h5>
          <p>Buying a two wheeler is now child's play</p>
          <button className="btn btn-outline-dark">BUY NOW</button>
        </div>

        {/* 2. Service Booking */}
        <div className="col-md-3">
          <div>
            <img src={ServiceIcon} alt="Buy" className="service-icon mb-2" />
          </div>
          <h5 className="text-danger">Vehicle Service Booking</h5>
          <p>
            Book your vehicle for free/paid service between 8 A.M. to 6 P.M.
          </p>
          <button className="btn btn-outline-dark">
            BOOK YOUR VEHICLE SERVICE
          </button>
        </div>

        {/* 3. Accident Insurance */}
        <div className="col-md-3">
          <div>
            <img src={AccidentClaim} alt="Buy" className="service-icon mb-2" />
          </div>
          <h5 className="text-danger">Accident Claim Insurance</h5>
          <p>Legal claim procedure for damaged vehicle insurance.</p>
          <button className="btn btn-outline-dark">CONTACT OUR BRANCH</button>
        </div>

        {/* 4. Insurance Renewal */}
        <div className="col-md-3">
          <div>
            <img src={Insurance} alt="Buy" className="service-icon mb-2" />
          </div>
          <h5 className="text-danger">Insurance Renewal</h5>
          <p>We facilitate Insurance Renewal at our end.</p>
          <button className="btn btn-outline-dark">SEND DETAILS</button>
        </div>

        {/* 5. Accidents & Breakdown */}
        <div className="col-md-3">
          <div>
            <img src={BarackDown} alt="Buy" className="service-icon mb-2" />
          </div>
          <h5 className="text-danger">Accidents & Breakdown</h5>
          <p>
            If your two wheeler gets stucked any where in GUDAMALANI plz. call on
            <br />
            9001739007 & 8000616131 -  through our breakdown service, we
            won’t let you get stucked. *T&C Apply
          </p>
          <button className="btn btn-outline-dark">CONTACT OUR BRANCH</button>
        </div>

        {/* 6. Annual Maintenance Contract */}
        <div className="col-md-3">
          <div>
            <img src={AMC} alt="Amc" className="service-icon mb-2" />
          </div>
          <h5 className="text-danger">Annual Maintenance Contract</h5>
          <p>
            Live a peaceful life. Sign a Annual Maintenance Contract and get the
            regular services done.
          </p>
          <button className="btn btn-outline-dark">ASK OUR EXECUTIVE</button>
        </div>

        {/* 7. SMS Service Reminder */}
        <div className="col-md-3">
          <div>
            <img src={SMS} alt="Sms" className="service-icon mb-2" />
          </div>
          <h5 className="text-danger">SMS Service Reminder</h5>
          <p>
            We will inform you about your vehicle free service through SMS on
            your mobile.
          </p>
          <button className="btn btn-outline-dark">ASK OUR EXECUTIVE</button>
        </div>

        {/* 8. Drop Facility */}
        <div className="col-md-3">
          <div>
            <img src={Drop} alt="Drop" className="service-icon mb-2" />
          </div>
          <h5 className="text-danger">Drop Facility</h5>
          <p>
            When you come to our service station for the servicing of your two
            wheelers, we provide the facility of dropping you upto 5 KM from our
            service station.
          </p>
          <button className="btn btn-outline-dark">
            ASK AT TIME OF BOOKING
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
