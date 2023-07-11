import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../Styles/Owl.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OwlSlider = () => {
  useEffect(() => {
    AOS.init({duration: 1200});
    AOS.refresh();
  }, []);

  return (
    <div>
      <h1>Category of Services we Offer</h1>
      <OwlCarousel items={3} margin={8} autoplay={true} loop data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <div>
          <img
            className="img"
            src={"/images/Services/Category/home-service.jpg"}
          />
          <h1 style={{marginTop:"5px"}}>Home</h1>
        </div>
        <div>
          <img
            className="img"
            src={"/images/Services/Category/professional-service.jpg"}
          />
          <h1 style={{marginTop:"5px"}}>Professional</h1>
        </div>
        <div>
          <img
            className="img"
            src={"/images/Services/Category/health-services.jpg"}
          />
          <h1 style={{marginTop:"5px"}}>Health & Fitness</h1>
        </div>
        <div>
          <img
            className="img"
            src={"/images/Services/Category/beauty-services.jpg"}
          />
          <h1 style={{marginTop:"5px"}}>Beauty</h1>
        </div>
        <div>
          <img
            className="img"
            src={"/images/Services/Category/automobile-services.jpg"}
          />
          <h1 style={{marginTop:"5px"}}>Automobile</h1>
        </div>
        <div>
          <img
            className="img"
            src={"/images/Services/Category/event-services.jpg"}
          />
          <h1 style={{marginTop:"5px"}}>Event & Party</h1>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default OwlSlider;
