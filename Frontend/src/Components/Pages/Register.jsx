import { useEffect, useState } from "react";
import { Button, Checkbox, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { signUpSchema } from "../../Schemas/index";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/Choose.css";
import UserService from "../../Services/UserService";

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

const Register = () => {

  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }, []);

  const navigate = useNavigate();

  const [role, setRole] = useState("user");

  const onOptionChange = (e) => {
    setRole(e.target.value);
  };

  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    charRole: "",
    dob: "",
    address: "",
    phoneNumber: "",
    gender: "",
    location: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values, " ", role);
        eventRegister();
        action.resetForm();
      },
    });

    const eventRegister = async () => {
      values.charRole = role;
      try {
        const response = await UserService.saveUser(values);
        console.log(response.data);

        if(response.data === "Email Already Exists !!"){
          throw "err";
        }
        else{
          let timerInterval;
          Swal.fire({
            title: "Registered Successfully !!",
            html: "Redirecting in <b></b> milliseconds.",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
          setTimeout(() => {
            console.log(values);
            navigate("/login");
          }, 3000);
        }
      
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email Already Exists",
        });
        console.log(error.message);
      }
      console.log(values);
    };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ThemeProvider theme={theme}>
        <div className="choose-container">
          <div
            className="form"
            data-aos="zoom-out-down"
            data-aos-duration="1500"
          >
            <h1 style={{ textAlign: "center", marginTop: 0 }}>Register</h1>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                paddingLeft: "90px",
                paddingRight: "90px",
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                id="standard-number"
                label="First Name"
                name="firstName"
                variant="standard"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
              />
              {errors.firstName && touched.firstName ? (
                <p style={{ color: "red" }}>{errors.firstName}</p>
              ) : null}
              <TextField
                id="standard-basic"
                label="Last Name"
                name="lastName"
                type="text"
                variant="standard"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.lastName && touched.lastName ? (
                <p style={{ color: "red" }}>{errors.lastName}</p>
              ) : null}
              <TextField
                id="standard-basic"
                label="Username"
                name="username"
                type="text"
                variant="standard"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.username && touched.username ? (
                <p style={{ color: "red" }}>{errors.username}</p>
              ) : null}
              <TextField
                id="standard-basic"
                label="Email"
                name="email"
                type="text"
                variant="standard"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.email && touched.email ? (
                <p style={{ color: "red" }}>{errors.email}</p>
              ) : null}
              <TextField
                id="standard-basic"
                label="Password"
                name="password"
                type="password"
                variant="standard"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.password && touched.password ? (
                <p style={{ color: "red" }}>{errors.password}</p>
              ) : null}
              <TextField
                id="standard-basic"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                variant="standard"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p style={{ color: "red" }}>{errors.confirmPassword}</p>
              ) : null}
              <p
                style={{
                  fontSize: "17px",
                  marginTop: "20px",
                  fontWeight: "900",
                }}
              >
                Role
              </p>
              <span
                style={{
                  margin: "10px",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <span>
                  <label style={{ marginRight: "10px", fontWeight: "900" }}>
                    User
                  </label>
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    onChange={onOptionChange}
                    checked={role === "user"}
                  />
                </span>
                <span>
                  <label style={{ marginRight: "10px", fontWeight: "900" }}>
                    Business
                  </label>
                  <input
                    type="radio"
                    name="role"
                    value="business"
                    onChange={onOptionChange}
                    checked={role === "business"}
                  />
                </span>
                <span>
                  <label style={{ marginRight: "10px", fontWeight: "900" }}>
                    Service Provider
                  </label>
                  <input
                    type="radio"
                    name="role"
                    value="provider"
                    onChange={onOptionChange}
                    checked={role === "provider"}
                  />
                </span>
              </span>
              <TextField
                id="standard-basic"
                label="Date of Birth"
                name="dob"
                type="date"
                variant="standard"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.dob && touched.dob ? (
                <p style={{ color: "red" }}>{errors.dob}</p>
              ) : null}
              <TextField
                id="standard-basic"
                label="Gender"
                name="gender"
                type="text"
                variant="standard"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.gender && touched.gender ? (
                <p style={{ color: "red" }}>{errors.gender}</p>
              ) : null}
              <TextField
                id="standard-basic"
                label="Phone Number"
                name="phoneNumber"
                type="text"
                variant="standard"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <p style={{ color: "red" }}>{errors.phoneNumber}</p>
              ) : null}
              <TextField
                id="standard-basic"
                label="Address"
                name="address"
                type="text"
                variant="standard"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.address && touched.address ? (
                <p style={{ color: "red" }}>{errors.address}</p>
              ) : null}
              <TextField
                id="standard-basic"
                label="Location"
                name="location"
                type="text"
                variant="standard"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.location && touched.location ? (
                <p style={{ color: "red" }}>{errors.location}</p>
              ) : null}
              <span style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <Checkbox />
                <Typography sx={{ fontSize: "12px" }}>
                  {" "}
                  By agreeing to the Terms of Service and Privacy Policy
                </Typography>
              </span>
              <Button
                style={{
                  marginTop: "10px",
                  width: "100%",
                  marginBottom: "10px",
                }}
                variant="contained"
                type="submit"
                color="secondary"
              >
                Submit
              </Button>
              <h5>
                Already have an account ?{" "}
                <span>
                  <a
                    onClick={() => navigate("/login")}
                    style={{ cursor: "pointer", color: "white" }}
                  >
                    Sign In
                  </a>
                </span>{" "}
              </h5>
            </form>
          </div>
        </div>
      </ThemeProvider>
    </motion.div>
  );
};

export default Register;
