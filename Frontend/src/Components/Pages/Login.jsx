import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInSchema } from "../../Schemas/index2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { addToken, addUser, addColor, addRole } from "../../Store/Masterslice";
import Swal from "sweetalert2";
import AOS from "aos";
import UserService from "../../Services/UserService";
import "aos/dist/aos.css";
import randomColor from "randomcolor";
import "../../Styles/Choose.css";

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

const Login = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [hide, setHide] = useState(true);

  const toggle = () => {
    setHide(!hide);
  };

  const color = randomColor();

  const initialState = {
    email: "",
    password: "",
  };

  // const [user, setUser] = useState(initialState);

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: signInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventLogin();
        action.resetForm();
      },
    });

  const eventLogin = async () => {
    try {
      const response = await UserService.loginUserWithEmailAndPassword(values);

      console.log(response.message);

      var token = response.data.accessToken;
      var user_email = response.data.email;
      console.log(response.data);

      let timerInterval;
      Swal.fire({
        title: "Successfully LoggedIn !",
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
        dispatch(addUser(user_email));
        dispatch(addColor(color));
        dispatch(addToken(token));

        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bad Credentials !",
      });
    }
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
            className="form1"
            data-aos="zoom-out-down"
            data-aos-duration="1500"
            style={{padding:"20px"}}
          >
            <h1 style={{ textAlign: "center", marginTop: 0 }}>Login</h1>
            <div style={{margin:"40px"}}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
                className="sample"
                onSubmit={handleSubmit}
              >
                <TextField
                  id="standard-basic"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
                {errors.email && touched.email ? (
                  <p style={{ color: "red" }}>{errors.email}</p>
                ) : null}
                <TextField
                  id="standard-basic"
                  label="Password"
                  name="password"
                  type={hide ? "password" : "text"}
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
                <span>
                  <a href="#" style={{ textDecoration: "none", color: "blue" }}>
                    Forget Password?
                  </a>
                </span>
                <Button
                  variant="contained"
                  style={{ marginTop: "25px" }}
                  type="submit"
                >
                  Log in
                </Button>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <p style={{ marginTop: "20px", color: "white" }}>
                    Don't have an account ?
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      Sign Up.
                    </a>
                  </p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </motion.div>
  );
};

export default Login;
