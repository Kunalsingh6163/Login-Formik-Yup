import * as Yup from 'yup';

export const signUpSigma = Yup.object({
    firstName: Yup.string().min(3).max(30).required("Please Enter Your First Name"),
    lastName: Yup.string().min(3).max(30).required("Please Enter Your Last Name"),
    email: Yup.string().email().required("Please Enter Your Email Id"),
    password: Yup.string().min(6).required("Please Enter Your Password"),
    RePassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match")
})