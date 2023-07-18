import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../../Styles/ServiceDetails.css";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [isClick, setClick] = useState(false);

  const navigate = useNavigate();

  const providers = [
    {
      name: "shree",
      mobileNumber: "636977284",
      location: "coimbatore",
      serviceType: "Dentist",
      img: "/images/Services/dentist.jpg",
      experience: "7",
      rating: "4.5",
      reviews: "A good hearted person",
    },
    {
      name: "asterick",
      mobileNumber: "8997884",
      location: "coimbatore",
      serviceType: "CarWasher",
      img: "/images/Services/car-wash.jpg",
      experience: "2",
      rating: "4.2",
      reviews: "A kind hearted person",
    },
    {
      name: "Pedro",
      mobileNumber: "8997884",
      location: "coimbatore",
      serviceType: "Electrician",
      img: "/images/Services/carpenter.jpg",
      experience: "2",
      rating: "4.2",
      reviews: "A kind hearted person",
    },
  ];

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
        }}
      >
        <h1 style={{ margin: "0px", marginTop: "20px", paddingBottom: "20px" }}>
          Providers Near you
        </h1>
        <div style={{ display: "block", margin: "0 auto" }}>
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
                    sx={{ display: "flex" }}
                    style={{
                      marginBottom: "70px",
                      width: "100%",
                    }}
                    onClick={() => navigate("/provider-info")}
                    className="provider-card"
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
                        <Typography component="div" variant="h5">
                          {ele.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          {ele.serviceType}
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
                      image={ele.img}
                      alt={ele.serviceType}
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
