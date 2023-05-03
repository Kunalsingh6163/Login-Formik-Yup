import React from "react";
import { Box, Button,TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { signUpSigma } from "../schemas";
import img1 from '../images/workplace.png';
import LoginIcon from '@mui/icons-material/Login';
import {Link } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  RePassword: "",
};

const Registration = () => {
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSigma,
      onSubmit: (values) => {
        console.log(
          "🚀 ~ file: Registration.js:14 ~ Registration ~ values:",
          values
        );
        return {};
      },
    });

  return (
    <div>
      <div style={{ justifyContent: "left", height:'830px', marginLeft:'20px', display: "flex" }}>
        <form onSubmit={handleSubmit}>
          <div
            style={{
                minHeight: "900",
                minWidth: "650px",
                justifyContent: "left",
                marginTop: "50px",
                textAlign:'center'
            }}
          >
              <Typography variant="h5" fontWeight='700' sx={{ marginTop: "25px", textAlign:'center' }}>
                Welcome in Registration Page!
              </Typography>
              <Box sx={{ marginTop: "25px", }}>
                <TextField
                  label="First Name *"
                  name="firstName"
                  type="text"
                  value={values.firstName}
                  autoComplete="off"
                  placeholder="Enter your First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ maxheight: "9px", width: "300px" }}
                />
              </Box>
              <Box>
                {errors.firstName && touched.firstName ? (
                  <Typography variant="caption" color="error" sx={{marginLeft:'10px',}}>
                    {errors.firstName}
                  </Typography>
                ) : null}
              </Box>
              <Box sx={{ marginTop: "15px"}}>
                <TextField
                  label="Last Name *"
                  name="lastName"
                  type="text"
                  value={values.lastName}
                  autoComplete="off"
                  placeholder="Enter your Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ maxheight: "9px", width: "300px" }}
                />
              </Box>
              <Box>
              {errors.lastName && touched.lastName ? (
                <Typography variant="caption" color="error" sx={{marginLeft:'10px'}}>{errors.lastName}</Typography>) : null}
              </Box>
              <Box sx={{ marginTop: "15px",}}>
                <TextField
                  label="Email id *"
                  name="email"
                  type="email"
                  autoComplete="off"
                  value={values.email}
                  placeholder="Enter your Email id"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ maxheight: "9px", width: "300px" }}
                />
              </Box>
              <Box>
              {errors.email && touched.email ? (
                <Typography variant="caption" color="error" sx={{marginLeft:'10px'}}>{errors.email}</Typography>): null}
              </Box>
              <Box sx={{ marginTop: "15px"}}>
                <TextField
                  label="Password *"
                  name="password"
                  type="password"
                  autoComplete="off"
                  value={values.password}
                  placeholder="Enter your Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ maxheight: "9px", width: "300px" }}
                />
              </Box>
              <Box>
              {errors.password && touched.password ? (
                <Typography variant="caption" color="error" sx={{marginLeft:'10px'}}>{errors.password}</Typography>): null }
              </Box>
              <Box sx={{ marginTop: "15px" }}>
                <TextField
                  label="Re-Password *"
                  name="RePassword"
                  type="password"
                  autoComplete="off"
                  value={values.RePassword}
                  placeholder="Enter your Re-Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ maxheight: "9px", width: "300px" }}
                />
              </Box>
              <Box>
              {errors.RePassword && touched.RePassword ? (
                <Typography variant="caption" color="error" sx={{marginLeft:'10px'}}>{errors.RePassword}</Typography>): null}
              </Box>
              <Box sx={{ marginTop: "15px", justifyContent:'center' }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ height: "30px", width: "auto", marginBottom:'20px' }}
                >
                  Submit
                </Button>
                <Link to='/login' sx={{marginLeft:'30px'}}> <LoginIcon />Login here!</Link>
              </Box>
          </div>
        </form>
        <div style={{marginTop:'0px', marginLeft:'100px'}}>
          <img src={img1} alt="/" width="915" height="830" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
