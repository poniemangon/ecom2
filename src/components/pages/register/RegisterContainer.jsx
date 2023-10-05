import { useFormik } from "formik";

import * as Yup from "yup";
import { useState } from "react";
import { register } from "../../../firebaseConfig";
import Register from "./Register";


const RegisterContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data) => {
      await register(data)
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
    <Register
      showPassword={showPassword}
      handleShow={handleShow}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default RegisterContainer;
