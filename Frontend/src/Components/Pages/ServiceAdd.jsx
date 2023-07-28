import React, { useEffect } from "react";
import { TextField, Button, ThemeProvider, createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ServiceSchema } from "../../Schemas/ServiceSchema";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/ServiceAdd.css";
import UserService from "../../Services/UserService";
import ProviderService from "../../Services/ProviderService";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#011936",
    },
    secondary: {
      main: "#2B2D42",
    },
  },
});

const ServiceAdd = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { user } = useSelector((state) => state.master);
  const { accessToken } = useSelector((state) => state.master);

  const initialState = {
    category: "",
    serviceProviding: "",
    experience: "",
    workingHour: "",
    price: "",
  };

  const navigate = useNavigate();

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: ServiceSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventUpdateProvider();
        action.resetForm();
      },
    });

  const eventUpdateProvider = async () => {
    const response = await ProviderService.updateProviderByEmail(
      accessToken,
      user,
      values
    );
    console.log(response);

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Yayy you have added the service!!",
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ThemeProvider theme={theme}>
        <div className="service-root">
          <div style={{ paddingTop: "40px" }}>
            <div className="choose-container4">
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  padding: "30px",
                }}
                onSubmit={handleSubmit}
              >
                <h1
                  style={{
                    textAlign: "center",
                    marginTop: 0,
                    marginLeft: 0,
                    margin: 0,
                    color: "black",
                  }}
                >
                  Add Service
                </h1>
                <TextField
                  id="standard-number"
                  label="Category"
                  name="category"
                  variant="standard"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                />
                {errors.category && touched.category ? (
                  <p style={{ color: "red" }}>{errors.category}</p>
                ) : null}
                <TextField
                  id="standard-basic"
                  label="Service Providing"
                  name="serviceProviding"
                  type="text"
                  variant="standard"
                  value={values.serviceProviding}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  style={{ marginTop: "20px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {errors.serviceProviding && touched.serviceProviding ? (
                  <p style={{ color: "red" }}>{errors.serviceProviding}</p>
                ) : null}
                <TextField
                  id="standard-number"
                  label="Experience"
                  name="experience"
                  variant="standard"
                  value={values.experience}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                  style={{ marginTop: "15px" }}
                />
                {errors.experience && touched.experience ? (
                  <p style={{ color: "red" }}>{errors.experience}</p>
                ) : null}
                <TextField
                  id="standard-basic"
                  label="Working Hours"
                  name="workingHour"
                  type="text"
                  variant="standard"
                  value={values.workingHour}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  style={{ marginTop: "20px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {errors.workingHour && touched.workingHour ? (
                  <p style={{ color: "red" }}>{errors.workingHour}</p>
                ) : null}
                <TextField
                  id="standard-basic"
                  label="Price"
                  name="price"
                  type="text"
                  variant="standard"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  style={{ marginTop: "20px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {errors.price && touched.price ? (
                  <p style={{ color: "red" }}>{errors.price}</p>
                ) : null}
                <Button
                  style={{
                    display: "block",
                    margin: "0 auto",
                    marginTop: "20px",
                    width: "50%",
                    marginBottom: "10px",
                  }}
                  variant="contained"
                  type="submit"
                  color="secondary"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </motion.div>
  );
};

export default ServiceAdd;
