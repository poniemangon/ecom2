import { useFormik } from "formik";
import Login from "./Login";
import * as Yup from "yup";
import { useState } from "react";
import { login, loginWithGoogle } from "../../../firebaseConfig";
import { loginRedux } from "../../../store/authSlice";
import { useDispatch } from "react-redux";



const LoginContainer = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data) => {
      console.log(data)
      const res = await login(data);
      console.log(res.user)
      dispatch(loginRedux(res.user));
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string("Deben ser caracteres").email("No corresponde con un email valido").required("El campo email es obligatorio"),
      password: Yup.string("Deben ser caracteres").required("El campo password es obligatorio"),
    }),
  });

  const ingresarConGoogle = async () => {
    let res = await loginWithGoogle();
    dispatch(loginRedux(res.user));
  }

  const [showPassword, setShowPassword] = useState(false)
  const handleShow = () =>{
    setShowPassword(!showPassword)


  }
  return (
    <Login
      showPassword={showPassword}
      handleShow={handleShow}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
      google={ingresarConGoogle}
    />

    
  );
};

export default LoginContainer;
