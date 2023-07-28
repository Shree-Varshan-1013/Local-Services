import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Profile from "./Components/Pages/Profile";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Pages/Footer";
import Choose from "./Components/Pages/Choose";
import Service from "./Components/Pages/Services";
import Mastercards from "./Components/Pages/Mastercards";
import ServiceDetails from "./Components/Pages/ServiceDetails";
import CustomerSupport from "./Components/Pages/CustomerSupport";
import ProviderInfo from "./Components/Pages/ProviderInfo";
import Steps from "./Components/Pages/Steps";
import Feedback from "./Components/Pages/Feedback";  
import Payment from "./Components/Pages/Payment";
import BookedServices from "./Components/Pages/BookedServices";
import ServiceAdd from "./Components/Pages/ServiceAdd";
import Logout from "./Components/Pages/Logout";
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  console.log(location);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Choose />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Mastercards />} />
          <Route path="/services" element={<Service />} />
          <Route path="/service-detail/:category" element={<ServiceDetails />} />
          <Route path="/add-service" element={<ServiceAdd />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/provider-info" element={<ProviderInfo />} />
          <Route path="/confirm-details" element={<Steps />} />
          <Route path="/booked-services" element={<BookedServices />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
