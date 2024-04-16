import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

//! Yup ile istediğimiz alanlara istediğimiz validasyon koşullarını
//  oluşturuyoruz. Sonra oluşturduğumuz bu şemayı formike tanımlayarak
//  kullanıyoruz. Böylelikle formik hem formumuzu yönetiyor hem de verdiğimiz
//  validationSchema yı uyguluyor. Dikkat edilmesi gereken husus; formikte
//  tanımladığımız initialValues daki keylerle, Yupta tanımladığımız keylerin
//  aynı olması. Eğer bir harf bile farklı olsa o alanla ilgili yazdığınız
//  validation çalışmaz.
export const SignupSchema = Yup.object().shape({
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

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
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
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            id="username"
            name="username" //formik name attributedından eşleştirme yapıyor.
            label="Username"
            inputProps={{
              autoComplete: "off", // Burada "autoComplete" kullanılmalıdır.
            }}
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yaklayan event
            helperText={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
            error={touched.username && Boolean(errors.username)} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute ı benden false/true degeri bekliyor ondan dolayı daha sağlıklı olması için boolean deger döndürüyoruz.
            // touched da kullanıcının inputa tıklayıp tıklamadığını yakalıyor
          />
          <TextField
            label="First Name"
            name="firstName"
            id="firstName"
            inputProps={{
              autoComplete: "off", // Burada "autoComplete" kullanılmalıdır.
            }}
            type="text"
            variant="outlined"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.firstName && errors.firstName}
            error={touched.firstName && Boolean(errors.firstName)}
          />
          <TextField
            label="Last Name"
            name="lastName"
            id="lastName"
            type="text"
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.lastName && errors.lastName}
            error={touched.lastName && Boolean(errors.lastName)}
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
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
                <VisibilityIcon size={32} onClick={handlePasswordVisibility} />
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
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
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
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading" : "Sign Up"}
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
