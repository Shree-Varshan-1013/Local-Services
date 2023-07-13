import React, { useState } from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import "../../Styles/ServiceDetails.css";

const ServiceDetails = () => {

const [isClick, setClick] = useState(false);

  const providers = [
    {
      name: "shree",
      mobileNumber: "636977284",
      location: "coimbatore",
      serviceType: "Plumbing",
      img: "/images/profile.jpg",
      experience: "7",
      rating: "4.5",
      reviews: "A good hearted person",
    },
    {
      name: "asterick",
      mobileNumber: "8997884",
      location: "coimbatore",
      serviceType: "Electrician",
      img: "/images/profile.jpg",
      experience: "2",
      rating: "4.2",
      reviews: "A kind hearted person",
    },
    {
      name: "asterick",
      mobileNumber: "8997884",
      location: "coimbatore",
      serviceType: "Electrician",
      img: "/images/profile.jpg",
      experience: "2",
      rating: "4.2",
      reviews: "A kind hearted person",
    },
    {
      name: "asterick",
      mobileNumber: "8997884",
      location: "coimbatore",
      serviceType: "Electrician",
      img: "/images/profile.jpg",
      experience: "2",
      rating: "4.2",
      reviews: "A kind hearted person",
    },
    {
      name: "asterick",
      mobileNumber: "8997884",
      location: "coimbatore",
      serviceType: "Electrician",
      img: "/images/profile.jpg",
      experience: "2",
      rating: "4.2",
      reviews: "A kind hearted person",
    },
    {
      name: "asterick",
      mobileNumber: "8997884",
      location: "coimbatore",
      serviceType: "Electrician",
      img: "/images/profile.jpg",
      experience: "2",
      rating: "4.2",
      reviews: "A kind hearted person",
    },
    {
      name: "asterick",
      mobileNumber: "8997884",
      location: "coimbatore",
      serviceType: "Electrician",
      img: "/images/profile.jpg",
      experience: "2",
      rating: "4.2",
      reviews: "A kind hearted person",
    },
    {
      name: "asterick",
      mobileNumber: "8997884",
      location: "coimbatore",
      serviceType: "Electrician",
      img: "/images/profile.jpg",
      experience: "2",
      rating: "4.2",
      reviews: "A kind hearted person",
    },
  ];

  return (
    <div style={{}}>
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
                      // boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"
                    }}
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
                          {
                            isClick ? <FavoriteBorderIcon onClick={() => setClick(!isClick)} /> : <FavoriteIcon onClick={() => setClick(!isClick)}  />
                          }
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
                      sx={{ width: 300 }}
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
    </div>
  );
};

export default ServiceDetails;
