import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  Input,
  ContainerForm,
  Error,
  ContainerInput,
  Button,
  Subtitle,
} from "./styles";

const Register = () => {
  const [visible, setVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      id: "",
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo es obligatorio"),
      id: Yup.number()
        .required("Este campo es obligatorio")
        .typeError("Solo acepta numeros")
        .min(15000000, "Debe ser mayor a 15 millones ")
        .max(60000000, "Debe ser menor a 60 millones"),
      phone: Yup.number().typeError("Solo acepta numeros"),
      email: Yup.string().required("Este correo electronico es invalido"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .min(8, "Debe tener al menos 8 caracteres"),
      repeatPassword: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert(JSON.stringify(values));
        console.log(JSON.stringify(values));
        resetForm();
        setSubmitting(false);
      }, 500);
    },
  });

  return (
    <Container>
      <ContainerForm onSubmit={formik.handleSubmit}>
        <Subtitle>Formulario de registro</Subtitle>
        <ContainerInput>
          <Input
            error={formik.errors.name}
            placeholder="Nombre completo"
            name="name"
            onChange={formik.handleChange}
            //   onBlur={handleBlur("name")}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <Error>{formik.errors.name}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Numero de documento"
            name="id"
            onChange={formik.handleChange}
            //   onBlur={handleBlur("id")}
            value={formik.values.id}
          />
          {formik.touched.id && formik.errors.id && (
            <Error>{formik.errors.id}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Numero de telefono"
            name="phone"
            onChange={formik.handleChange}
            //   onBlur={handleBlur("phone")}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <Error>{formik.errors.phone}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Correo electronico"
            name="email"
            onChange={formik.handleChange}
            //   onBlur={handleBlur("email")}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <Error>{formik.errors.email}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Crea tu contraseña"
            name="password"
            onChange={formik.handleChange}
            //   onBlur={handleBlur("password")}
            value={formik.values.password}
            type={visible ? "text" : "password"}
          />
          {formik.touched.password && formik.errors.password && (
            <Error>{formik.errors.password}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Repeti la contraseña"
            name="repeatPassword"
            onChange={formik.handleChange}
            //   onBlur={handleBlur("password")}
            value={formik.values.repeatPassword}
            type={visible ? "text" : "password"}
          />
          {formik.touched.repeatPassword && formik.errors.repeatPassword && (
            <Error>{formik.errors.repeatPassword}</Error>
          )}
        </ContainerInput>
        <Button type="button" onClick={() => setVisible(!visible)}>
          {visible ? "Ocultar contraseña" : "Mostrar contraseña"} Mostrar
          contraseña
        </Button>
        <Button type="submit">Registrarme</Button>
      </ContainerForm>
    </Container>
  );
};

export default Register;
