import { useFormik } from "formik";
import Login from "./Login";
import * as Yup from "yup";
import { useState } from "react";


const LoginContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log("anashei", data);
      // firebase
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string("Deben ser caracteres").email("No corresponde con un email valido").required("El campo email es obligatorio"),
      password: Yup.string("Deben ser caracteres").required("El campo password es obligatorio"),
    }),
  });



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
    />
  );
};

export default LoginContainer;
