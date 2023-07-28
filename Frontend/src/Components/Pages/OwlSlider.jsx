import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/Owl.css";

const OwlSlider = () => {
  const navigate = useNavigate();

  useEffect(() => {

    AOS.refresh();
  }, []);

  return (
    <div style={{ width: "100%", height: "40%" }}>
      <h1 style={{ marginTop: "15px", marginBottom: "9px" }}>
        Category of Services we Offer
      </h1>
      <div style={{display:"flex", justifyContent:"center"}}>
        <OwlCarousel
          items={3}
          margin={8}
          autoplay={true}
          loop
          style={{ width: "80%" }}
          // data-aos="fade-up"
          // data-aos-anchor-placement="bottom-bottom"
        >
          <div>
            <img
              className="img"
              src={"/images/Services/Category/home-service.jpg"}
              onClick={() => navigate(`/service-detail/home`)}
              />
              <h1 style={{ marginTop: "5px"}}>Home</h1>
              </div>
              <div>
              <img
              className="img"
              src={"/images/Services/Category/professional-service.jpg"}
              onClick={() => navigate(`/service-detail/professional`)}
              />
              <h1 style={{ marginTop: "5px" }}>Professional</h1>
              </div>
          <div>
            <img
              className="img"
              src={"/images/Services/Category/health-services.jpg"}
              onClick={() => navigate(`/service-detail/health`)}
              />
              <h1 style={{ marginTop: "5px" }}>Health & Fitness</h1>
              </div>
              <div>
              <img
              className="img"
              src={"/images/Services/Category/beauty-services.jpg"}
              onClick={() => navigate(`/service-detail/beauty`)}
              />
              <h1 style={{ marginTop: "5px" }}>Beauty</h1>
              </div>
              <div>
              <img
              className="img"
              src={"/images/Services/Category/automobile-services.jpg"}
              onClick={() => navigate(`/service-detail/automobile`)}
              />
              <h1 style={{ marginTop: "5px" }}>Automobile</h1>
              </div>
              <div>
              <img
              className="img"
              src={"/images/Services/Category/event-services.jpg"}
              onClick={() => navigate(`/service-detail/Event`)}
            />
            <h1 style={{ marginTop: "5px" }}>Event & Party</h1>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default OwlSlider;
