import React, { useEffect } from "react";
import "../../Styles/Service.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div className="service-container">
      <h1>Booking a Local Service Made Easy !!</h1>
      <div className="service" data-aos="zoom-in-up" data-aos-duration="3000">
        <div className="service-img">
          <img src="/images/search.png" width="80%" />
        </div>
        <div className="service-content">
          <h2 className="service-sub">Search</h2>
          <p>Find your service based on your needs</p>
        </div>
      </div>
      <div className="service2" data-aos="zoom-in-down" data-aos-duration="3000">
        <div className="service-content2">
          <h2 className="service-sub">Flexibility</h2>
          <p>You can schedule your bookings based on the time you are free</p>
        </div>
        <div className="service-img2" style={{textAlign:"-webkit-right"}}>
          <img src="/images/schedule.png" width="80%" />
        </div>
      </div>
      <div className="service" data-aos="zoom-in-up" data-aos-duration="3000">
        <div className="service-img">
          <img src="/images/booking.png" width="80%" />
        </div>
        <div className="service-content">
          <h2 className="service-sub">Booking</h2>
          <p>Book any service you want that is available near your location</p>
        </div>
      </div>
      <div className="service2" data-aos="zoom-in-down" data-aos-duration="3000">
        <div className="service-content2">
          <h2 className="service-sub">Expertise Workers</h2>
          <p>All workers are well Experienced</p>
        </div>
        <div className="service-img2" style={{textAlign:"-webkit-right"}}>
          <img src="/images/workers.png" width="80%" />
        </div>
      </div>
      <div className="service" data-aos="zoom-in-up" data-aos-duration="3000">
        <div className="service-img">
          <img src="/images/providerinfo.png" width="80%" />
        </div>
        <div className="service-content">
          <h2 className="service-sub">Info</h2>
          <p>You will get a detailed information about the particular worker after booking</p>
        </div>
      </div>
      <div className="service2" data-aos="zoom-in-down" data-aos-duration="3000">
        <div className="service-content2">
          <h2 className="service-sub">Communication & Support</h2>
          <p>You can communicate with the worker in online and also offline</p>
        </div>
        <div className="service-img2" style={{textAlign:"-webkit-right"}}>
          <img src="/images/communication.png" width="80%" />
        </div>
      </div>
      <div className="service" data-aos="zoom-in-up" data-aos-duration="3000">
        <div className="service-img">
          <img src="/images/payment.png" width="80%" />
        </div>
        <div className="service-content">
          <h2 className="service-sub">Payment</h2>
          <p>After the service is over you can pay</p>
        </div>
      </div>
      <div className="service2" data-aos="zoom-in-down" data-aos-duration="3000">
        <div className="service-content2">
          <h2 className="service-sub">Rating & Review</h2>
          <p>You can thank the workers by giving rating and review to the particular worker</p>
        </div>
        <div className="service-img2" style={{textAlign:"-webkit-right"}}>
          <img src="/images/ratings.png" width="80%" />
        </div>
      </div>
    </div>
  );
};

export default Services;
