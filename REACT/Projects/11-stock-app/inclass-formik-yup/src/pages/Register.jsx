import LockIcon from "@mui/icons-material/Lock";
import { Box, Button, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import image from "../assets/regi.avif";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import useAuthCall from "../hooks/useAuthCall";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

//! Yup ile istediğimiz alanlara istediğimiz validasyon koşullarını
//  oluşturuyoruz. Sonra oluşturduğumuz bu şemayı formike tanımlayarak
//  kullanıyoruz. Böylelikle formik hem formumuzu yönetiyor hem de verdiğimiz
//  validationSchema yı uyguluyor. Dikkat edilmesi gereken husus; formikte
//  tanımladığımız initialValues daki keylerle, Yupta tanımladığımız keylerin
//  aynı olması. Eğer bir harf bile farklı olsa o alanla ilgili yazdığınız
//  validation çalışmaz.
const SignupSchema = Yup.object().shape({
  username: Yup.string().min(3).max(15).required("Required!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Er muss mindestens 8 Zeichen lang sein!")
    .max(50, "Er darf maximal 50 Zeichen lang sein!")
    .matches(/\d+/, "Muss mindestens eine Ziffer enthalten!")
    .matches(/[a-z]/, "Muss mindestens einen Kleinbuchstaben enthalten!")
    .matches(/[A-Z]/, "Muss mindestens einen Großbuchstaben enthalten!")
    .matches(
      /[@$?!%&*]+/,
      "Muss mindestens ein Sonderzeichen (@$!%*?&) enthalten!"
    )
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Register = () => {
  const { register } = useAuthCall();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              firstName: "",
              lastName: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
              register(values);
              navigate("/login");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    position: "relative",
                  }}
                >
                  <TextField
                    id="username"
                    name="username" //formik name attributedından eşleştirme yapıyor.
                    label="Username"
                    inputProps={{ "auto-complete": "off" }}
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yaklayan event
                    error={touched.username && Boolean(errors.username)} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute ı benden false/true degeri bekliyor ondan dolayı daha sağlıklı olması için boolean deger döndürüyoruz.
                    // touched da kullanıcının inputa tıklayıp tıklamadığını yakalıyor
                    helperText={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
                  />
                  {/* error ve helperText propertyleri Textfield componentine ait propertyler. */}
                  {/* mui textfield kullanmadığımzda <span>{touched.username && errors.username}</span> */}
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="FirstName"
                    inputProps={{ "auto-complete": "off" }}
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="LastName"
                    inputProps={{ "auto-complete": "off" }}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />

                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    inputProps={{ "auto-complete": "off" }}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Box sx={{ position: "relative" }}>
                    <TextField
                      id="password"
                      sx={{ width: "100%" }}
                      name="password"
                      inputProps={{ "auto-complete": "off" }}
                      type={`${showPassword ? "text" : "password"}`}
                      label="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                    <Box sx={{ position: "absolute", top: 15, right: 15 }}>
                      {showPassword ? (
                        <VisibilityOffIcon
                          size={32}
                          onClick={handlePasswordVisibility}
                        />
                      ) : (
                        <VisibilityIcon
                          size={32}
                          onClick={handlePasswordVisibility}
                        />
                      )}
                    </Box>
                  </Box>
                  <Box sx={{ position: "relative" }}>
                    <TextField
                      id="confirmPassword"
                      sx={{ width: "100%" }}
                      name="confirmPassword"
                      inputProps={{ "auto-complete": "off" }}
                      type={`${showConfirmPassword ? "text" : "password"}`}
                      label="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.confirmPassword &&
                        Boolean(errors.confirmPassword)
                      }
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
                    />
                    <Box sx={{ position: "absolute", top: 15, right: 15 }}>
                      {showConfirmPassword ? (
                        <VisibilityOffIcon
                          size={32}
                          onClick={handleConfirmPasswordVisibility}
                        />
                      ) : (
                        <VisibilityIcon
                          size={32}
                          onClick={handleConfirmPasswordVisibility}
                        />
                      )}
                    </Box>
                  </Box>

                  <Button variant="contained" type="submit">
                    Sign Up
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
