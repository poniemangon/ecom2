import { useFormik } from "formik";
import Login from "./Login";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, loginGoogle } from "../../../store/authThunk";
import { Button } from "@mui/material"




const LoginContainer = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data) => {
      dispatch(login(data));
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string("Deben ser caracteres").email("No corresponde con un email valido").required("El campo email es obligatorio"),
      password: Yup.string("Deben ser caracteres").required("El campo password es obligatorio"),
    }),
  });

  // const ingresarConGoogle = async () => {
  //   let res = await loginWithGoogle();
  //   dispatch(loginRedux(res.user));
  // }

  const [showPassword, setShowPassword] = useState(false)
  const handleShow = () =>{
    setShowPassword(!showPassword)


  }
  return (
    <>
    <Login
      showPassword={showPassword}
      handleShow={handleShow}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
      
    />

    
    <Button onClick={()=> dispatch(loginGoogle())}>Google</Button>
    </>
  );
};

export default LoginContainer;
