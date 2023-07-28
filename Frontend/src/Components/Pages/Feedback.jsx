import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { feedbackSchema } from "../../Schemas/feedbackSchema";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserService from "../../Services/UserService";
import "../../Styles/Feedback.css";
import { useEffect } from "react";

const Feedback = () => {

  useEffect(() => {
    window.scrollTo({
      top:"0",
      behavior:"smooth"
    });
  }, []);

  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.master);

  const eventSubmit = async () => {
    try {
      console.log(values);
      const response = await UserService.addFeedback(accessToken, values);
      console.log(response);

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Yay !! Feedback submitted",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const initialState = {
    name: "",
    email: "",
    comment: "",
  };

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: initialState,
      validationSchema: feedbackSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventSubmit();
        action.resetForm();
      },
    });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration:1}}
    >
      <div id="feedback-container">
        <div className="feedback-root">
          <h1 style={{ fontSize: "60px", margin: "0", paddingTop: "20px", color:"white" }}>
            Feedback
          </h1>
          <div className="feedback-inner">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label style={{ color: "white" }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    id="exampleInputName1"
                    placeholder="Enter name"
                    style={{ backgroundColor: "white" }}
                  />
                  {errors.name && touched.name ? (
                    <p style={{ color: "red" }}>{errors.name}</p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label style={{ color: "white" }}>Email address</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                    style={{ backgroundColor: "white" }}
                  />
                  {errors.email && touched.email ? (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label style={{ color: "white" }}>Comment</label>
                  <textarea
                    style={{
                      height: "100px",
                      resize: "none",
                      backgroundColor: "white",
                    }}
                    name="comment"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.comment}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter the comment"
                  />
                  {errors.comment && touched.comment ? (
                    <p style={{ color: "red" }}>{errors.comment}</p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#EF233C", color: "white" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Feedback;
