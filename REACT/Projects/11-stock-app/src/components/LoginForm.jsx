import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required!"),
  password: Yup.string().required("Required!"),
});

const LoginForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
          >
            Sign In
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default LoginForm;
