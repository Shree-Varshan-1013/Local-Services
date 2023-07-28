import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import ProviderService from "../../Services/ProviderService";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProviderEmail } from "../../Store/Masterslice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../../Styles/ServiceDetails.css";

const ServiceDetails = () => {
  useEffect(() => {
    fetchdata();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [isClick, setClick] = useState(false);
  const [providers, setProviders] = useState([]);

  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => state.master);
  const { userDetails } = useSelector((state) => state.master);

  const { category } = useParams();

  const navigate = useNavigate();

  const fetchdata = async () => {
    try {
      const response = await ProviderService.getProviderInfos(
        accessToken,
        category,
        userDetails.location
      );
      console.log(response);
      setProviders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const eventRedirect = (email) => {
    dispatch(addProviderEmail(email));
    navigate("/provider-info");
  };

  return (
    <motion.div
      initial={{ opacity: "0" }}
      animate={{ opacity: "1" }}
      exit={{ opacity: "0" }}
      transition={{ duration: "1" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(/images/providers-back.jpg)`,
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        id="provider-back"
      >
        <div style={{ display: "block", margin: "0 auto" }}>
          <h1
            style={{
              margin: "0",
              marginTop: "30px",
              marginBottom: "20px",
              color: "white",
            }}
          >
            Providers Near you
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {providers.map((ele) => {
              return (
                <>
                  <Card
                    id={ele.id}
                    sx={{ display: "flex" }}
                    style={{
                      marginBottom: "70px",
                      width: "100%",
                    }}
                    className="provider-card"
                    onClick={() => eventRedirect(ele.email)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "350px",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h4">
                          {ele.firstName}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.primary"
                          component="div"
                        >
                          {ele.serviceProviding}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          ₹{ele.price}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      >
                        <IconButton aria-label="favourite">
                          {isClick ? (
                            <FavoriteBorderIcon
                              onClick={() => setClick(!isClick)}
                            />
                          ) : (
                            <FavoriteIcon onClick={() => setClick(!isClick)} />
                          )}
                        </IconButton>
                        <IconButton aria-label="view">
                          <VisibilityIcon
                            fontSize=" "
                            sx={{ height: 38, width: 38 }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{
                        width: 300,
                        height: 200,
                        backgroundSize: "cover",
                      }}
                      image="/images/support.png"
                      alt={ele.serviceProviding}
                    />
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetails;
